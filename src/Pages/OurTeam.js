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
    position: 'POSITION',
    image: general_member
  },
  {
    name: 'NAME',
    position: 'POSITION',
    image: general_member
  },
  {
    name: 'NAME',
    position: 'POSITION',
    image: general_member
  } 
];

function Person(props) {
  return (
    <div>
      <img src={props.image} alt='person'></img>
      <br></br>
      <name>{props.name}</name>
      <br></br>
      <position>{props.position}</position>
      <br></br>
    </div>
  )
}

function OurTeam() {
  return (
    <div className="OurTeam">
      <h1>OUR TEAM</h1>
      <header class= "header-1">Executive Board Members</header>
      { /* map each person to a component */
        ExecBoard.map(person => {
          return <Person
            name= {person.name}
            position= {person.position}
            image= {person.image}
          />
        })
      }

      <br></br>
      <header class= "header-2">General Members</header>
      { /* map each person to a component */
        GenMem.map(person => {
          return <Person
            name= {person.name}
            position= {person.position}
            image= {person.image}
          />
        })
      }
    </div>
  );
}

function OurTeam2() {
  return (
    <div className="OurTeam">
      <h1>OUR TEAM</h1>
      <header class="header-1">Executive Board Members</header>
        <img class="img-president" src={president}></img>
      <header class="header-2">General Members</header>
    </div>
  );
}

export default OurTeam;
