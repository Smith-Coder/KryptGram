import React, { Component } from "react";
import video1 from "../public/intro-video.mp4";
class Video extends Component {
  render() {
    return (
      <div>
        <video src={video1} autoPlay loop  muted/>
      </div>
    );
  }
}

export default Video;