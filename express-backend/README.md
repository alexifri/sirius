# Backend application - ExpressJS

## Steps for installation and running

* open a terminal ( CTRL+SHIFT+` )
* `npm init -y`
* `npm i express`
* `npm i axios`
* `npm i node-path`
* FOR DEVELOPMENT
    * `npm run start:dev`
* FOR PRODUCTION
    * `npm run start`

## Main endpoint

* Main route: `localhost:5001/api/process`
* Query param route -> `localhost:5001/api/process?index=<value>`
    * Values for `index` param
        * `NDVI`
        * `NDWI`
        * anything else that will be considered `default`

## 2nd endpoint (array of coordinates as query param)
* Query param route -> `localhost:5001/api/process?index=<value>&array=<array_of_coordinates>`
    * Values for `index` param
        * `NDVI`
        * `NDWI`
        * anything else that will be considered `default`
    * Values for `array` param
        * It is an array of arrays
        * Format: `[[a1c1,a1c2],[a2c1,a2c2],...,[anc1,anc2]]`
        * `a1c1` = array1, coordinate1 ; `a1c2` = array1, coordinate2 ...