import './App.css';

import Homepage from './components/Homepage';
import Hotels from './components/Hotels';
import Attractions from './components/Attractions';
import Restaurants from './components/Restaurants';

// Images
import canadaFlag from './components/img/homepage_images/canada_flag.png';

import { useState } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="attractions" element={<Attractions />} />


          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

const navStyle = {textDecoration: "none", color: "white", fontSize: "15px", padding: "15px", borderRadius: "0px", backgroundColor: 'rgb(' + 255 + ',' + 77 + ',' + 0 + ')' };
const navStyle2 = {textDecoration: "none", color: "white", padding: "10px" };
function Layout() {

  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link style={navStyle2} to="/"><img src={canadaFlag} height="30px" width="30px"/></Link>
          </li>
          <li>
            <Link style={navStyle} to="/hotels">Hotels</Link>
          </li>
          <li>
            <Link style={navStyle} to="/restaurants">Restaurants</Link>
          </li>
          <li>
            <Link style={navStyle} to="/attractions">Attractions</Link>
          </li>
        </ul>
      </nav>

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

