import './css/Hotels.css';

/* Hotel Image Background */
import canada from './img/homepage_images/homepage_canada.jpg';

/* Images for hotel */
import toronto_hotel_pool from './img/featured_locations/toronto/toronto_hotel_pool.jpg';
import toronto_hotel_room from './img/featured_locations/toronto/toronto_hotel_room.jpg';

import vancouver_hotel_pool from './img/featured_locations/vancouver/vancouver_hotel_pool.jpg'
import vancouver_hotel_room from './img/featured_locations/vancouver/vancouver_hotel_room.jpg'

import montreal_hotel_pool from './img/featured_locations/montreal/montreal_hotel_pool.jpg'
import montreal_hotel_room from './img/featured_locations/montreal/montreal_hotel_room.jpg'

function HotelBox(props){
  return <div className="hotel_box">
        <img src={props.img} style={{order: props.index}}/>
        <p>{props.text}</p>
      </div>
}

function HotelInfo(props){
  return <div className="hotel_info_container" style={{backgroundColor: props.color}}>
    <h1>{props.locationName}</h1>
    <h2>{props.hotelName}</h2>

    <HotelBox 
      img={props.img1} 
      index={"-1"}
      text={props.text1}>
    </HotelBox>

    <HotelBox 
      img={props.img2} 
      index={"1"}
      text={props.text2}>
    </HotelBox>

  </div>
}


function Hotels() {
  return (
    <div className='hotel_page'>
      <div className='hotel_container'> 
        <div className='hotel_text'>
          <h1>Hotels</h1>
          <h3>Enjoy your stay in Canada with these amazing hotels</h3>
        </div>
        <div className='hotel_img'>
          <img src={canada}/>
        </div>
      </div>

      <HotelInfo 
        color="white" 
        locationName="Toronto" 
        hotelName="Radisson Blu Toronto Downtown"
        img1={toronto_hotel_pool}
        img2={toronto_hotel_room}
        text1="The Radisson Blu Toronto Downtown outdoor pool is a great way to relax and unwind. The gentle sound of water, the feeling of weightlessness, and the cool, refreshing sensation of the water can help soothe both the body and the mind. Swimming is also a low-impact exercise that is easy on the joints, making it a great way to relieve stress and tension while also improving cardiovascular health and overall fitness. Whether you prefer to swim laps, float on a raft, or simply lounge by the pool with a good book, pools offer a tranquil and refreshing escape from the demands of daily life. So, whether you're on vacation, enjoying a staycation, or just need a break from the daily grind, a pool can be a wonderful way to recharge and relax."
        text2="The Radisson Blu Toronto Downtown hotel offers spacious and modern guest rooms designed with guest comfort in mind. Each room features contemporary furnishings, comfortable beds with premium bedding, and a range of amenities to enhance your stay, including complimentary high-speed internet, flat-screen TVs with cable programming, and a work desk. Guests can also enjoy coffee and tea-making facilities, a mini-fridge, and a safe for valuables in every room. The bathrooms feature designer toiletries, plush towels, and a hairdryer for added convenience. Many of the rooms also offer spectacular views of the city skyline, providing guests with an unforgettable experience. With their luxurious amenities and convenient location, the guest rooms at Radisson Blu Toronto Downtown are perfect for both business and leisure travelers looking for a comfortable and memorable stay in Toronto."
      ></HotelInfo>

      <HotelInfo 
        color={'rgb(' + 210 + ',' + 210 + ',' + 210 + ')'} 
        locationName="Vancouver" 
        hotelName="Century Plaza Hotel"
        img1={vancouver_hotel_pool}
        img2={vancouver_hotel_room}
        text1={"The pool at the Century Plaza Hotel is located on the rooftop, which is accessible via a dedicated elevator. The pool area features a spacious deck with plenty of lounge chairs and umbrellas, making it the perfect place to relax and soak up the California sunshine. The pool itself is a large rectangular shape, measuring approximately 50 feet by 20 feet. The water is heated to a comfortable temperature, making it suitable for swimming year-round. The pool is also surrounded by beautiful landscaping, which adds to the tranquil atmosphere of the rooftop deck."}
        text2="The hotel offers over 400 elegantly appointed guest rooms and suites, each designed to provide guests with the utmost comfort and convenience. The rooms are spacious and stylishly decorated with contemporary furnishings and neutral colors, creating a sophisticated and calming ambiance. The large windows in each room offer stunning views of the city skyline, allowing guests to take in the beauty of Los Angeles. The rooms also feature modern amenities such as flat-screen TVs, high-speed Wi-Fi, and in-room safes. The bathrooms are spacious and well-appointed with marble countertops, high-end toiletries, and plush towels. The Century Plaza Hotel rooms provide a luxurious and comfortable environment for guests to relax and enjoy their stay in Los Angeles."
      ></HotelInfo>

      <HotelInfo 
        color="white"
        locationName="Montreal" 
        hotelName="Hotel Fairmont The Queen Elizabeth"
        img1={montreal_hotel_pool}
        img2={montreal_hotel_room}
        text1={"Hotel Fairmont The Queen Elizabeth is a luxurious hotel located in the heart of Montreal, Canada. The hotel is an iconic landmark in the city and has been welcoming guests from around the world for over 60 years. The hotel features over 950 beautifully appointed guest rooms and suites, each designed with comfort and convenience in mind. The rooms are elegantly furnished with a modern décor that blends classic and contemporary styles, creating a sophisticated and welcoming atmosphere. The hotel also offers a range of on-site amenities, including a fitness center, a full-service spa, and several dining options. Overall, Hotel Fairmont The Queen Elizabeth is the perfect choice for travelers seeking a luxurious and comfortable stay in the heart of Montreal."}
        text2="The guest rooms at Hotel Fairmont The Queen Elizabeth are luxurious and spacious, designed with the comfort and convenience of guests in mind. The rooms feature elegant furnishings and modern décor, creating a warm and inviting atmosphere. The rooms come equipped with a range of amenities including flat-screen TVs, high-speed Wi-Fi, plush bedding, and spacious en-suite bathrooms. The bathrooms feature marble countertops, premium toiletries, and plush towels. The rooms also offer stunning views of the city, adding to the overall luxurious experience. Overall, the guest rooms at Hotel Fairmont The Queen Elizabeth offer the perfect blend of comfort, luxury, and style, ensuring a memorable stay for every guest."
      ></HotelInfo>

    </div>

    
  );
}

export default Hotels;
