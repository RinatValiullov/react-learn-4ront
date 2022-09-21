import "twin.macro";
import { getDays } from "../../utils/getNumberOfDays";
import { TableHead } from "../TableHead/TableHead";
import { UserRow } from "../UserRow/UserRow";
import data from "./../../server/data.json";

const daysInSeptember = getDays(2022, 8);

const arrayOfDays = Array.from({ length: daysInSeptember }, (_, i) => i);

const Table = () => {
  return (
    <table tw="border w-full">
      <thead>
        <TableHead arrayOfDays={arrayOfDays} />
      </thead>
      <tbody>
        <UserRow days={data} />
      </tbody>
    </table>
  );
};

export { Table };
