import { Record } from "immutable";
import { setSortState } from "../cardsUtils";

describe("Test cards reduce", () => {
  it("Sort use direction", () => {});

  const State = Record({
    cards: [{ name: "Oleg" }, { name: "Анна" }, { name: "Борис" }],
    sort: {
      key: "id",
      isAZDirection: true,
    },
  });
  const payload = "name";

  setSortState(new State(), payload);
});
