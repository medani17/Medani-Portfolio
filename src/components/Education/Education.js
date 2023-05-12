import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import education from "../../Assets/eud.webp";
import Achievments from "../../Assets/ach.jpg";

function Education() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row style={{ justifyContent: "center" }}>
                        <Col
                            md={6}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "00px",
                            }}
                        >
                            <h1>  <strong>Education ...</strong></h1>
                            <br />
                            <h3> B.Tech Computer Science & Engineering    
                            <br /></h3>
                            <h5>Jaypee University of Engineering & Technology : 2020-2024</h5>
                            <h5>CGPA : 8.0</h5>
                            <br />
                            <h3> 12th CBSE   <br /></h3>
                            <h5>Jay Jyoti School :<br /> 2019-2020</h5>
                            <br />
                            <h3> 10th CBSE   <br /></h3>
                            <h5> Jay Jyoti School : <br /> 2018</h5>
                        </Col>
                        <Col md={5} style={{ paddingBottom: "2px", paddingTop: "30px" }} className="about-img">
                            <img src={education} alt="about" className="image-style" />
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center" }}>
                        <Col md={5} style={{ paddingBottom: "2px", paddingTop: "30px" }} className="about-img">
                            <img src={Achievments} alt="about" className="image-style" />
                        </Col>
                        <Col
                            md={6}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "00px",
                            }}
                        >
                            <h1><strong>Achievments...</strong></h1>
                            <br />
                            <h3> SheHacks'21(03/2021)<br /></h3>
                            <p>
                            A certified program for the Hackathon organized by Indian
                            Institute of Information Technology,Allahbad.
                            </p>
                            <br />
                            <h3>Problems Solved <br /></h3>
                            <p>
                               100+ DSA problems solved on Leetcode
                            </p>
                            <br />
                        </Col>
                    </Row>

                </Container>
            </Container>
        </section>
    );
}

export default Education;