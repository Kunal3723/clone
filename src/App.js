
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

// FUNCTION TO CALL YOUTUBE API
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
 
  // FETCH VIDEOS FROM OUR REST API, WHENEVER WE CLICK NEXT OR PREVIOUS BUTTON
  useEffect(() => {
   
    dispatch(getVideos(pageNo));
  }, [pageNo])

//CALL YOUTUBE API AFTER EVERY 60SEC
   setInterval(function () { callYoutubeSearchApi("Cricket") }, 60000);

  
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
