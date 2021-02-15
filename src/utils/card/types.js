export const STUDENT_CARD_TYPE = "STUDENT";
export const COVER_CARD_TYPE = "COVER";

export const emptyCardTemplate = {
  id: "_00000000",
  type: COVER_CARD_TYPE,
  firstName: "Имя",
  lastName: "Неустановлено",
};

const CardTypes = {
  [STUDENT_CARD_TYPE]: { genitive: "студента" },
  DEFAULT: { genitive: "неустановленного типа" },
};

export const getCardType = (card) => {
  return {
    genitive: CardTypes[card?.type]?.genitive ?? CardTypes.DEFAULT.genitive,
  };
};
