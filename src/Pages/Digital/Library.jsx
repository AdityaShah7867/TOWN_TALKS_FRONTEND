import React from 'react';

const VideoGallery = () => {
  const videos = [
    { id: 'video1', src: 'https://www.youtube.com/embed/Z19El7Zt4zc?si=DUndg9XJXa8B_3rm' },
    { id: 'video2', src: 'https://www.youtube.com/embed/42mGU_cIEVM?si=EhV4E-lfB6ydKO0J' },
    { id: 'video3', src: 'https://www.youtube.com/embed/MJO7_E99X4E?si=-ipttZcQRjiTBdNE' },
    { id: 'video4', src: 'https://www.youtube.com/embed/DQ7JPNgU8Wg?si=w54f_H083LlJkP1K' },
    { id: 'video5', src: 'https://www.youtube.com/embed/-ANjtUiYbZ8?si=KSmlQCMGS65XXcnI ' },
    // Add more videos if needed
  ];

  return (
    <div>
        <center>

         <p className='text-3xl font-semibold m-4'>SOME USEFULL VIDEOS</p>
        </center>
 
    <div className="video-gallery flex flex-wrap gap-4 m-2 p-2">
       
      {videos.map(video => (
        <div key={video.id} className="video">
         <iframe width="560" height="315" src={video.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
      ))}
    </div>
    </div>
  );
};

export default VideoGallery;
