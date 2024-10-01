import React from 'react';
import ReactPlayer from 'react-player';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoGallery = ({ videos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className="video-gallery">
      {videos.length === 1 ? (
       
        <div className="video-item">
          <ReactPlayer url={videos[0].url} controls={true} />
        </div>
      ) : (
 
        <Slider {...settings}>
          {videos.map((video) => (
            <div key={video.id} className="video-item">
              <ReactPlayer url={video.url} controls={true} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default VideoGallery;
