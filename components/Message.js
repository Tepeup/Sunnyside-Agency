import React from "react";

export default function Message(props) {
  return (
    <div className="message-container">
      <div class="message-title"></div>
      <div class="message-body"></div>
      <button className={props.color}>LEARN MORE</button>
    </div>
  );
}
