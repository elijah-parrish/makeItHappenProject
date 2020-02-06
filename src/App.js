import React, { Component} from 'react';
import './App.css';
import { 
  Nav,
  NavItem, 
  NavLink, 
  Jumbotron, 
  Container,
  Row, 
  Col ,
  Button
} from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Jumbotron style={{background: "#D3D3D3", marginBottom: 0, width: '100%'}}>
        <Row style={{justifyContent: 'center'}}>
          <Col style={{textAlign: 'center', maxWidth: '40em'}}><h1>FACILITATION SKILLS FOR BUSINESS ANALYSTS</h1></Col>
        </Row>
        <Row style={{justifyContent: 'center'}}>
          <Col style={{textAlign: 'center', maxWidth: '45em'}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation
            </p>
          </Col>
        </Row> 
        <Row style={{justifyContent: 'center'}}>
          <Col style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
            <Button style={{fontSize: '1.5em', padding: '20px 34px', marginTop: '0.5em'}} color="dark" size="lg">Register</Button>
          </Col>
        </Row>          
      </Jumbotron>

      <Row style={{backgroundColor: '#F8F8FF'}}>
        <Container sm={{ size: 6, offset: 1}}>
          <Nav style={{marginTop: '1em'}} tabs>

            <NavItem className="tab" style={{cursor: 'pointer'}}>
              <NavLink>
                Overview
              </NavLink>
            </NavItem>

            <NavItem className="tab" style={{cursor: 'pointer'}}>
              <NavLink>
                Courses
              </NavLink>
            </NavItem>

            <NavItem className="tab" style={{cursor: 'pointer'}}>
              <NavLink >
                Student Experience
              </NavLink>
            </NavItem>

            <NavItem className="tab" style={{cursor: 'pointer'}}>
              <NavLink >
                Syllabus
              </NavLink>
            </NavItem>
          
          </Nav>
        </Container>
      </Row>

      <Container style={{width: '100%'}} sm={{size: 6, offset: 1}}>
        <Row style={{marginTop: '3em', minWidth: '100%'}}>
          <Col style={{justifyContent: 'center', textAlign: 'left', minWidth: '70%'}} >
            <Row style={{maxWidth: "70%", marginBottom: '1em'}}>
              <p>
                This course teaches the methods needed to organize and run information-gathering events.
                It combines the basics of graphic decision making and modeling with facilitation,
                communication, and meeting management skills.
              </p>
            </Row>

            <Row style={{maxWidth: "80%", marginBottom: '1em'}}>
              <h5>You should attend if you:</h5>
              <ul style={{listStylePosition: 'inside'}}>
                <li>Work as a business analyst</li>
                <li>Define and manage requirements through the development life cycle</li>
                <li>Elicit information from stakeholders to define requirements</li>
                <li>Solve business problems</li>
              </ul>
            </Row>
          </Col>

          <Col style={{textAlign: 'left', minWidth: '30%', justifyContent: 'left'}}>
            <Row style={{marginBottom: '1em', maxWidth: '75%'}}>
              <h5>Prerequisites</h5>
              <div className="sidebar"><p>
                No prerequisites: this course is suitable for both novices and experienced people
                who need to elicit business requirements or solve business problems.
              </p></div>
            </Row>
            <Row style={{maxWidth: "60%", marginBottom: '1em'}}> 
              <h5>Course Level</h5>
              <div className="sidebar"><p>
                Novice/Advanced
              </p></div>
            </Row> 
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

export default App;
