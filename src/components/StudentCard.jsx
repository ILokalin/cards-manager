import { Card } from "./Card";

export const StudentCard = (props) => {
  const { course, college } = props;
  return (
    <Card {...props}>
      <p className="card-text mt-4">
        Учебное заведение:&nbsp;
        <span className="fw-bold">{college}</span>
      </p>
      <p className="card-text">
        Студент:&nbsp;
        <span className="fw-bold">{course}-го курса</span>
      </p>
    </Card>
  );
};
