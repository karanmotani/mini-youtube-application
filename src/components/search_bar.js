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
       <div className="search-bar">
          <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
       </div>
     );
   }

   onInputChange(term) {
     this.setState({ term });               // Set the state to the search term
     this.props.onSearchTermChange(term);   // Fire off the callback from parent
   }
 }

export default SearchBar;
