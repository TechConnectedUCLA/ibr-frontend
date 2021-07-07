import "./JoinUs.css"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

import royce from '../Assets/Royce.png'
import operations_vp from '../Assets/Operations.png'

function JoinUs() {
  return (
    <div>
      <h1 className="page-title">Join Us</h1>
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

        <div className="page-header header-1">Available Positions</div>

        <div className="page-subtitle">Campus Analyst</div>
        <div className="page-text">Introduction to investing, stock market, and financial commentary</div>

        <div className="page-subtitle">Growth Lead</div>
        <div className="page-text">Learn how to conduct in-depth research and analysis into securities</div>

        <div className="page-header header-2">Have a question?</div>

        <Card className="container-contact">
          <CardBody className="container-contactinfo">
            <div>
              <CardTitle className="contact-title">Cameron Su</CardTitle>
              <CardSubtitle className="contact-subtitle">VP of Operations</CardSubtitle>
            </div>
            <Button className="contact-button">Contact</Button>
          </CardBody>
          <CardImg className="contact-img" src={operations_vp} alt="operations vp"></CardImg>
        </Card>
      </div>


    </div>
  );
}

export default JoinUs;
