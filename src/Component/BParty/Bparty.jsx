
import React from 'react';

import './BParty.css'; // Create a CSS file for styling
import p1 from '../assests/p1.jpg';
import p2 from '../assests/p2.jpg';

const BParty = () => {
  return (
    <div className='main'>
      {/* <div className='par-background'> */}
        <video autoPlay muted loop id="background-video">
          <source src='https://vod-progressive.akamaized.net/exp=1701925476~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2419%2F18%2F462098277%2F2045895551.mp4~hmac=796eddeb19c6ed7a9850a8a693726deb0a1b30ef453023464c2238143ca01833/vimeo-prod-skyfire-std-us/01/2419/18/462098277/2045895551.mp4' type="video/mp4" />
        </video>
      <div className="content-b">

      </div>
      <div className="right-content-b">
          <img className='pic' src={p1} alt="Image 1"  />
          <img className='pic' src={p2} alt="Image 2" />
        </div>
      
      <div className="left-content-b">
        <div className="content-l">
          <h1>"Crafting Moments, Weaving Memories: Your Festival, Our Expertise."</h1>
          <p>At Vivid Vibes, we believe that festivals are not just events; they are immersive experiences that weave together culture, creativity, and celebration. 
            Our festival planning services are crafted with precision, passion, and a keen eye for transforming ideas into extraordinary realities.</p>
        </div>
        
        <div className="card-container">
  <div className="card">
    <h2>Christmas </h2>
    <img src="https://cdn-icons-png.flaticon.com/128/1889/1889459.png" alt=" 1" />
    <p>Snowflakes dance, a festive trance, as Christmas joy fills every glance. Hearts aglow, love bestowed, a season's magic beautifully bestowed. Merry Christmas.</p>
    <button>More</button>
  </div>

  <div className="card">
    <h2>Thanksgiving</h2>
    <img src="https://cdn-icons-png.flaticon.com/128/5960/5960101.png" alt=" 2" />
    <p>Gratitude blooms, in cozy rooms, as families gather amid autumn's tunes. A feast of thanks, where warmth transcends, a day of blessings, where love never ends.</p>
    <button>More</button>
  </div>

  <div className="card">
    <h2>New Year</h2>
    <img src="https://cdn-icons-png.flaticon.com/128/13115/13115068.png" alt=" 3" />
    <p>As the clock chimes, a new year climbs, with hope and dreams in endless lines. Resolutions rise, under midnight skies, a fresh beginning, where possibilities arise.</p>
    <button>More</button>
  </div>
</div>

       </div> 
      </div>
    // </div>
  );
};

export default BParty;

