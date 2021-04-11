// eslint-disable @typescript/camelcase
import React from "react";
import classNames from "classnames";

import "./Loading.scss";

const Loading = ({
  isInContainer,
  customstyle,
}: {
  isInContainer?: boolean;
  customstyle?: Object;
}) => {
  const loadingClass = classNames({
    loading: true,
    "loading--inContainer": isInContainer,
  });

  const spinnerClass = classNames({
    loading_spinner: true,
    "loading_spinner--inContainer": isInContainer,
  });

  const bounce1 = classNames({
    loading_doubleBounce1: true,
    "loading_doubleBounce1--white": isInContainer,
  });

  const bounce2 = classNames({
    loading_doubleBounce2: true,
    "loading_doubleBounce2--white": isInContainer,
  });

  return (
    <div className={loadingClass} style={customstyle}>
      <div className={spinnerClass}>
        <div className={bounce1} />
        <div className={bounce2} />
      </div>
    </div>
  );
};

export default Loading;
