import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Heading from "./Heading";
import "./App.css";


//we have tree cities to display, so we are going to create an objet
//where to stora all the information that we are going to use.
const CityDetails = [
  {
    HeaderName: "LONDON",
    link: "peoplemakeglasgow.com",
    BodyName: "London",
    srcImagE: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/800px-London_Skyline_%28125508655%29.jpeg"
  },
  {
    HeaderName: "MANCHESTER",
    link: "https://www.visitmanchester.com/",
    BodyName: "Manchester",
    srcImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuwKl8HXXhwlr4K4yrINW-IL0LKRbmaehnyg&usqp=CAU"
  },
  {
    HeaderName: "GLASGOW",
    link: "visitlondon.com",
    BodyName: "Glasgow",
    srcImage: "https://img.delicious.com.au/MzilNPOR/del/2018/12/on-the-go-in-glasgow-98211-2.jpg",
  }
]


//the information will be render in the same order that we call the components
const App = () => {
  return (
    <div className="App">
      <Heading/>
      {CityDetails.map((city) => {
        return (
          <TouristInfoCards
            HeaderName={city.HeaderName}
            link={city.link}
            BodyName={city.BodyName}
            srcImage={city.srcImage}
          />
      );
      })}
      <Bookings />
    </div>
  );
};

export default App;



