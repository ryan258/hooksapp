[Repo for hooksapp](https://github.com/ryan258/hooksapp)

# Lessons 9 - 12

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

### useState() with forms

onChange={(e)=> setTitle(e.target.value)}

- e - the onChange event that occurred
- target - targets the element that changed
- value is the value of target object where the event occurred

## useEffect()

It's like a life cycle method used inside a class component. This allows us to do something every time the component renders, or re-renders. Or "every time the data in our component changes."

And also on the initial render.

So we can use this to connect with a database or API end point.

Basically if some data in the component is changing, the component will rerender triggering useEffect().

The second arg in useEffect is limiting to what you want to watch for changes. Like useEffect will trigger only when songs data is updated.

Back to [contextapp](https://github.com/ryan258/hooksapp)
