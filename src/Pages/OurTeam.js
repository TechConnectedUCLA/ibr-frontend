import "./OurTeam.css"

/* Imported Images */
import president from '../Images/President.png'
import operations_vp from '../Images/Operations.png'
import business_dev_vp from '../Images/BusinessDevVP.png'
import general_member from '../Images/GeneralMember.png'

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
      <img src={props.image} alt='person'></img>
      <br/>
      <br/>
      <name>{props.name}</name>
      <br/>
      <br/>
      <position>{props.position}</position>
      <br/>
      <br/>
    </div>
  )
}

function OurTeam() {
  return (
    <div className="OurTeam">
      
      <h1>OUR TEAM</h1>
      <header>Executive Board Members</header>
      <br/>
      <br/>
      <div class="flexbox-container">
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
