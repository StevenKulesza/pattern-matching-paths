#!/bin/sh    
rm -rf tests/outputs
mkdir tests/outputs
cat tests/inputs/sample_input | node index.js > tests/outputs/sample_output
cat tests/inputs/input | node index.js > tests/outputs/output