#!/usr/bin/env node
const chalk = require('chalk');
const figlet = require('figlet');
const version = "1.0"

// Manage arguments
var myArgs = process.argv.slice(2);

if (myArgs.includes("--help")) {
    console.log(figlet.textSync('Sharks', { horizontalLayout: 'full' }), "\nVersion: ", version)
}

const sharks = {
    0: "\n   o                                               \n                             ___..                       ,\n                     __..--''__ (                      .';\n o      __.-------.-'            `--..__             .'  ;\n   _.--'   0)         .--._             ``--...____.'   .'\n  (     _.      )).   .__.-''                          <\n   `````---....._____.....-   -..___       _____...--'-.'.\n jgs                   `-.___.'     ```````             `.;\n",
    1: "\n                         __\n      o                 /' ) \n                      /'   (                          ,\n                  __/'     )                        .' `;\n   o      _.-~~~~'          ``---..__             .'   ;\n     _.--'   b)                      ``--...____.'   .'\n    (     _.      )).      `-._                     <\n     `vvvvvvv-)-.....___.-     `-.         __...--'-.'.\n       `^^^^^'-------.....`-.___.'----... .'         `.;\n                                  jgs    `-`           ` \n",
    2: "\n                         __\n      o                 /' ) \n                      /'   (                          ,\n                  __/'     )                        .' `;\n   o      _.-~~~~'          ``---..__             .'   ;\n     _.--'  b)                       ``--...____.'   .'\n    (     _.      )).      `-._                     <\n     `\\|\\|\\|\\|)-.....___.-     `-.         __...--'-.'.\n       `---......_______,,,`.___.'----... .'         `.;\n                                  jgs    `-`           ` \n"
};

const colours = {
    0: "green",
    1: "yellow",
    2: "red"
}

const status = {
    0: "Good",
    1: "Failed - General Error Code",
    2: "Failed - other Error"
}

myArgs.forEach(element => {
    const sharknumber = element > 2 ? 2 : element;
    if (!isNaN(sharknumber) && sharks[sharknumber]) {
        console.log(chalk[colours[sharknumber]](sharks[sharknumber])  );
        console.log(figlet.textSync(status[sharknumber] , { font: "standard", horizontalLayout: 'full' } ),  `\nExit Code: (${element})`   );
    }
});

