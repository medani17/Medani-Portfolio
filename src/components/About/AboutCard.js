import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Medani Tripathi </span>
            from <span className="purple"> Raghogarh, Guna, India.</span>
            <br />
            <br />
            My main focus is on creating visually appealing and functional websites that are easy to use and navigate. 
            <br />I believe that a website should not only look great but also provide a seamless user experience for visitors. 
            <br />I'm always excited to take on new projects and collaborate with clients to create websites 
            that exceed their expectations.
            <br /> <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Team Work
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
