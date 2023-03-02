import './css/Homepage.css';

// Homepage Canada Background Images
import canada from './img/homepage_images/homepage_canada.jpg';

// Featured Location Images
import toronto from './img/featured_locations/toronto/featured_toronto.jpg';
import vancouver from './img/featured_locations/vancouver/featured_vancouver.jpg';
import montreal from './img/featured_locations/montreal/featured_montreal.jpg';


import { useState } from 'react';


function FeaturedLocationContainer(props){
  return <div>
      <div className="featured_container">
        <img src={props.img}></img>
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
          <FeaturedLocationContainer img={toronto} />
          <FeaturedLocationContainer img={vancouver}/>
          <FeaturedLocationContainer img={montreal}/>
        </div>

      </div>


    </div>
  );
}

export default Homepage;
