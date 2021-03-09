import { STUDENT_CARD_TYPE, COVER_CARD_TYPE } from "./types";
import { CardStudent, CardCover } from "components/cards/cardTemplates";

export const CardFactory = {
  [STUDENT_CARD_TYPE]: (cardProps) => <CardStudent {...cardProps} />,
  [COVER_CARD_TYPE]: (cardProps) => <CardCover {...cardProps} />,
};
