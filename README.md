# setthings

Fluent settings management

```javascript
const set = require('setthings').set
const settings = require('setthings').settings
const assert = require('assert')

// a setting sitting at the top
set('name', 'Alice') 
assert(settings.name === 'Alice')

// something further down
set('book.title', 'Through the Looking Glass')
assert(settings.book.title === 'Through the Looking Glass')

// even further down
set('down.the.rabbit.hole', 'Wonderland')
assert(settings.down.the.rabbit.hole === 'Wonderland')

// and an additional item on the second level
set('book.author', 'Lewis Carroll')
assert(settings.book.author === 'Lewis Carroll')
```

