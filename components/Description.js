import React from "react";

export default function Description(props) {
  return (
    <div className="description-container">
      <div class="description-title">{props.title}</div>
      <div class="div description-body">{props.body}</div>
    </div>
  );
}
