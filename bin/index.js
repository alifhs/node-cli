#! /usr/bin/env node
const yargs = require("yargs");
const { processArgv } = require("yargs/build");
const utils = require('./utils.js')
console.log("Greeting from translation app");

const usage = "\nUsage: tran <lang_name> sentence to be translated";
const options = yargs  
      .usage(usage)  
      .option("l", {alias:"languages", describe: "List all supported languages.", type: "boolean", demandOption
: false })                                                                                                    
      .help(true)  
      .argv;

      var sentence = utils.parseSentence(yargs.argv._);
      if(yargs.argv.l == true || yargs.argv.languages == true){  
        utils.showAll();  
        process.exit(1);
    }
      if(yargs.argv._[0] == null){  
        utils.showHelp();  
        process.exit(1);
       
    }


// console.log(yargs.argv._);
// console.log(yargs.argv.l);