const inquirer = require("inquirer")

const question = [
    {
        type: "input",
        name: "3text",
        message: "Enter Logo Text (up to 3 letters): ",
        validate(value) {
            if (value.length <= 3) {
                return true;
            } else {
                return "Invalid amount of characters, Please try again";
            }
        },
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter Text Color Keyword (or hexadecimal number: ",

    },
    {
        type: "list",
        name: "shape",
        choices: ["circle", "triangle", "square"],

    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter Shape Color Keyword (or hexadecimal number): ",

    },
];

const generateLogo = (shape) => {
    const SVG = //insert link and svg dimensions
        ${ shape.renderShape()
    }
        ${ shape.renderText() }
;
    writeFile(./svgfile/${ shape.text }.svg, SVG, (err) => {
        if (err) {
            throw err;

        } else {
            console.log(${ shape.text } );
        }
    });
}
