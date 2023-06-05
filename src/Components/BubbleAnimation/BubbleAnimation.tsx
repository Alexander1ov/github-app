import React, { FC } from "react";

import BUBBLE1 from "../../img/main/bubble1.png";
import BUBBLE2 from "../../img/main/bubble2.png";
import BUBBLE3 from "../../img/main/bubble3.png";
import BUBBLE4 from "../../img/main/bubble4.png";
import BUBBLE5 from "../../img/main/bubble5.png";
import BUBBLE6 from "../../img/main/bubble6.png";
import BUBBLE7 from "../../img/main/bubble7.png";
import BUBBLE8 from "../../img/main/bubble8.png";
import BUBBLE9 from "../../img/main/bubble9.png";
import BUBBLE10 from "../../img/main/bubble10.png";
import BUBBLE11 from "../../img/main/bubble11.png";
import BUBBLE12 from "../../img/main/bubble12.png";
import BUBBLE13 from "../../img/main/bubble13.png";
import BUBBLE14 from "../../img/main/bubble14.png";
import BUBBLE15 from "../../img/main/bubble15.png";
import BUBBLE16 from "../../img/main/bubble16.png";
import BUBBLE17 from "../../img/main/bubble17.png";
import BUBBLE18 from "../../img/main/bubble8.png";

import styles from "./BubbleAnimation.module.scss";

const BubbleAnimation: FC = () => {
  return (
    <section className={styles.animation}>
      <img className={styles.bubbleFirst} src={BUBBLE1} alt="" />
      <img className={styles.bubbleSecond} src={BUBBLE2} alt="" />
      <img className={styles.bubbleThird} src={BUBBLE3} alt="" />
      <img className={styles.bubbleFourth} src={BUBBLE4} alt="" />
      <img className={styles.bubbleFifth} src={BUBBLE5} alt="" />
      <img className={styles.bubbleSixth} src={BUBBLE6} alt="" />
      <img className={styles.bubbleSeventh} src={BUBBLE7} alt="" />
      <img className={styles.bubbleEighth} src={BUBBLE8} alt="" />
      <img className={styles.bubbleNinth} src={BUBBLE9} alt="" />
      <img className={styles.bubbleTenth} src={BUBBLE10} alt="" />
      <img className={styles.bubbleEleventh} src={BUBBLE11} alt="" />
      <img className={styles.bubbleTwelfth} src={BUBBLE12} alt="" />
      <img className={styles.bubbleThirteenth} src={BUBBLE13} alt="" />
      <img className={styles.bubbleFourteenth} src={BUBBLE14} alt="" />
      <img className={styles.bubbleFifteenth} src={BUBBLE15} alt="" />
      <img className={styles.bubbleSixteenth} src={BUBBLE16} alt="" />
      <img className={styles.bubbleSeventeenth} src={BUBBLE17} alt="" />
      <img className={styles.bubbleEighteenth} src={BUBBLE18} alt="" />
    </section>
  );
};

export default BubbleAnimation;
