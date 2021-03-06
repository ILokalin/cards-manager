import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { forward, backward } from "redux/actions";
import { KeyMapHandler } from "utils/keyMap";

export const CardNavBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
    // eslint-disable-next-line
  }, []);

  const keydownHandler = ({ key }) => {
    const action = KeyMapHandler[key] ?? KeyMapHandler.DEFAULT;
    if (Boolean(action)) {
      dispatch(action());
    }
  };

  const previusButtonHandler = () => {
    dispatch(backward());
  };

  const nextButtonHandler = () => {
    dispatch(forward());
  };

  return (
    <div className="d-flex justify-content-between">
      <button className="btn btn-secondary mt-4" onClick={previusButtonHandler}>
        Предыдущий
      </button>
      <button className="btn btn-secondary mt-4" onClick={nextButtonHandler}>
        Следующий
      </button>
    </div>
  );
};
