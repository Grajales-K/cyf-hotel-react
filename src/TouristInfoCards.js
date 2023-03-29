import React from "react";

// HeadName, link, bodyName, srcImages will be our props
const TouristInfoCards = (props) => {
    return (
        <div>
            <div className="card">
                <img alt="Touris-Image"
                src={props.srcImage ||
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/800px-London_Skyline_%28125508655%29.jpeg"
                }
                className="card-img-top" />
                <div className="card-body">
                    <a href="peoplemakeglasgow.com" className="btn btn-primary">More information</a>
                </div>
            </div>
        </div>
    );
}

export default TouristInfoCards;