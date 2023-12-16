import './WelcomeBox.css'

function WelcomeBox() {
  return (
    <div className="box" style={{border: "1px solid red"}}>
      <h1 className="title">Welcome to the Iclyn Settlement!</h1>
      <p className="desc"> We are part of the arctic rabbits clan years ago, but after monsters attacked and destroied our outpost in the cold tundra, <br></br>
       we were forced to tunnel underground and create shelter from the monsters and cold here. <br></br>
       Our techology being full of wood, steam, and iron, we struggle to keep everyone around, <br></br>
       however we do have a few computer parts, and {"that's"} why your able to read this! <br></br>
      </p>
      <h2>We request support!</h2>
      <p>
        You can either come join us battling the harsh climate or dangerous creatures above,<br></br>
        or trade your supplies for our resources!
      </p>
    </div>
  )
}

export default WelcomeBox