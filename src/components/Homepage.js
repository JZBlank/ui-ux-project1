import './css/Homepage.css';
import canada from './img/homepage_canada.jpg';
import { useState } from 'react';


function FeaturedLocationContainer(){
  return <div>
      <div className="featured_container">
        <img></img>
        <p></p>
      </div>
  </div>
}


const buttonStyle = {
  backgroundColor: "red"
}

const buttonStyle2 = {
  backgroundColor: 'rgb(' + 255 + ',' + 77 + ',' + 0 + ')',
}

function Homepage() {
  const [style, setStyle] = useState();

  function handleHover(){
    setStyle(buttonStyle);
  }

  function handleHover2(){
    setStyle(buttonStyle2);
  }


  return (
    <div className="welcome_page">
      <div className="welcome_container">
        <img src={canada}/>

        <div className="welcome">
          <h1>Canada</h1>
          <h2>Discover Canada - Adventure Awaits!</h2>
          <p>Canada is a vast and diverse country with a unique blend of natural beauty, multiculturalism, and innovative spirit.
            From the rugged coastlines of British Columbia to the majestic Rocky Mountains of Alberta, the charming small towns
            of the Maritimes to the bustling cities of Toronto and Vancouver, Canada has something for everyone.
          </p>
          <button style={style} onMouseEnter={handleHover} onMouseLeave={handleHover2} >LEARN MORE</button>
        </div>

        
      </div>
      

      <div className="canada_info">
        <div className="canada_title">
          <h1 style={{paddingTop: "20px"}}>Featured Locations</h1>
        </div>

        <div className="canada_locations">
          <FeaturedLocationContainer/>
          <FeaturedLocationContainer/>
          <FeaturedLocationContainer/>
        </div>

      </div>


    </div>
  );
}

export default Homepage;
