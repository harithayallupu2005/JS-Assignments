Q1:What is the difference between 'var', 'let', and 'const' in JavaScript?
Sol:These are used for declaring the variales.But,'var' is function-scoped and can be re-declared; 
    'let' is block-scoped and cannot be re-declared within the same scope; 'const' is also 
    block-scoped, cannot be re-declared, and cannot be reassigned, although its properties 
    can be modified if it's an object.


Q2:How do you create a new React component?
Sol:To create a new React component, define a function or class that returns JSX and export it.
    For a functional component, use a JavaScript function; for a class-based component, extend 
    React.Component and implement the render method.


Q3:What is the purpose of the render() method in a React component?
Sol:The render() method in a React component is used to define the UI layout and structure by 
    returning JSX. It determines what gets displayed on the screen for that component.

Q4:How do you handle state changes in a React component?
Sol:In a React component, state changes are handled using the useState hook in functional 
    components or this.setState in class components. These methods update the state and trigger 
    a re-render to reflect the changes in the UI.

Q5:What is the difference between a controlled and uncontrolled component in React?
Sol:A controlled component in React is one where the form data is handled by the React component's 
    state, making it easy to manage and control form inputs. An uncontrolled component relies on 
    the DOM to handle form data, using refers to access the values directly.

Q6:How do you pass props to a React component?
Sol:Props are passed to a React component by including them as attributes in the JSX tag of the
    component. 
    For example, <MyComponent propName="value" /> passesa prop named propName with the value
    "value" to MyComponent.

Q7:What is the purpose of the key prop in a React component?
Sol:The key prop in a React component is used to uniquely identify elements in a list, 
    helping React efficiently update and render only the changed elements without re-rendering 
    the entire list.

Q8:How do you handle events in a React component?
Sol:Events in a React component are handled by defining event handler functions and passing 
    them as props to the JSX elements. 
    For example, <button onClick={this.handleClick}>Click me</button> attaches the handleClick 
    method to the button's onClick event.

Q9:What is the difference between a functional component and a class component in React?
Sol:A functional component is a simpler, stateless component defined as a function that returns
    JSX. A class component is more complex, can hold state and lifecycle methods, and is defined 
    as a class that extends React.Component.

Q.10:How do you use React Hooks?
Sol:React Hooks are used in functional components to manage state and side effects.
    For example, useState manages state, and useEffect handles side effects likedata fetching.
    Hooks are called at the top level of the component function.

Q.11:What is the purpose of the useEffect() hook in React?
Sol:The useEffect() hook in React is used to perform side effects in functional components, such 
    as fetching data, subscribing to events, or directly manipulating the DOM. It runs after the 
    render and can be configured to run on specific state or prop changes.


Q.12:How do you fetch data from an API in a React component?
Sol:To fetch data from an API in a React component, use the useEffect hook to perform the fetch 
    operation when the component mounts, and store the fetched data in state using the useState 
    hook. This ensures the data is retrieved and  managed within the component's lifecycle.


Q.13:What is the purpose of the useContext() hook in React?
Sol:The useContext() hook in React is used to access the value of a context,allowing components
    to share data without passing props down manually through every level of the component tree. 
    It simplifies state management and improves code readability.

Q.14:How do you use React Router for client-side routing?
Sol:To use React Router, first install it with npm install react-router-dom.Then, in your main 
    component, wrap your application with <BrowserRouter>. 
    Define routes using <Route> inside a <Switch>, where each <Route> specifies a path and the 
    component to render. The <Switch> ensures only the first matching route is rendered.

Q.15:What is the difference between useState() and useReducer() in React?
Sol:useState() is a hook for managing simple state logic in functional components, allowing you 
    to set and update individual state variables. useReducer() is more suited for complex state 
    logic involving multiple sub-values or state transitions, using a reducer function similar to 
    Redux. It provides more control over state updates and can handle more complex state 
    management scenarios.


Q.16:How do you optimize the performance of a React application?
Sol:To optimize performance in React, use techniques such as memoizing components with 
    'React.memo' to prevent unnecessary re-renders, leveraging the useCallback and useMemo 
    hooks to avoid recalculating values and functions,and splitting code with dynamic imports to 
    reduce initial load time. Additionally, use React's Profiler to identify and address performance
    bottlenecks.


Q.17:What is the purpose of the shouldComponentUpdate() method in a React component?
Sol:The shouldComponentUpdate() method in a React component determines whether the component should
    re-render when there are changes in state or props. It returns a boolean value: true allows the 
    component to update, while false prevents the update. This method helps optimize performance by 
    avoiding unnecessary re-renders.


Q.18:How do you use React DevTools for debugging?
Sol:I use React DevTools to inspect the component hierarchy, state, and props in my application.
    It allows me to temporarily edit props and state, profile performance, and visually highlight 
    components, making it easier to identify and fix issues efficiently.


Q.19:What is the difference between a Higher-Order Component (HOC) and a Render Props
     pattern in React?
Sol:A Higher-Order Component (HOC) is a function that takes a component and returns a new component, 
    adding additional functionality. The Render Props pattern, on the other hand,involves passing a 
    function as a prop to a component, allowing the function to control what gets rendered.


Q.20:How do you use React with TypeScript?
Sol:To use React with TypeScript, I start by creating a TypeScript React project using toolslike 
    Create React App with the TypeScript template. I then define type annotations for props, state, 
    and other elements in my components, ensuring type safety and better code quality through 
    TypeScript's static typing.