import React, { FC } from "react";

import styles from "./MyButtonOut.module.scss";

interface MyButtonOutProps {
  className: string;
  text: string;
}

const MyButtonOut: FC<MyButtonOutProps> = ({ className, text }) => {
  const storageClear = () => {
    sessionStorage.clear();
    window.location.reload();
  };
  return (
    <div className={styles.exit}>
      <button className={className} onClick={storageClear}>
        {text}
      </button>
    </div>
  );
};
export default MyButtonOut;
