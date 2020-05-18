[Repo for hooksapp](https://github.com/ryan258/hooksapp)

- use the uuid package to give new items a new unique id

## useState() Hook

With useState() we can use state in functional components. It's just a special function.

useState(array of initial state objects, function used to edit this piece of state) - use destructuring to get these 2 different values

- data
- function to change the data - this will completely replace the current value of data

When using uuid for keys you'll want to do it like this:

- import { v4 as uuidv4 } from "uuid";
- id: uuidv4()

- declare it
- give it the initical state
- set up a function to manipulate the old state and completely replace it with a new state
- use that function in a handler
