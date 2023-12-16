function ProjList(props) {
    // eslint-disable-next-line react/prop-types
    return <li>{props.projname}</li> 
}

function ProjDesc(props) {
    // eslint-disable-next-line react/prop-types
    return <p>{props.projdesc}</p>
}

function SoftwareProject(){
    const projects = ['Hazuki Golfs', 'Snowball Fight', 'Waifu City'];
    const projdesc = ['Cute game that does this thing', 'Anmother game that does this but a bit different', 'Game that doesnt exist yet actually'];
    return(
        <div style={{border: "1px solid red", width: "600px", float: "right", height: "700px", margin: "6% 16% 2% 0%"}}>
            <h1>Software Projects</h1>
                <ul>
                    {/* Okay so These are Loops for the arrays, how do I make it so they make a header and then move on to another line? */}
                    
                    {projects.map((project) => <ProjList key={project.id} projname={project} />)}





                    {/* {projdesc.map((projdesc) => <ProjDesc key={projdesc.id} projdesc={projdesc} />)} */}
                </ul>
        </div>
    )
}

export default SoftwareProject