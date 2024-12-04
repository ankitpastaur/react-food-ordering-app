import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log("setListOfRestaurent calling", setListOfRestaurent);
  };

  return listOfRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            //Filter the Restaurent card and udpate the UI
            //Search text from User
            const filteredRestaurent = listOfRestaurent.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurent(filteredRestaurent);

            console.log(searchText);
          }}
        >
          Search
        </button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filterdList = listOfRestaurent.filter(
            (res) => res.info.avgRating > 4
          );
          listOfRestaurent(filterdList);
        }}
      >
        Top Restaurents
      </button>
      <div className="res-container">
        {filteredRestaurent.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
