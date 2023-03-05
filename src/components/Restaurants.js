import './css/Restaurant.css';

/* Hotel Image Background */
import canada from './img/homepage_images/homepage_canada.jpg';

/* Images for hotel */
import toronto_restaurant from './img/featured_locations/toronto/toronto_restaurant.jpg';
import vancouver_restaurant from './img/featured_locations/vancouver/vancouver_restaurant.jpg';
import montreal_restaurant from './img/featured_locations/montreal/montreal_restaurant.jpg';

function RestaurantBox(props){
  return <div className="restaurant_box">
        <img src={props.img} style={{order: props.index}}/>
        <p>{props.text}</p>
      </div>
}

function RestaurantInfo(props){
  return <div className="restaurant_info_container" style={{backgroundColor: props.color}}>
    <h1>{props.locationName}</h1>
    <h2>{props.restaurantName}</h2>

    <RestaurantBox 
      img={props.img1} 
      index={props.index}
      text={props.text1}>
    </RestaurantBox >

  </div>
}


function Restaurants() {
  return (
    <div className='restaurant_page'>
      <div className='restaurant_container'> 
        <div className='restaurant_text'>
          <h1>Restaurants</h1>
          <h3>Places where you can enjoy delicous food and drinks!</h3>
        </div>
        <div className='restaurant_img'>
          <img src={canada}/>
        </div>
      </div>

      <RestaurantInfo 
        index="-1"
        color="white" 
        locationName="Toronto" 
        restaurantName="Aloette Restaurant"
        img1={toronto_restaurant}
        text1="Aloette Restaurant is a trendy and vibrant eatery located in Toronto, Canada. The restaurant is a sister establishment of the acclaimed Alo Restaurant, which is renowned for its innovative and contemporary approach to fine dining. Aloette offers a more casual and laid-back atmosphere, with a focus on simple yet delicious food. The menu features a range of classic dishes with a modern twist, including a delicious chicken parmesan and a mouth-watering steak frites. The restaurant also offers a range of signature cocktails and a carefully curated wine list, making it the perfect place for a night out with friends or a romantic dinner for two. The decor of Aloette is chic and modern, with exposed brick walls and a cozy atmosphere, making it the perfect place to unwind and enjoy great food in a relaxed and welcoming environment."
      ></RestaurantInfo>

      <RestaurantInfo 
        index="1"
        color={'rgb(' + 210 + ',' + 210 + ',' + 210 + ')'} 
        locationName="Vancouver" 
        restaurantName="Chambar Restaurant"
        img1={vancouver_restaurant}
        text1={"The restaurant is well known for its eclectic menu, which features a mix of classic and modern dishes with a strong Belgian influence. Chambar prides itself on using only the freshest ingredients, with a focus on locally sourced and sustainable produce. The menu includes a range of delicious options, from mouth-watering seafood dishes to succulent steaks and flavorful vegetarian options. Chambar's extensive beer and wine lists perfectly complement the menu, offering a range of unique and refreshing options. The restaurant's stylish decor features a mix of contemporary and traditional elements, creating a warm and inviting atmosphere. The staff at Chambar is friendly and knowledgeable, ensuring that guests feel welcomed and taken care of. Overall, Chambar Restaurant is a must-visit for foodies and anyone seeking a memorable dining experience in Vancouver."}
      ></RestaurantInfo>

      <RestaurantInfo 
        index="-1"
        color="white"
        locationName="Montreal" 
        restaurantName="Nora Gray"
        img1={montreal_restaurant}
        text1={"Nora Gray is a popular Italian-inspired restaurant located in the heart of Montreal, Canada. The restaurant is known for its creative and innovative approach to classic Italian cuisine, using only the freshest ingredients sourced from local farmers and purveyors. The menu features a range of delicious and inventive dishes, from mouth-watering pasta dishes to delicious seafood and meat dishes. The restaurant's cozy and intimate atmosphere, with its exposed brick walls and dim lighting, creates a warm and inviting ambiance. The extensive wine list, curated by the in-house sommelier, offers a range of unique and carefully selected options to perfectly complement the menu. The staff at Nora Gray is knowledgeable and attentive, ensuring that guests have a memorable dining experience. Overall, Nora Gray is a must-visit for anyone seeking an unforgettable Italian dining experience in Montreal."}
      ></RestaurantInfo>

    </div>

    
  );
}

export default Restaurants;
