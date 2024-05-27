var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "belts"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContent = myStorage.car.inside["glove box"] 

// console.log(gloveBoxContent);

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            'dandelion'
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1]
console.log(secondTree);