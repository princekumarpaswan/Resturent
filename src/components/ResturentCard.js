import { CON_URL } from "./util/constants";

const ResturentCard = (props) => {
    const { resData } = props
    const { cloudinaryImageId, name, cuisines } = resData?.info;
    return (
        <div className="res-card" >
            <img className="dish-img" alt="dish" src={CON_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>4.4 starts</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export default ResturentCard