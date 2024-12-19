import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ cardData }) => {
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = cardData?.info
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>Avg Rating : {avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;