/* eslint-disable react/no-array-index-key */
import React from 'react';
import customStyle from '../styles/timeline.css';

const TimelineItem = ({ status, funder }) => (
  <div className={customStyle.timelineItem}>
    <div className={customStyle.timelineItemContent}>
      <span className={customStyle.tag}>
        {status}
      </span>
      <time>Feb 2020</time>
      <p>{funder}</p>
      <span className={customStyle.circle} />
    </div>
  </div>
);

TimelineItem.propTypes = {

};

const Timeline = (props) => (
  <div className={customStyle.timelineContainer}>
    {props.timelineData.map((data, idx) => (
      <TimelineItem status={data.status} funder={data.funder} key={idx} />
    ))}
  </div>
);

export default Timeline;
