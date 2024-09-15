export const indexSelection = (index) => {
    let evalscript = '';

    switch (index) {
        case 'NDVI':
            evalscript = `
            // VERSION=3

            function setup() {
                return {
                    input: [{
                        bands: ["B06", "B08", "dataMask"],
                        units: "REFLECTANCE"
                    }],
                    output: {
                        bands: 4
                    }
                };
            }

            function evaluatePixel(samples) {
                let val = index(samples.B08, samples.B06);
                let color;

                if (val < 0.0) {
                    color = [0, 0, 255];
                } else if (val < 0.3) {
                    color = [102 + 153 * (val / 0.3), 51 + 102 * (val / 0.3), 0];
                } else if (val < 0.5) {
                    color = [153 + 102 * ((val - 0.3) / 0.2), 102 + 153 * ((val - 0.3) / 0.2), 0];
                } else if (val <= 1.0) {
                    color = [255 - 153 * ((val - 0.5) / 0.5), 255 - 102 * ((val - 0.5) / 0.5), 0];
                } else {
                    color = [0, 0, 0];
                }

                color.push(samples.dataMask);
                return color;
            }

            function finalize() {
                let legend = {
                    "0.0 - 0.3": "Dark to bright brown",
                    "0.3 - 0.5": "Bright brown to yellow",
                    "0.5 - 1.0": "Yellow to dark green"
                };
                return legend;
            }
            `;
            break;

        case 'NDWI':
            evalscript = `
            // VERSION=3

            let viz = ColorRampVisualizer.createWhiteGreen();

            function evaluatePixel(samples) {
                let val = index(samples.B03, samples.B08);
                val = viz.process(val);
                val.push(samples.dataMask);
                return val;
            }

            function setup() {
                return {
                    input: [{
                        bands: ["B03", "B08", "dataMask"]
                    }],
                    output: {
                        bands: 4
                    }
                };
            }
            `;
            break;
            case 'NDWIFLOODING':
                evalscript = `//VERSION=3
            
            function evaluatePixel(samples) {
                let ndwi = index(samples.B03, samples.B08);
                if (ndwi > 0.2) {
                    // Water area, color it BLUE
                    return [0, 0, 1, samples.dataMask]; // Blue color with data mask
                } else if (ndwi >= 0.0 && ndwi <= 0.2) {
                    // Flooding area, color it GREEN
                    return [0, 1, 0, samples.dataMask]; // Green color with data mask
                } else {
                    // Make non-water, non-flooding areas transparent
                    return [0, 0, 0, 0];
                }
            }
            
            function setup() {
              return {
                input: [{
                  bands: [
                    "B03",
                    "B08",
                    "dataMask"
                  ]
                }],
                output: {
                  bands: 4 // RGBA output
                }
              };
            }`;
                break;
        default:
            evalscript = `
            // VERSION=3

            function setup() {
                return {
                    input: ["B02", "B03", "B04"],
                    output: {
                        bands: 3
                    }
                };
            }

            function evaluatePixel(sample) {
                return [2.5 * sample.B04, 2.5 * sample.B03, 2.5 * sample.B02];
            }
            `;
            break;
    }
    
    return evalscript;
};
