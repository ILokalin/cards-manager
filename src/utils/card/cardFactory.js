import { STUDENT_CARD_TYPE, COVER_CARD_TYPE } from "./types";
import { CardStudent } from "components/CardStudent";
import { CardCover } from "components/CardCover";

export const CardFactory = {
  [STUDENT_CARD_TYPE]: (cardProps) => <CardStudent {...cardProps} />,
  [COVER_CARD_TYPE]: (cardProps) => <CardCover {...cardProps} />,
};
