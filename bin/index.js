#! /usr/bin/env node
const yargs = require("yargs");
const utils = require('./utils.js')
const translate = require('@vitalets/google-translate-api');
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
       
    }

    if(yargs.argv._[0])  
    var language = yargs.argv._[0].toLowerCase(); // stores the language.
    //parsing the language specified to the ISO-639-1 code.                                                                                              
    language = utils.parseLanguage(language);
    console.log(language, sentence);

    if(sentence == ""){                                                                                          
      console.error("\nThe entered sentence is like John Cena, I can't see it!\n")  
      console.log("Enter tran --help to get started.\n")  
      process.exit(0);
  }
 
   translate(sentence, {to: language}).then(res => {
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
    console.error(err);
});
// console.log(yargs.argv._);
// console.log(yargs.argv.l);