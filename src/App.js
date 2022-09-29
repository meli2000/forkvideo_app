import './App.css';
import { createContext, useEffect, useState } from 'react'
import { Gallery } from './components/gallery/Gallery';
import { Navigation } from './components/navigation/Navigation';
import { Header } from './components/header/Header';

export const VideoContext = createContext()

function App() {

  let [videos, setVideos] = useState([])
  let [video, setVideo] = useState()

  useEffect(() => {
    (async () => {
      const response = await fetch("/videos");
      const data = await response.json();
      setVideos(data);
      console.log(response)
    })()
  }, []);
  
  return (
    <div className="App">
      <Navigation />
      <div className='contenedorvideo'>
      <VideoContext.Provider value={{video, setVideo}}>
      {video ? (
        <video src={`/video/${decodeURIComponent(video)}`} width="1080px" controls></video>
      ) : (<Header />)}
      <Gallery videos={videos} video={video}/>
      </VideoContext.Provider>
      </div>
    </div>
  );
}

export default App;

