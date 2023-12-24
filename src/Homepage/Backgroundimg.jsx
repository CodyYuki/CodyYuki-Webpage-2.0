import background from './background.png'

function Backgroundimg() {
  return (
    <div style={{
      backgroundImage: `url("${background}")`,
      width: "100%",
      height: "100%",
      zIndex: "-10",
      top: "0%",
      position: "fixed",
      backgroundSize: "100% auto",
      
      }}>

    </div>
  )
}

export default Backgroundimg