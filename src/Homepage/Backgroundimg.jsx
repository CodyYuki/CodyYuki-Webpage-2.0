import background from './background.png'

function Backgroundimg() {
  return (
    <div style={{


      backgroundImage: `url(${background})`,
      width: '100%',
      height: '100%',
      backgroundRepeat: 'no-repeat',
      zIndex: '-10',
      top: '0%',
      
      }}>

    </div>
  )
}

export default Backgroundimg