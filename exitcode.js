// Test file to pass exit code to the environment. 
// `node ./exitcode.js 1`
var myArgs = process.argv.slice(2);
process.exit(myArgs[0]);
