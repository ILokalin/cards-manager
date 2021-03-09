import { sortAZ, sortZA } from "utils/sort";

export const setSortState = (state, payload) => {
  let { direction, isAZDirection } = state.sort;
  if (state.sort.key === payload) {
    direction = [sortZA, sortAZ][Number(!isAZDirection)];
    isAZDirection = !isAZDirection;
  } else {
    direction = sortAZ;
    isAZDirection = true;
  }

  return state
    .set("cards", [...state.cards.sort(direction(payload))])
    .set("sort", { key: payload, direction, isAZDirection });
};

export const selectCardState = (state, payload) => {
  return state.set(
    "cards",
    state.cards.map((card) => {
      return { ...card, isActive: card.id === payload ? true : false };
    })
  );
};

export const navForwardState = (state) => {
  const { length } = state.cards;
  const currentIndex = state.cards.findIndex((card) => card.isActive);
  const newIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;

  return state.set(
    "cards",
    state.cards.map((card, indx) => {
      return { ...card, isActive: indx === newIndex ? true : false };
    })
  );
};

export const navBackwardState = (state) => {
  const { length } = state.cards;
  const currentIndex = state.cards.findIndex((card) => card.isActive);
  const newIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;

  return state.set(
    "cards",
    state.cards.map((card, indx) => {
      return { ...card, isActive: indx === newIndex ? true : false };
    })
  );
};

export const getCardsState = (state, payload) => {
  payload.sort(state.sort.direction(state.sort.key));
  payload[0].isActive = true;

  return state.set("cards", [...payload]).set("isLoading", false);
};

export const startLoadingState = (state) => state.set("isLoading", true);
