import './css/Attraction.css';

/* Hotel Image Background */
import canada from './img/homepage_images/homepage_canada.jpg';

/* Images for hotel */
import toronto_attraction from './img/featured_locations/toronto/toronto_attraction.jpg';
import vancouver_attraction from './img/featured_locations/vancouver/vancouver_attraction.jpg';
import montreal_attraction from './img/featured_locations/montreal/montreal_attraction.jpg';

function AttractionBox(props){
  return <div className="restaurant_box">
        <img src={props.img} style={{order: props.index}}/>
        <p>{props.text}</p>
      </div>
}

function AttractionInfo(props){
  return <div className="attraction_info_container" style={{backgroundColor: props.color}}>
    <h1>{props.locationName}</h1>
    <h2>{props.attractionName}</h2>

    <AttractionBox 
      img={props.img1} 
      index={props.index}
      text={props.text1}>
    </AttractionBox >

  </div>
}


function Attractions() {
  return (
    <div className='attraction_page'>
      <div className='attraction_container'> 
        <div className='attraction_text'>
          <h1>Attractions</h1>
          <h3>Places to explore and have fun with your family and friends! </h3>
        </div>
        <div className='attraction_img'>
          <img src={canada}/>
        </div>
      </div>

      <AttractionInfo 
        index="-1"
        color="white" 
        locationName="Toronto" 
        attractionName="CN Tower"
        img1={toronto_attraction}
        text1="The CN Tower is a famous landmark and one of the most recognizable symbols of Toronto, Canada. Standing at 553 meters tall, the tower was completed in 1976 and held the record for the world's tallest freestanding structure for over 30 years. The tower is known for its distinctive design, which features a concrete core with steel framing and a sleek, tapered shape. Visitors to the CN Tower can take a ride up to the observation deck, which offers stunning panoramic views of the city and the surrounding area. The tower also features a revolving restaurant, which offers a unique dining experience with unparalleled views of the cityscape. For thrill-seekers, there is a high-altitude walk on a glass floor, known as the EdgeWalk, which allows visitors to walk around the exterior of the tower at a height of 1168 feet. Whether you're interested in the breathtaking views or the adrenaline rush of the EdgeWalk, the CN Tower is a must-visit attraction in Toronto."
      ></AttractionInfo>

      <AttractionInfo 
        index={"1"}
        color={'rgb(' + 210 + ',' + 210 + ',' + 210 + ')'} 
        locationName="Vancouver" 
        attractionName="Geodesic Dome"
        img1={vancouver_attraction}
        text1={"The geodesic dome in Vancouver, Canada, is a unique and iconic structure that has become a popular landmark in the city. Located in the heart of the downtown area, the dome was originally built in 1978 as the Expo Centre for the World Exposition that was held in Vancouver that year. The dome was designed by architect Bruno Freschi, who drew inspiration from Buckminster Fuller's geodesic dome design. Today, the dome is used as an event space, hosting a wide range of concerts, exhibitions, and other cultural events throughout the year. Its striking design, with its triangular network of interconnected steel struts and transparent acrylic panels, has become a recognizable symbol of Vancouver's vibrant and creative spirit. Whether you are attending an event or simply admiring the dome from afar, it is a must-see attraction for anyone visiting Vancouver."}
      ></AttractionInfo>

      <AttractionInfo 
        index={"-1"}
        color="white"
        locationName="Montreal" 
        attractionName="Notre-Dame Basilica"
        img1={montreal_attraction}
        text1={"The Notre-Dame Basilica of Montreal is an iconic landmark and one of the most visited attractions in Montreal, Canada. The basilica, located in the historic district of Old Montreal, was built in the mid-19th century and is considered a masterpiece of Gothic Revival architecture. The interior of the basilica is equally impressive, with its stunning stained-glass windows, intricate woodwork, and ornate details. The basilica also houses one of the largest pipe organs in North America, adding to the grandeur of the space. Visitors can attend daily masses, take a guided tour, or attend one of the many concerts and events held at the basilica throughout the year. Whether you are a history buff, a lover of architecture, or simply looking for a peaceful and spiritual experience, the Notre-Dame Basilica of Montreal is a must-see attraction."}
      ></AttractionInfo>

    </div>

    
  );
}

export default Attractions;
