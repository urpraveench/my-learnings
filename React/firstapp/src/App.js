import React from "react";
import ReactPlayer from "react-player/youtube";


const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=cPKLQdz-nkg' />
  );
};


export default App;
