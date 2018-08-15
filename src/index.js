import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBcbOoWubrTlW7Qy68NbbJ_urL2G77EWjI';

// Create a new component. This component should produce some HTML

// When we create a component, we are creating a class of the component (a type)
// We can have many instances of class (in this case, App)
// Here, App is a class, not an instance

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)

// To render App to the DOM, we need to pass an instance of the class, not the
// class itself
// Before rendering, we need to instantiate our components.
// Creating an instance is very easy
// It can be done as <App></App> or <App />

ReactDOM.render(<App />, document.querySelector('.container-fluid '));
