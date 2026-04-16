import Tea from "./Tea.mp4";
import "./JumboTron.css";
import { QuestionMark } from "iconoir-react";

function JumbroTron() {
  return (
    <>
      <div className="video-container" style={{ display: "relative" }}>
        <button
          style={{
            position: "fixed",
            bottom: "14px",
            right: "20px",
            width: "50px",
            borderRadius: "50%",
          }}
        >
          <QuestionMark />
        </button>
        <video
          width="100%"
          height="500"
          style={{ objectFit: "cover" }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          defaultMuted
          webkit-playsinline="true"
        >
          <source src={Tea} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default JumbroTron;
