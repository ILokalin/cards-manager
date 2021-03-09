import "./style.css";

export const Loader = () => {
  return (
    <div className="loader__over">
      <span className="loader">
        <div className="object" id="object_one"></div>
        <div className="object" id="object_two"></div>
        <div className="object" id="object_three"></div>
        <div className="object" id="object_four"></div>
      </span>
    </div>
  );
};
