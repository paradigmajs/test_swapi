import React from "react";

export default function PreviewPage() {
  return (
    <div className="page">
      <div
        style={{
          overflow: "hidden",
          position: "absolute",
          left: "0",
          top: "0",
          width: "50px",
          height: "25px",
        }}
      >
        <div style={{ marginTop: "-290px" }}>
          <object width="420" height="315">
            <param
              name="movie"
              value="https://www.youtube.com/v/EjMNNpIksaI?version=3&amp;hl=en_US&autoplay=1&amp;autohide=2"
            ></param>
            <param name="allowFullScreen" value="true"></param>
            <param name="allowscriptaccess" value="always"></param>
            <embed
              src="https://www.youtube.com/v/EjMNNpIksaI?version=3&amp;hl=en_US&autoplay=1&amp;autohide=2"
              type="application/x-shockwave-flash"
              width="420"
              height="315"
              allowscriptaccess="always"
              allowFullScreen={true}
            ></embed>
          </object>
        </div>
      </div>

      <p id="start">A short time ago in a browser very, very close&hellip;</p>

      <h1>
        STAR WARS<sub>API</sub>
      </h1>

      <div id="titles">
        <div id="titlecontent">
          <p className="center">
            Test task
            <br />
            On react js
          </p>

          <p>Stack used...</p>

          <p>React, Redux, Thunk, Html , Css </p>
          <p>Spent about 6 hours</p>
          <p>Maybe there is a hardcode somewhere</p>
          <p>I apologize in advance</p>
          <p>I wanted to add a modal window but did not have time</p>

          <p className="center">A little bit about yourself</p>

          <p>I'll leave git and telegram below:</p>

          <p className="center">
            <a href="https://github.com/paradigmajs">Git Paradigma</a>
          </p>
          <p className="center">
            <a href="https://t.me/paradigma_js">Telegram Paradigma</a>
          </p>

          <p>Page will load automatically</p>
        </div>
      </div>
      <iframe
        style={{ visibility: "hidden" }}
        width="560"
        title='video'
        height="315"
        src="https://www.youtube.com/embed/1KAOq7XX2OY"
        frameBorder="0"
        allowFullScreen={true}
      />
    </div>
  );
}
