import React from 'react';
import './About.module.css'; // Import external CSS
import welcome from '../../assets/photos/welcome.jpg';

const App = () => {
  return (
    <div style={{display:"flex", flexDirection:"row", margin:"57px", padding:"57px"}} className="container">
      {/* Text Section */}
      <div style={{flex:1}} className="textSection">
        <h4 className="subheading" style={{color:"red"}}>Who we are</h4> <br/>
        <h1 style={{ fontWeight:"bold", fontSize:"27px"}} className="mainHeading">
          Welcome to EIT Limited, your partner in software excellence!
        </h1> <br/>
        <p  className="description">
          At QAHarbor, we're not just code breakers; we're creators of quality.
          Our dedicated team navigates the complexities of coding seas, transforming
          challenges into triumphs. With precision-driven Quality Assurance solutions,
          we ensure your software journey is smooth and your success stories are written
          in every line of code. Join us in the pursuit of excellence, where innovation
          meets assurance. EIT Limited — where your code finds clarity and success sets sail.
        </p> <br/>
        <button style={{backgroundColor:"blue", borderRadius:"6px", padding:"8px"}} className="button" >Let's Talk</button>
      </div>

      {/* Image Section */}
      <div style={{flex:1}} className="imageSection">
        <img
          src={welcome}
          alt="Nature view"
          className="image" style={{width:"80%", height:"120%", borderRadius:"4px"}}
        />
       
      </div>
    </div>
  );
};

export default App;
