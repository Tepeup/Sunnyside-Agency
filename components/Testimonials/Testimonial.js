import React from "react";
import styles from "./Testimonials.module.css";

export default function Testimonial(props) {
  return (
    <div className={styles.testimonialCard}>
      <img src={props.image} alt="photo" className={styles.testimonialImage} />
      <div className={styles.testimonialQuote}>{props.quote}</div>
      <div className={styles.testimonialTitle}>
        <div className={styles.testimonialName}>{props.name}</div>
        <div className={styles.testimonialJob}>{props.job}</div>
      </div>
    </div>
  );
}
