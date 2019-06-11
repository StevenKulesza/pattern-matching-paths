const fs = require('fs');
const readline = require('readline');
const stream = require('stream');
const instream = fs.createReadStream("./tests/inputs/sample_input.txt");
const outstream = new stream;
const rl = readline.createInterface(instream, outstream);


class PatternMatchingPaths {
    constructor(input){
        this.input = input;
    }

    getInputs() {
    }

    run() {
        rl.on('line', async line => {
        console.log(line)
        });

        rl.on('close', function() {
        console.log('done')
    });

    }
};


const pmp = new PatternMatchingPaths(instream);
pmp.run()
