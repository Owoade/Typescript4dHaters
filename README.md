# Typescript4dHaters

 
### literals

```
const x = _number(2); // no Error, assigns the value of 2 to x

const isValid = _boolean("true"); // throws a TypeError

const name = _string("Owoade"); // no Error, assigns value of 'Owoade' to name 

const names = _string([ "ade", "bayo", 2], "list"); // throws a TypeError

const ids = _number([ 1, 2, 3], "list"); // no Error, assigns the value of [ 1, 2, 3] to ids

```

### tupule

```
const variableName = _tupule(...val, ...types);

const myTupple = _tupule([1, "age", true, [1, 2, 3] ], ["number", "string", "boolean", [] ]) // no Error

```

### interface

```
const objectName = _object(object, interface);

const userInterface = {
 username: "string",
 id: "number",
 isAdmin: "boolean"
}

const user = _object({ username: "anu12", id: 023, isAdmin: true}, userInterface ) // no Error

```

