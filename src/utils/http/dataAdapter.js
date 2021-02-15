import { STUDENT_CARD_TYPE, COVER_CARD_TYPE } from "utils/card";

const HTTP_STUDENT_TYPE = "stud";

const adapterTypeHandler = {
  [HTTP_STUDENT_TYPE]: STUDENT_CARD_TYPE,
  DEFAULT: COVER_CARD_TYPE,
};

export const dataAdapter = (response) => {
  return response.map((card) => {
    const { id, name, surename, type, college, course } = card;

    return {
      type: adapterTypeHandler[type] ?? adapterTypeHandler.DEFAULT,
      firstName: name,
      lastName: surename,
      college: college.name,
      course,
      id,
    };
  });
};
