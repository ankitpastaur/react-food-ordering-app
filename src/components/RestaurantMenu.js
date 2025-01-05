import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2599333&lng=77.412615&restaurantId=703152&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log("data calling", json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || "Restaurant Name Unavailable";

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((res) => (
          <li key={res.card?.info?.id}>
            {res.card?.info?.name} - {"Rs."} {res.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
