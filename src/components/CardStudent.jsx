import { CardTemplate } from "components/CardTemplate";

export const CardStudent = (props) => {
  const { course, college } = props;
  return (
    <CardTemplate {...props}>
      <p className="card-text mt-4">
        Учебное заведение:&nbsp;
        <span className="fw-bold">{college}</span>
      </p>
      <p className="card-text">
        Студент:&nbsp;
        <span className="fw-bold">{course}-го курса</span>
      </p>
    </CardTemplate>
  );
};
