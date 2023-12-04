
import React from 'react';

import './BParty.css'; // Create a CSS file for styling
import p1 from '../assests/p1.jpg';
import p2 from '../assests/p2.jpg';

const BParty = () => {
  return (
    <div className='main'>
        <video autoPlay muted loop id="background-video">
          <source src='https://download-video.akamaized.net/v3-1/playback/79dca332-93f5-4452-98d4-47b1035f2539/32499dce?__token__=st=1701720594~exp=1701734994~acl=%2Fv3-1%2Fplayback%2F79dca332-93f5-4452-98d4-47b1035f2539%2F32499dce%2A~hmac=e0a94044b84bf5153be1ce2138b69a2718ebd68021c06cbe9fad4db8733a2e62&r=dXMtY2VudHJhbDE%3D' type="video/mp4" />
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
    <button>Book now</button>
  </div>

  <div className="card">
    <h2>Thanksgiving</h2>
    <img src="https://cdn-icons-png.flaticon.com/128/5960/5960101.png" alt=" 2" />
    <p>Gratitude blooms, in cozy rooms, as families gather amid autumn's tunes. A feast of thanks, where warmth transcends, a day of blessings, where love never ends.</p>
    <button>Book Now</button>
  </div>

  <div className="card">
    <h2>New Year</h2>
    <img src="https://cdn-icons-png.flaticon.com/128/13115/13115068.png" alt=" 3" />
    <p>As the clock chimes, a new year climbs, with hope and dreams in endless lines. Resolutions rise, under midnight skies, a fresh beginning, where possibilities arise.</p>
    <button>Book Now</button>
  </div>
</div>

       </div> 
      
    </div>
  );
};

export default BParty;

