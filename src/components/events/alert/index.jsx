import React from "react";
import { useDispatch } from "react-redux";
import { removeAlert } from "state/ducks/events";

const style = {
  alert: {
    position: "absolute",
    top: 0,
    zIndex: 1000,
    left: "50%",
    transform: "translateX(-50%)",
  },
  button: {
    border: "none",
    backgroundColor: "transparent",
  },
};

export const Alert = ({ message }) => {
  const dispatch = useDispatch();

  const onCloseButtonClick = () => {
    dispatch(removeAlert());
  };

  return (
    <div
      style={style.alert}
      className="alert align-center d-flex justify-content-between container alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Warning!</strong>
      &nbsp;{message}
      <button
        className="close btn"
        type="button"
        style={style.button}
        data-dismiss="alert"
        aria-label="Close"
        onClick={onCloseButtonClick}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
