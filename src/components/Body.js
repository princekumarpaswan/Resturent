import ResturentCard from "./ResturentCard"
import restaurants from "./util/mockData"
import { restaurants } from "./util/mockData"

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log("prince");
                }} >Top Rated Restaurants</button>
            </div>
            <div className="search" >search</div>
            <div className="res-container">
                {
                    restaurants.map(restu => <ResturentCard key={restu.info.id} resData={restu} />)
                }
            </div>
        </div>
    )
}

export default Body