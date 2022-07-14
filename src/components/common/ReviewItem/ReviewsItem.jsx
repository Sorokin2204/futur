import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ReviewItem.module.scss';
import YouTube from 'react-youtube';
const ReviewItem = ({ img, title, text, name, location, link, preview_image }) => {
  const [viewPlay, setViewPlay] = useState(true);
  function _onReady(event) {
    event.target.playVideoAt(1);
  }
  return (
    <>
      <div className={clsx(styles.reviewItem)}>
        <div className={clsx(styles.reviewImgBox)}>
          {viewPlay ? (
            <>
              <div className={clsx(styles.reviewPlayBtn)} onClick={() => setViewPlay(false)}></div> <img src={preview_image} alt="" className={clsx(styles.reviewImg)} />
            </>
          ) : (
            <iframe className={styles.reviewVideo} id="existing-iframe-example" width="237" height="100%" src={link} frameborder="0"></iframe>
          )}
        </div>

        <div className={clsx(styles.reviewContent)}>
          <span className={clsx(styles.reviewRoom)}>{title}</span>
          <p className={clsx(styles.reviewText)}>{text}</p>
          <span className={clsx(styles.reviewName)}>{name}</span>
          <span className={clsx(styles.reviewAddress)}>{location}</span>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
