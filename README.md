### State Management

Context API
- context components => MovieContext
    We make separate component which contain provider that contains
    state and functionalities to pass on other component without need to pass each component, Context lets us pass a value deep into the component tree.
- createContext() 
    Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

-----------------------------------------------------------------------

=> Context provides a way to pass data through the component tree without having to pass props down manually at every level.
=> Context is React out-of-the-box solution to solve the props drilling problem.

{ As we know:  As with Redux, it allows us to create a kind of global state (component) which can be accessed anywhere from a component tree. }

All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.


usage: Some examples of this kind of data:
    - The current UI theme.
    - The current UI language.
    - User’s profile information (avatar, name, etc.).