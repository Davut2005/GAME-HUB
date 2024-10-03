import "./game.css";

interface GameList {
  sorting: (option: string) => void;
  mode: boolean;
}

const OrderBy = ({ sorting, mode }: GameList) => {
  let classMode: string;
  if (mode) {
    classMode = "PlatformFilterGrey orderBy";
  } else {
    classMode = "platformFilterWhite orderBy";
  }

  const orders = [
    "Relevance",
    "Name",
    "Release Date",
    "Popularity",
    "Average Rating",
  ];

  return (
    <div className="platformFilter">
      <select
        className={classMode}
        onChange={(event) => sorting(event.target.value)}
      >
        <option key={-1} value="Order by:">
          Order by:
        </option>
        {orders.map((el) => (
          <option key={orders.indexOf(el)} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrderBy;
