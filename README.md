# setthings

Pseudo-Fluent Settings Management for the Simple Minded

```javascript
const set = require('setthings').set
const settings = require('setthings').settings

// simply use the dot as you would in javascript
set('name', 'Alice') 
set('book.title', 'Through the Looking Glass')
set('book.author', 'Lewis Carroll')
set('down.the.rabbit.hole', 'Wonderland')

// and get it all as a object
console.dir(settings)
```

You can also merge a given object with default one - this can be useful when you need to make sure an passed option object has all needed properties:

```javascript
const merge = require('settings').merge

// default options
let defaultOptions = { order:'ASC', limit:-1 }

// incomplete options
let given  = { order:'DESC' }

// merge
merge(given, defaultOptions)

// given now contains all fields the default has
console.log(given)




