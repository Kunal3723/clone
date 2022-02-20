import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

import SingleVid from './SingleVid';

function VideoList(props) {
    const videos = useSelector((state) => state.videos);
   

    return (
        <div className='container'>
            <div className='row' >

                {videos.length ?
                    videos.map(function ({ imgUrl, title, videoId, _id }) {

                        return (
                            <div className='col-md-3 mx-3 my-2' key={_id}>
                                <SingleVid imgUrl={imgUrl} title={title} id={videoId} currVideo={props.currVideo} />
                            </div>
                        )
                    }) :
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }

            </div>
            < div className="container my-3" >
                <div className="d-flex justify-content-between">
                    <button disabled={props.pageNo <= 1} type="button" className="btn btn-dark" onClick={function () { props.setpageNo(props.pageNo - 1);  }}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={function () { props.setpageNo(props.pageNo + 1);  }}>Next &rarr;</button>
                </div>

            </div>
        </div>
    )
}

export default VideoList