import React, { FC } from "react";

import { arrImg } from "../../img/main";
import styles from "./BubbleAnimation.module.scss";

const BubbleAnimation: FC = () => {
  return (
    <section className={styles.animation}>
      {arrImg.map((img, index) => (
        <img
          key={index}
          className={styles[`bubble_${index + 1}`]}
          src={img}
          alt=""
        />
      ))}
    </section>
  );
};

export default BubbleAnimation;
