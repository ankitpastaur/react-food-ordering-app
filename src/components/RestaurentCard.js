const RestaurentCard = (props) => {
  const { resData } = props;

  const { name, avgRating, cuisines, costForTwo } = resData?.info;

  return (
    <div className="res-card">
      <div className="res-logo">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info.cloudinaryImageId
          }
          alt="Description"
        ></img>
      </div>
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      {/* <h5>{cuisines.join(", ")}</h5> */}
      <h5>{costForTwo}</h5>
    </div>
  );
};
export default RestaurentCard;
