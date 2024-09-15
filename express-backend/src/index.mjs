import express from 'express';
import axios from 'axios';
import fs from 'fs';
import {getToken} from './config/token.js';
import fetch from 'node-fetch';
import path from 'path';
import { indexSelection } from './config/index-selection.js';

const app = express();
const PORT = 5001;

app.use(express.json());

const logRequest = (req, res, next) => {
    console.log(`Request: ${req.method} - ${req.url}`);
    next();
};

// metoda de testare a serverului
// app.get('/', logRequest, async (req, res) => {
//     const geometryData = fs.readFileSync("./resources/geometry.json", 'utf8');
//     const geometry = JSON.parse(geometryData);
//     console.log(geometryData);
//     res.status(200).json(geometry);
// });

app.get('/api/process', logRequest, async (req, res) => {
    // Get token from CLIENT_ID and CLIENT_SECRET
    const token = await getToken();

    const indexSelected = req.query.index;
    const evalscript = indexSelection(indexSelected);
    console.log(evalscript);
    // Request body to match the provided structure
    const data = {
        input: {
            bounds: {
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        [
                            [27.705632, 44.554661],
                            [27.767392, 44.578631],
                            [27.75504, 44.592813],
                            [27.762931, 44.595258],
                            [27.747495, 44.613835],
                            [27.75573, 44.626053],
                            [27.778032, 44.620677],
                            [27.78399, 44.651849],
                            [27.803427, 44.648529],
                            [27.810289, 44.644132],
                            [27.817495, 44.647552],
                            [27.819896, 44.65146],
                            [27.808917, 44.660496],
                            [27.822298, 44.662449],
                            [27.817838, 44.670019],
                            [27.823671, 44.67246],
                            [27.839454, 44.671239],
                            [27.844943, 44.673437],
                            [27.846659, 44.667333],
                            [27.856266, 44.665868],
                            [27.854894, 44.676611],
                            [27.86004, 44.678808],
                            [27.85009, 44.691989],
                            [27.859354, 44.699799],
                            [27.886803, 44.686619],
                            [27.896753, 44.673193],
                            [27.898469, 44.652925],
                            [27.929349, 44.635826],
                            [27.925232, 44.626542],
                            [27.906704, 44.610169],
                            [27.910478, 44.604547],
                            [27.903616, 44.602347],
                            [27.898469, 44.60968],
                            [27.891264, 44.610902],
                            [27.881999, 44.597947],
                            [27.88646, 44.595991],
                            [27.876853, 44.584744],
                            [27.867246, 44.589145],
                            [27.863128, 44.586945],
                            [27.853178, 44.594035],
                            [27.837052, 44.585722],
                            [27.848718, 44.57105],
                            [27.81372, 44.554661],
                            [27.808917, 44.559553],
                            [27.745098, 44.534351],
                            [27.735148, 44.547321],
                            [27.725884, 44.54365],
                            [27.718678, 44.545853],
                            [27.716277, 44.549523],
                            [27.711473, 44.547321],
                            [27.705632, 44.554661]
                        ]
                    ]
                }
            },
            data: [
                {
                    dataFilter: {
                        timeRange: {
                            from: "2024-08-14T00:00:00Z",
                            to: "2024-09-14T23:59:59Z"
                        },
                        maxCloudCoverage: 20
                    },
                    type: 'sentinel-2-l2a'
                }
            ]
        },
        output: {
            width: 642.058,
            height: 666.118,
            responses: [
                {
                    identifier: 'default',
                    format: {
                        type: 'image/jpeg'
                    }
                }
            ]
        },
        evalscript: evalscript 
    };
    //"//VERSION=3\nlet minVal = 0.0;\nlet maxVal = 0.25;\n\nlet viz = ColorRampVisualizer.createWhiteGreen(minVal, maxVal);\n\nfunction evaluatePixel(samples) {\n    let val = samples.B03 * index(samples.B08, samples.B04);\n    val = viz.process(val);\n    val.push(samples.dataMask);\n    return val;\n}\n\nfunction setup() {\n  return {\n    input: [{\n      bands: [\n        \"B03\",\n        \"B04\",\n        \"B08\",\n        \"dataMask\"\n      ]\n    }],\n    output: {\n      bands: 4\n    }\n  }\n}"
    

    try{
        const url = 'https://sh.dataspace.copernicus.eu/api/v1/process';
        const customHeaders = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        await fetch(url, {
            method: 'POST',
            headers: customHeaders,
            body: JSON.stringify(data)
        })
        .then(response => response.arrayBuffer())
        .then(buffer => {
            if(indexSelected === 'NDVI')
                fs.writeFileSync('./resources/ndvi.tiff', Buffer.from(buffer));
            else if(indexSelected === 'NDWI')
                fs.writeFileSync('./resources/ndwi.tiff', Buffer.from(buffer));
            else
                fs.writeFileSync('./resources/noindexselected.tiff', Buffer.from(buffer));
        })
        .then(() => {
            console.log('File written successfully');
            if(indexSelected === 'NDVI')
                res.status(200).sendFile(path.resolve('./resources/ndvi.tiff'));
            else if(indexSelected === 'NDWI')
                res.status(200).sendFile(path.resolve('./resources/ndwi.tiff'));
            else
                res.status(200).sendFile(path.resolve('./resources/noindexselected.tiff'));
        });
    } catch (error) {
        console.log(error);
        res.json({ error: 'API call failed', details: error.message });
    }
});

