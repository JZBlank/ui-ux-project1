import './css/Lodging.css';
import spongehouse from './img/spongebobs-house.webp'
import pathouse from './img/patricks-house.webp'
import squidhouse from './img/squidwards-house.png'
function Lodging() {
  return (
    <div >
      <h1>Lodging</h1>
      <h3>See what the best of Bikini Bottom has to offer for your stay!</h3>
      <div className="content">
        <div className="spongebob">
          <img src={spongehouse} alt="spongebob house" />
          <p>
            Located at 124 Conch Street, this pineapple under the sea is an absolute gem!
            The house is three stories high and fully furnished. There is a garage in the back of the house 
            and two windows in the front. Out back of the house, the backyard is closed in by a square of flowers.
            It also has an outdoor tap where a hose can be attached. 
          </p>
        </div>
        <div className="squidward">
          <img src={squidhouse} alt="squidwards house" />
          <p>
            Located at 122 Conch Street, this Easter Island head is a great place to stay. The ground floor consists 
            of three adjoining rooms. the one at the front being the living room. The living room consists of a 
            bookcase with some jazz records, a couch, a coffee table, and TV. Behind the living room 
            is the kitchen with a fridge, an island counter, and four cabinets. 
          </p>
        </div>
        <div className="patrick">
          <img src={pathouse} alt="patrick house" />
          <p>
            Located at 120 Conch Street, the house is a large brown rock with a tan arrow-shaped weather vane 
            on top. Like a door, the rock has hinges to open and close.Ammenities include a gray CRT TV, 
            a green chair, a lamp with a yellow lampshade, a gray telephone, a brown barrel, 
            and a bed with a wooden bed frame and green blanket. You can also 
            use the sand to make furniture as needed. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lodging;
