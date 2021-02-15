import { STUDENT_CARD_TYPE, COVER_CARD_TYPE } from "./types";
import { StudentCard } from "components/StudentCard";
import { CoverCard } from "components/CoverCard";

export const CardFactory = {
  [STUDENT_CARD_TYPE]: (cardProps) => <StudentCard {...cardProps} />,
  [COVER_CARD_TYPE]: (cardProps) => <CoverCard {...cardProps} />,
};
