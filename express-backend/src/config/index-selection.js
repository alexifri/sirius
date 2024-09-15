
export const indexSelection = (index) => {
    let evalscript = '';
    switch(index){
        case 'NDVI':
            evalscript = '//VERSION=3\n\nlet viz = ColorRampVisualizer.createWhiteGreen();\n\nfunction evaluatePixel(samples) {\n    let val = index(samples.B08, samples.B04);\n    val = viz.process(val);\n    val.push(samples.dataMask);\n    return val;\n}\n\nfunction setup() {\n  return {\n    input: [{\n      bands: [\n        \"B04\",\n        \"B08\",\n        \"dataMask\"\n      ]\n    }],\n    output: {\n      bands: 4\n    }\n  }\n}\n';
            break;
        case 'NDWI':
            evalscript = '//VERSION=3\n\nlet viz = ColorRampVisualizer.createWhiteGreen();\n\nfunction evaluatePixel(samples) {\n    let val = index(samples.B03, samples.B08);\n    val = viz.process(val);\n    val.push(samples.dataMask);\n    return val;\n}\n\nfunction setup() {\n  return {\n    input: [{\n      bands: [\n        \"B03\",\n        \"B08\",\n        \"dataMask\"\n      ]\n    }],\n    output: {\n      bands: 4\n    }\n  }\n}\n';
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
            evalscript = '//VERSION=3\n\nfunction setup() {\n  return {\n    input: [\"B02\", \"B03\", \"B04\"],\n    output: { bands: 3 }\n  };\n}\n\nfunction evaluatePixel(sample) {\n  return [2.5 * sample.B04, 2.5 * sample.B03, 2.5 * sample.B02];\n}\n';
            break;
    }
    return evalscript;
};
