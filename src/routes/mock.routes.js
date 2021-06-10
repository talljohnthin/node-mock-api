const express = require("express");
const router = express.Router();
const fs = require('fs');

router.get("/vehicles/:year", async (req, res) => {
   const obj = {
    "year": 2020,
    "makes": [
    "SUBARU",
    "ACURA",
    "ISUZU",
    "PORSCHE",
    "JEEP",
    "KIA",
    "LINCOLN",
    "LAND ROVER",
    "POLESTAR",
    "TOYOTA",
    "MITSUBISHI",
    "CADILLAC",
    "MERCEDES-BENZ",
    "AUDI",
    "FORD",
    "VOLKSWAGEN",
    "XOS",
    "INFINITI",
    "GENESIS",
    "NISSAN",
    "BUICK",
    "TESLA",
    "FIAT",
    "LEXUS",
    "GMC",
    "HONDA",
    "RAM",
    "HYUNDAI",
    "BMW",
    "CHEVROLET",
    "MAZDA",
    "VOLVO",
    "MINI",
    "JAGUAR",
    "CHRYSLER",
    "DODGE"
    ],
    "id": "60b60a4b42ad24905aa14497"
   }
   res.json(obj)
});

router.get("/vehicles/:year/:make", async (req, res) => {
    const obj = {
        "year": 2016,
        "make": "PORSCHE",
        "models": [
        "PANAMERA 4S",
        "BOXSTER SPYDER",
        "BOXSTER",
        "CAYMAN S",
        "CAYMAN GT4",
        "911 GT3",
        "CAYENNE",
        "CAYENNE TURBO",
        "CAYENNE SE HYBRID",
        "911 TARGA S",
        "MACAN TURBO",
        "PANAMERA S",
        "CAYMAN",
        "BOXSTER S",
        "PANAMERA EXCLUSIVE",
        "CAYENNE S",
        "PANAMERA TURBO",
        "MACAN S",
        "CAYENNE GTS",
        "PANAMERA 2",
        "911 GT3 RS",
        "911 CARRERA S",
        "PANAMERA SE HYBRID",
        "PANAMERA GTS",
        "911 CARRERA",
        "911 TURBO",
        "911 TARGA"
        ],
        "id": "60b60a4b42ad24905aa149ca"
        }
    res.json(obj)
});

router.get("/vehicles/:year/:make/:model", async (req, res) => {
    const obj1 = {
        "year": 2016,
        "make": "PORSCHE",
        "model": "BOXSTER",
        "submodels": [
            {
            "submodel": "2WD Convertible",
            "vin": "WP0CA2A80GU000000"
            }
        ],
        "id": "60b60a4c42ad24905aa1b065"
    }
    const obj2 = {
        "year": 2016,
        "make": "PORSCHE",
        "model": "BOXSTER",
        "submodels": [
            {
            "submodel": "2WD Convertible",
            "vin": "WP0CA2A80GU000000"
            },
            {
                "submodel": "3WD Real",
                "vin": "WC4CA2A80GU000000"
            }
        ],
        "id": "60b60a4c42ad24905aa1b065"
    }
    const randomN = Math.floor(Math.random() * 2) + 1
    res.json(randomN === 1 ? obj1 : obj2)
});

router.post("/create", async (req, res) => {
    const data = JSON.stringify(req.body);
    // write JSON string to a file
    fs.writeFile('entry.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
    res.json(data)
});

router.post("/zipcode/:zip", async (req, res) => {
    res.json({"city":"La Crescenta","zipcode" :"91214", "state":"CA"}    )
});

module.exports = router; 