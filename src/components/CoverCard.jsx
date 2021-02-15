import { Card } from "./Card";

export const CoverCard = (props) => {
  return (
    <Card {...props}>
      <p className="card-text mt-4">Нет данных для генерации карты</p>
    </Card>
  );
};
