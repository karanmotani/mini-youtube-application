import React from 'react';

// const VideoListItem = (props) => {
  // const video = props.video;

const VideoListItem = ({video, onVideoSelect}) => {
  // ES6, it says that the object we are receiving has a property video,
  // please grab that property and put in the "video" variable

  const image = video.snippet.thumbnails.default;
  const title = video.snippet.title;

  // onVideoSelect is the callback from parent VideoList fired, thus returning
  // the selectedVideo back to the parent component
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list-media">

        <div className="media-left">
          <img className="media-object" src={image.url} height={image.height}
               width={image.width} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {title}
          </div>
        </div>

      </div>
    </li>
  );
};
export default VideoListItem;
