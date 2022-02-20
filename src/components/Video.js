import React from 'react'

function Video(props) {

    return (
        <div className="video-responsive">
          <div className="container my-3">
        <iframe
          width="1000"
          height="480"
          src={`https://www.youtube.com/embed/${props.state}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      </div>
    )
}

export default Video