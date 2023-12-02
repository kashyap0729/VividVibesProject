import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './OurTeam.css'

function ourteam(){
    let message =
    "Our event management team is a talented and dedicated group of professionals who excel \n in orchestrating seamless and  memorable experiences. Comprising event planners,  coordinators, designers, \n and logistical experts, each team member plays a crucial role in bringing events to life."
    return(
      <section classname ="section-whit">
       <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
               <h2 className="section-title">
                 The Team Behind Vivid Vibes
               </h2>
               <p className="section-subtitle">
              {message}
               </p>
            </div>
            
            <div className="col-sm-5 col-md-3">
                <div className="team-item">

                    <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/AI-Profile-Picture.jpg"className="team-img" alt="pic" />
                    <h3>VIDHI PATEL</h3>
                    <div className="team-info">
                        <p>Head of CEO</p>
                        <p>Vidhi is our co-founder and has developed search strategies for a variety of clients from international brands to medium sized businesses for over five years.</p>

                       <ul className="team-icon">
                       <li><a href = "#" className="twitter">
                        <i className="fab  fa-twitter"></i>
                        </a></li>  

                        <li><a href = "#" className="pinterest">
                        <i className="fab fa-pinterest"></i>
                        </a></li> 

                        <li><a href = "#" className="facebook">
                        <i className="fab fa-facebook"></i>
                        </a></li> 

                        <li><a href = "#" className="dribbble">
                        <i className="fab fa-dribbble"></i>
                        </a></li>      
                        </ul>        
                    </div>
                </div>
            </div>


            <div className="col-sm-5 col-md-3">
                <div className="team-item">

                    <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg"className="team-img" alt="pic" />
                    <h3>Kashyap Ramachandra</h3>
                    <div className="team-info">
                        <p>Event Manager</p>
                        <p>Kashyap, our esteemed Event Manager, is the driving force behind the seamless execution of our most memorable events.</p>

                       <ul className="team-icon">
                       <li><a href = "#" className="twitter">
                        <i className="fab fa-twitter"></i>
                        </a></li>  

                        <li><a href = "#" className="pinterest">
                        <i className="fab fa-pinterest"></i>
                        </a></li> 

                        <li><a href = "#" className="facebook">
                        <i className="fab fa-facebook"></i>
                        </a></li> 

                        <li><a href = "#" className="dribbble">
                        <i className="fab fa-dribbble"></i>
                        </a></li>   
                        </ul>           
                    </div>
                </div>
            </div>
          

            <div className="col-sm-5 col-md-3">
                <div className="team-item">

                    <img src="https://www.profilebakery.com/wp-content/uploads/2023/04/PROFILE-WHATSAPP-DP.jpg"className="team-img" alt="pic" />
                    <h3>Vaibhavee Gamit</h3>
                    <div className="team-info">
                        <p>Marketing Manager</p>
                        <p>Vaibhavee, our visionary Marketing Manager, has redefined excellence in marketing. Her innovative approach has set a new standard for the industry.</p>

                       <ul className="team-icon">
                       <li><a href = "#" className="twitter">
                        <i className="fab fa-twitter"></i>
                        </a></li>  

                        <li><a href = "#" className="pinterest">
                        <i className="fab fa-pinterest"></i>
                        </a></li> 

                        <li><a href = "#" className="facebook">
                        <i className="fab fa-facebook"></i>
                        </a></li> 

                        <li><a href = "#" className="dribbble">
                        <i className="fab fa-dribbble"></i>
                        </a></li>   
                        </ul>           
                    </div>
                </div>
            </div>

            <div className="col-sm-5 col-md-3">
                <div className="team-item">

                    <img src="https://www.profilebakery.com/wp-content/uploads/2023/03/AI-Profile-Picture.jpg"className="team-img" alt="pic" />
                    <h3>Sathwik Reddy</h3>
                    <div className="team-info">
                        <p>Photographer</p>
                        <p>Sathwik's lens doesn't just document; it tells a story. Each frame is a masterpiece, showcasing the essence and emotion of our events. </p>

                       <ul className="team-icon">
                       <li><a href = "#" className="twitter">
                        <i className="fab fa-twitter"></i>
                        </a></li>  

                        <li><a href = "#" className="pinterest">
                        <i className="fab fa-pinterest"></i>
                        </a></li> 

                        <li><a href = "#" className="facebook">
                        <i className="fab fa-facebook"></i>
                        </a></li> 

                        <li><a href = "#" className="dribbble">
                        <i className="fab fa-dribbble"></i>
                        </a></li>   
                        </ul>           
                    </div>
                </div>
            </div>

        </div>

       </div>
      </section>
    )
}
export default ourteam;