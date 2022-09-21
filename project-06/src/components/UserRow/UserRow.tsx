import "twin.macro";

interface Date {
  Date: string;
  End: string;
  Start: string;
}

interface User {
  [x: string]: any;
  id: number;
  Fullname: string;
  Days: Date[];
}

const generateDate = (DateUser: any, start: any, end: any) => {
  const StartDateUser = new Date(`${DateUser} ${start.replace(/-/, ":")}`);
  const EndDateUser = new Date(`${DateUser} ${end.replace(/-/, ":")}`);
  const resultDate = (EndDateUser - StartDateUser) / 1000 / 60;
  return resultDate;
};

const UserRow = ({ days }) => {
  return (
    <>
      {days.map((user: User, idx: number) => {
        return (
          <tr key={idx} tw="border border-black">
            <td tw="px-3">{user.Fullname}</td>
            {user.Days.map((date: Date) => {
              return (
                <td tw="p-3">
                  {generateDate(date.Date, date.Start, date.End)}
                </td>
              );
            })}
            <td>Sum</td>
          </tr>
        );
      })}
    </>
  );
};

export { UserRow };
