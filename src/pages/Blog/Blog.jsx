import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto p-5 py-16">
      <h2 className="text-5xl font-semibold mb-5">Blog</h2>
      <div>
        <div className="p-5 shadow mb-3">
          <h3 className="text-2xl font-semibold mb-3">
            Tell us the differences between uncontrolled and controlled
            components.
          </h3>
          <p>
            Controlled Components are components that are controlled by its
            parent component. They don't have any state so they rely on the
            props passed down from the parent component. Uncontrolled Components
            are components that are not controlled by its parent component. They
            have their own states and doesn't rely on props passed down from
            parent component.
          </p>
        </div>
        <div className="p-5 shadow mb-3">
          <h3 className="text-2xl font-semibold mb-3">
          How to validate React props using PropTypes
          </h3>
          <p>
            Proptypes is used to validate type of a prop passed into a component. To use it, we install prop-types package as it has been separated after React 15.5.0. Then we define types for necessary props like string, number, boolean, etc. As a result, if we put any value type other than that, we will get an warning in the console. These type checking can only happen in development mode to find bugs.
          </p>
        </div>
        <div className="p-5 shadow mb-3">
          <h3 className="text-2xl font-semibold mb-3">
          Tell us the difference between nodejs and express js.
          </h3>
          <p>
            NodeJS is a Javascript runtime used to build server side applications. Express.js is a open source Node.js web framework. Node.js is made using Google's V8 engine but express.js is made using node.js. Node.js can be used independently but express.js needs node.js.
          </p>
        </div>
        <div className="p-5 shadow mb-3">
          <h3 className="text-2xl font-semibold mb-3">
          What is a custom hook, and why will you create a custom hook?
          </h3>
          <p>
            Custom hook is a function used to reuse a component logic. If you have logic that can be used in multiple components, we can take that into hook. Hooks are called in a functional component on top of the definition. Hooks return non-jsx data and manage their own state.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
