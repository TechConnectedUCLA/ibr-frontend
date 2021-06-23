import president from '../Images/President.png'
import operations from '../Images/Operations.png'
import business_dev_vp from '../Images/BusinessDevVP.png'
import general_member from '../Images/GeneralMember.png'

const ExecBoard = [
  {
    name: 'Rishi Kheni',
    position: 'President',
    image: president
  },
  {
    name: 'Cameron Su',
    position: 'Operations',
    image: operations
  },
  {
    name: 'Johnathan Chen',
    position: 'Business Development VP',
    image: business_dev_vp
  }
];

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
      <h2>{props.name}</h2>
      <body>{props.position}</body>
      <br></br>
    </div>
  )
}

function OurTeam() {
  return (
    <div className="OurTeam">
      <h1>OUR TEAM</h1>
      <h2>Executive Board Members</h2>
      {
        ExecBoard.map(person => {
          return <Person
            name= {person.name}
            position= {person.position}
            image= {person.image}
          />
        })
      }

      <br></br>
      <h2>General Members</h2>
      {
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

export default OurTeam;
