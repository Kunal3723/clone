import React from 'react'
import Video from './Video'

function Player(props) {
   
  return (
   <Video state={props.state.selectedVideoId}/>
  )
}

export default Player