//file sync module
const {readFileSync , writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-sync.txt',
`Here is the result: ${first}, ${second}`, {flag: 'a'}
)
console.log('done with this task')
console.log('starting the next one')

//writeFileSync- the program actually writes a file and stores both the inputs of read file.
//if there are several users at the same time reading the file thhe application can be down or it can crash.