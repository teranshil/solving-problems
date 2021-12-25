```js
import fs from 'fs';
import { promisify } from "util";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

/** Promise.all returns array with all responses of the passed promises **/
Promise.all(readFile('./data/', { encoding: 'utf-8' }), 
            readFile('./data/', { encoding: 'utf-8' }), readFile('./data/', { encoding: 'utf-8' }))
        .then( data => data.map(e => JSON.parse(e)));
```