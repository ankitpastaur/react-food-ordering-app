import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState(resList);

  return (
    <div className="body">
      <div className="search">Search</div>
      <button
        className="filter-btn"
        onClick={() => {
          const filterdList = listOfRestaurent.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurent(filterdList);
        }}
      >
        Top Restaurents
      </button>
      <div className="res-container">
        {listOfRestaurent.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
