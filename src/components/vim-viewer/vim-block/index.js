import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./index.scss";

function VimBlock({ data }) {
  const [name, id] = data.name.split(" ");
  return (
    <div className="vim-wrapper">
      <div className="vim-block">
        <div className="vim-content">
          <div className="vim-avatar">
            <img src={data.image} alt="avatar" />
          </div>
          {/* <div className="vim-items">
            <div className="vim-item">1</div>
            <div className="vim-item">2</div>
          </div> */}
          <div className="vim-status">
            <div className="vim-label">A</div>
            <ProgressBar
              height="8px"
              completed={60}
              baseBgColor="#f6f3ff"
              bgcolor="#2fedb7"
              labelSize="0px"
            />
            {/* <div className="vim-speciality"></div> */}
          </div>
        </div>
      </div>
      <div className="vim-info">
        <span className="vim-name">{name}</span>
        <span className="vim-id">{id}</span>
      </div>
    </div>
  );
}

export default VimBlock;
