import { CardTemplate } from "./CardTemplate";

export const CardCover = (props) => {
  return (
    <CardTemplate {...props}>
      <p className="card-text mt-4">Нет данных для генерации карты</p>
    </CardTemplate>
  );
};
