import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBcbOoWubrTlW7Qy68NbbJ_urL2G77EWjI';

// Create a new component. This component should produce some HTML

// When we create a component, we are creating a class of the component (a type)
// We can have many instances of class (in this case, App)
// Here, App is a class, not an instance

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // this.setState({ videos: videos });
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      // ES6 - when the key/value pair have same variable name
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    )
  }

  // the property that we are passing (videos) is called Props
  // We are passing prop videos to VideoList
  // So any time the app re-renders,
  // we are updating the VideoList with a new list of videos from the API.

}

// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

// Take this component's generated HTML and put it on the page (in the DOM)

// To render App to the DOM, we need to pass an instance of the class, not the
// class itself
// Before rendering, we need to instantiate our components.
// Creating an instance is very easy
// It can be done as <App></App> or <App />

ReactDOM.render(<App />, document.querySelector('.container-fluid '));



// Refactored the App Component from a functional component to a Class based
// Component so that the App can keep track of the list of videos, by recording
// them on its state

// There is some amount of data that is going to change over time and we want
// to persist throughout the application (throughout it's lifecycle).
