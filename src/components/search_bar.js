import React, { Component } from 'react';

// Function based Component

// const SearchBar = () => {
//   return <input />;
// };

// Class based Component

 class SearchBar extends Component {

   constructor(props) {
     super(props);

     this.state = { term: '' };

   }

   render() {
     // return <input onChange={this.onInputChange} />;
     return (
       <div>
          <input
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })} />
       </div>
     );
   }

   onInputChange(event) {
     console.log(event.target.value);
     this.setState({ term: event.target.value });
   }
 }

export default SearchBar;
