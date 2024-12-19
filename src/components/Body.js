import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import ResCardShimmer from "./ResCardShimmer";



const Body = () => {
    // useState can also be written like the below :
    // const arr = useState(mockDataForResCard) 
    // const [restaurants, setRestaurants] = arr
    // const mockDataForResCard = arr[0]
    // const setRestaurants = arr[1]

    const [restaurants, setRestaurants] = useState([]);
    const [loading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LIS")
                if (!response?.ok) {
                    throw new Error(`HTTP error! status: ${response?.status}`)
                }
                const JsonifiedData = await response.json();
                console.log({ JsonifiedData })
                setRestaurants(JsonifiedData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            } catch (err) {
                setApiError(err);
                console.log(err)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    console.log({ restaurants })

    return (
        !!loading ? <ResCardShimmer /> : apiError ? <h1>{apiError}</h1> :
            <div className="body">
                <div className="filter">
                    <button className="filter-btn" onClick={() => setRestaurants((prev) => prev?.filter((res) => res?.info?.avgRating > 4.2))}>Top Rated Restaurants</button>
                </div>
                <div className="res-container">
                    {restaurants?.map((md) => <RestaurantCard key={md?.info?.id} cardData={md} />)}
                </div>
            </div>
    )
}

export default Body;