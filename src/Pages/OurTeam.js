import "./OurTeam.css"
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

/* Imported Images */
import president from '../Assets/President.png'
import operations_vp from '../Assets/Operations.png'
import business_dev_vp from '../Assets/BusinessDevVP.png'
import general_member from '../Assets/GeneralMember.png'

/* Executive Board Members -- add here */
const ExecBoard = [
  {
    name: 'Rishi Kheni',
    position: 'President',
    image: president
  },
  {
    name: 'Cameron Su',
    position: 'Operations VP',
    image: operations_vp
  },
  {
    name: 'Johnathan Chen',
    position: 'Business Development VP',
    image: business_dev_vp
  }
];

/* General Members -- add here */
const GenMem = [
  {
    name: 'NAME',
    position: 'Position',
    image: general_member
  },
  {
    name: 'NAME',
    position: 'Position',
    image: general_member
  },
  {
    name: 'NAME',
    position: 'Position',
    image: general_member
  } 
];

function Person(props) {
  return (
    <div>
      <Card style={{ width: '20rem' }}>
        <CardImg src={props.image} alt='person' />
        <CardBody>
          <br/>
          <CardTitle tag="name">{props.name}</CardTitle>
          <br/>
          <br/>
          <CardSubtitle tag="position">{props.position}</CardSubtitle>
          {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button> */}
        </CardBody>
      </Card>
    </div>
  )
}

function OurTeam() {
  return (
    <div className="OurTeam" class="wrapper">
      
      <h1>OUR TEAM</h1>
      <header>Executive Board Members</header>
      <br/>
      <br/>
      <div className="flexbox-container">
        { /* map each Executive Board Member to a component */
          ExecBoard.map(person => {
            return <Person
              name= {person.name}
              position= {person.position}
              image= {person.image}
            />
          })
        }
      </div>

      <br/>
      <br/>
      <header>General Members</header>
      <br/>
      <br/>
      <div class="flexbox-container">
        { /* map each General Member to a component */
          GenMem.map(person => {
            return <Person
              name= {person.name}
              position= {person.position}
              image= {person.image}
            />
          })
        }
      </div>

    </div>
  );
}

export default OurTeam;
