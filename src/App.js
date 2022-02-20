
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import youtubeApi from "./api/youtubeApi";
import Player from "./components/Player";
import VideoList from "./components/VideoList";
import { createVideo, getVideos } from "./redux/actions/videosAction";

function App() {

  const [state, setstate] = useState({ videoMetaInfo: [], selectedVideoId: null });
  const [pageNo, setpageNo] = useState(1);
  const dispatch = useDispatch();


  async function callYoutubeSearchApi(keyword) {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    })
    setstate({ videoMetaInfo: response.data.items, selectedVideoId: response.data.items[0].id.videoId });

    response.data.items.map(function (video) {
      dispatch(createVideo(video))
    })
  }
 
  useEffect(() => {
   
    dispatch(getVideos(pageNo));
  }, [pageNo])


 //  setInterval(function () { callYoutubeSearchApi("Cricket") }, 10000);

  function currVideo(id) {

    setstate({ ...state, selectedVideoId: id });
   
  }

  
  return (
    <Router>
      <div className="container my-2" style={{textAlign:"center"}}>
        <h1 className="my-2">YOUTUBE FETCHED VIDEOS</h1>
        <Routes>

          <Route exact path="/" element={<VideoList state={state} currVideo={currVideo} setpageNo={setpageNo} pageNo={pageNo} />} />
          <Route exact path="/play" element={<Player state={state} />} />

        </Routes>
      </div >
    </Router>
  );
}

export default App;
