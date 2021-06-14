import React from "react";
import styles from "./Message.module.css";

export default function Message(props) {
  return (
    <div className={styles.messageContainer}>
      <div class={styles.messageTitle}>{props.title}</div>
      <div class={styles.messageBody}>{props.body}</div>
      <button className={props.color}>
        <div className={styles.buttonMessage}>LEARN MORE</div>{" "}
        <div
          style={{ backgroundColor: props.color }}
          className={styles.buttonBar}
        ></div>
      </button>
    </div>
  );
}
