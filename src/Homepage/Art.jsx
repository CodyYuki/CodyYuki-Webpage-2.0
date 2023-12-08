import myImage from './homepage-portrait.png';

const currentatcon = true;
const nextalley = 'Gensokyo';
const conventionlink = 'linkhere';





function Art() {


//So this chunk does work but a more compact way of doing it is shown below

// if (currentatcon === false)
// {
//     return (

//         <>
//         <h1>Art Museum</h1>
//         <h2>I will be at {nextalley}!</h2>
//         </>
//     );
// }



  return (
    <>
        <h1>Art Museum</h1>
        {currentatcon === true ? <h2>I am current in {nextalley}!</h2> : <h2>I will be at {nextalley}!</h2>}

        <h3>Heres the link to that place: {conventionlink}</h3>



    <p>Art slideshow showcase</p>
        <img src={myImage} style={{
        width: '300px',
        height: '300px',
        zIndex: '-10',
        top: '0%',
        objectFit: 'cover',
}}>

</img>

    </>
  )
}

export default Art