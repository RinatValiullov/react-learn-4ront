import "twin.macro";

const TableHead = ({ arrayOfDays }) => {
  return (
    <tr>
      <th>User</th>
      {arrayOfDays.map((d: number, i: number) => {
        return (
          <th tw="p-3 bg-green-200 border border-black" key={i}>
            {++i}
          </th>
        );
      })}
      <th tw="p-3 bg-green-200 border border-black">Monthly total</th>
    </tr>
  );
};

export { TableHead };
