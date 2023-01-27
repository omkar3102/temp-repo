//Modules
//CommonJS library is used by node
//every file in node is a module
const names = require('./4-names')
const sayHi = require('./5-utils')
const ares = require('./6-alternate')
require('./goofy-ahh')
sayHi('susan')
sayHi(names.omkar)
sayHi(names.eren)