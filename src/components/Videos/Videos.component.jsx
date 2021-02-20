import React from 'react';
import mockData from '../../youtube-videos-mock.json';
//import Styled from './styled';
//I didnt add styled-components file because it throws me errors in the render method
import './Videos.styles.css';

const Videos = () => {
  return (
    <div className="videos" data-testid="videos-container">
      {mockData.items &&
        mockData.items.map((item) => (
          <div className="video" key={item.etag}>
            <div className="img-container">
              <img
                className="video-img"
                src={item.snippet.thumbnails.default.url}
                alt={item.snippet.title}
              />
            </div>
            <div className="video-content">{item.snippet.title}</div>
          </div>
        ))}
    </div>
  );
};

export default Videos;
