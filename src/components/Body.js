import ResturentCard from "./ResturentCard"
// import restaurants from "./util/mockData"  ----- now we are taking data form live data so we dont need any mock data
import { useState, useEffect } from "react";
import Simmer from "./Simmer";


const Body = () => {
    // Local state variable --- Sper powervariable
    const [listRestarunt, setListRestaurent] = useState([])


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING"
        )
        const jsonData = await data.json();

        // below mentntion is not the goway to write code 
        // setListRestaurent(jsonData.data.cards[2].data.data.cards)

        // So we are using this way of optional channing to write code 
        setListRestaurent(jsonData?.data?.cards[2]?.data?.data?.cards)

    };



    if (listRestarunt.length === 0) {
        return < Simmer />
    }


    return (

        <div className="body mx">
            <div className="filter">

                <button className="filter-btn" onClick={() => {
                    // logic filter
                    setListRestaurent(listRestarunt.filter(

                        (res) => res.data.avgRating >= 4

                    ))
                }} >Top Rated Restaurants</button>

            </div>
            <div className="res-container">
                {
                    listRestarunt.map(restu => <ResturentCard key={restu.data.id} resData={restu} />)

                }
            </div>
        </div>
    )
}


export default Body