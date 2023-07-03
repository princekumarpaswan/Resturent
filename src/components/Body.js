import ResturentCard from "./ResturentCard"
import restaurants from "./util/mockData"
import { useState } from "react";


const Body = () => {
    // Local state variable --- Sper powervariable
    const [listRestarunt, setListRestaurent] = useState(restaurants)

    return (

        <div className="body">
            <div className="filter">

                <button className="filter-btn" onClick={() => {
                    // logic filter
                    setListRestaurent(restaurants.filter(
                        (res) => res.info.avgRating > 4
                    ))
                }} >Top Rated Restaurants</button>

            </div>
            <div className="res-container">
                {
                    listRestarunt.map(restu => <ResturentCard key={restu.info.id} resData={restu} />)
                }
            </div>
        </div>
    )
}


export default Body