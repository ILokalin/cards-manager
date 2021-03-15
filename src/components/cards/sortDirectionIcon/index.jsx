import { useSortDirection } from "state/ducks/cards";

const PRIMARY = "--bs-primary";
const SECONDARY = "--bs-secondary";

export const SortDirectionIcon = ({ isKey }) => {
  const styleMap = new Map([
    [false, SECONDARY],
    [true, isKey ? PRIMARY : SECONDARY],
  ]);
  const isAZDirection = useSortDirection();

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 16 16"
    >
      <path
        fill={`var(${styleMap.get(!isAZDirection)})`}
        d="M11 7h-6l3-4z"
      ></path>
      <path
        fill={`var(${styleMap.get(!!isAZDirection)})`}
        d="M5 9h6l-3 4z"
      ></path>
    </svg>
  );
};
