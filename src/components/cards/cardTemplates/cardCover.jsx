import { CardCommon } from "./cardCommon";

export const CardCover = (props) => {
  return (
    <CardCommon {...props}>
      <p className="card-text mt-4">Нет данных для генерации карты</p>
    </CardCommon>
  );
};
