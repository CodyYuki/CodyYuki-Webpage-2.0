const projects = [{

    projectname: 'Hazuki Golfs',
    projectdesc: 'Cute game that does this thing'
},{
    projectname: 'Snowball Fight',
    projectdesc: 'Anmother game that does this but a bit different'
},{
    projectname: 'Waifu City',
    projectdesc: 'Game that doesnt exist yet actually'
}]

function SoftwareProject(){
    return(
<div style={{border: "1px solid red", width: "600px", float: "right", height: "700px", margin: "6% 19% 2% 0%", backgroundColor: "#373a40"}}>
    <h1>Software Projects</h1>
        {projects.map(function(projects) {
        return (
            //For later, i have an idea, set the ul to a p and set the first list as a ul. maybe that would work?
            <ul key={projects.id}>
            <li>{projects.projectname}</li>
            <li>{projects.projectdesc}</li>
            </ul>
        )
        })}
        </div>
    )
}

export default SoftwareProject