app.get('/api/v2/process', logRequest, async (req, res) => {
    // Get token from CLIENT_ID and CLIENT_SECRET
    const token = await getToken();

    const indexSelected = req.query.index;
    // I want to extract an array of array that will consist of the coordinates from the query of the request
    const coordsString = req.query.array;
    const coordsArray = JSON.parse(coordsString);
    const evalscript = indexSelection(indexSelected);

    // Request body to match the provided structure
    const data = {
        input: {
            bounds: {
                geometry: {
                    type: "Polygon",
                    coordinates: [
                        coordsArray
                    ]
                }
            },
            data: [
                {
                    dataFilter: {
                        timeRange: {
                            from: "2024-08-14T00:00:00Z",
                            to: "2024-09-14T23:59:59Z"
                        },
                        maxCloudCoverage: 20
                    },
                    type: 'sentinel-2-l2a'
                }
            ]
        },
        output: {
            width: 642.058,
            height: 666.118,
            responses: [
                {
                    identifier: 'default',
                    format: {
                        type: 'image/png'
                    }
                }
            ]
        },
        evalscript: evalscript 
    };

    try{
        const url = 'https://sh.dataspace.copernicus.eu/api/v1/process';
        const customHeaders = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        await fetch(url, {
            method: 'POST',
            headers: customHeaders,
            body: JSON.stringify(data)
        })
        .then(response => response.arrayBuffer())
        .then(buffer => {
            if(indexSelected === 'NDVI')
                fs.writeFileSync('./resources/ndvi.tiff', Buffer.from(buffer));
            else if(indexSelected === 'NDWI')
                fs.writeFileSync('./resources/ndwi.tiff', Buffer.from(buffer));
            else if(indexSelected === 'NDWIFLOODING')
                fs.writeFileSync('./resources/ndwiflooding.tiff', Buffer.from(buffer));
            else
                fs.writeFileSync('./resources/noindexselected.tiff', Buffer.from(buffer));
        })
        .then(() => {
            console.log('File written successfully');
            if(indexSelected === 'NDVI')
                res.status(200).sendFile(path.resolve('./resources/ndvi.tiff'));
            else if(indexSelected === 'NDWI')
                res.status(200).sendFile(path.resolve('./resources/ndwi.tiff'));
            else if(indexSelected === 'NDWIFLOODING')
                res.status(200).sendFile(path.resolve('./resources/ndwiflooding.tiff'));
            else
                res.status(200).sendFile(path.resolve('./resources/noindexselected.tiff'));
        });
    } catch (error) {
        console.log(error);
        res.json({ error: 'API call failed', details: error.message });
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
