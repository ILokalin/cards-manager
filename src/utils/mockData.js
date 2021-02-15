import { getRandomElement } from "./arrayTools";

const FIRST_NAME = [
  { name: "Мария", gender: "female" },
  { name: "Иван", gender: "male" },
  { name: "Евгений", gender: "male" },
  { name: "Олег", gender: "male" },
  { name: "Семен", gender: "male" },
  { name: "Ольга", gender: "female" },
];
const LAST_NAME = [
  { name: "Иванова", gender: "female" },
  { name: "Лионова", gender: "female" },
  { name: "Светлова", gender: "female" },
  { name: "Толстов", gender: "male" },
  { name: "Еремин", gender: "male" },
  { name: "Ольховиков", gender: "male" },
];
const COURSE = [1, 2, 3, 4];
const COLLEGE = [
  "Ульяновский колледж спортивного питания",
  "Верхнепышминский институт управления и права",
  "Уральская академия снега и мороза",
];
const MAX_COUNT_DATA = 20;

const getUID = () => {
  return Math.random().toString(36).substr(2, 9);
};

const getStudentCard = () => {
  const firstName = getRandomElement(FIRST_NAME);
  const lastName = getRandomElement(
    LAST_NAME.filter(({ gender }) => gender === firstName.gender)
  ).name;
  return {
    type: "STUDENT",
    id: getUID(),
    firstName: firstName.name,
    lastName,
    course: getRandomElement(COURSE),
    college: getRandomElement(COLLEGE),
  };
};

export const getData = () => {
  const mockData = [];
  for (let i = 0; i < MAX_COUNT_DATA; i += 1) {
    mockData.push(getStudentCard());
  }
  return mockData;
  // return [];
};
