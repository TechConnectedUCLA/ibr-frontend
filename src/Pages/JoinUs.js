import "./JoinUs.css"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

import royce from '../Assets/Royce.png'

function JoinUs() {
  return (
    <div>
      <h1>JOIN US</h1>
      <div className="wrapper">
        <div className="container-tophalf">
          <img src={royce} alt="royce hall" className="img-royce"></img>
          
          <div className="container-cards">
            <Card>
              <CardBody className="container-card">
                <div>
                  <CardTitle className="card-title">Info Session</CardTitle>
                  <CardSubtitle className="card-subtitle">Monday, January 11, 7:00 PM</CardSubtitle>
                  <CardText className="card-text">Please RSVP to join us at our first informational session.</CardText>
                </div>
                <Button className="card-button flex-end">RSVP</Button>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="container-card">
                <div>
                  <CardTitle className="card-title">Application Deadline</CardTitle>
                  <CardSubtitle className="card-subtitle">Wednesday, January 12, 11:59 PM.</CardSubtitle>
                  <CardText className="card-text">Please submit your applications by Wednesday, November 25 at 11:59 PM.</CardText>
                </div>
                <Button className="card-button flex-end">Apply here</Button>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="container-card">
                <div>
                  <CardTitle className="card-title">Interviews</CardTitle>
                  <CardSubtitle className="card-subtitle">Friday, January 15 - Saturday, January 16</CardSubtitle>
                  <CardText className="card-text">You will be contacted for a 20-minute interview via Zoom.</CardText>
                </div>
                <Button className="card-button flex-end">Invite Only</Button>
              </CardBody>
            </Card>
          </div>
        </div> 
      </div>


    </div>
  );
}

export default JoinUs;
