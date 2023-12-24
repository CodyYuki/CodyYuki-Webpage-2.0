// function SiteList(props) {
//     // eslint-disable-next-line react/prop-types
//     return <li>{props.sitename}</li>
// }


function Sites(){
    // const sites = ['LAME Dimension',];
    return(
        <div style={{border: "1px solid red", width: "400px", float: "left", height: "500px", margin: "6% auto 2% 25%", backgroundColor: "#373a40"}}>
            <h1>Contacted Settlements</h1>
                <ul>
                    {/* {sites.map((sites) => <SiteList key={sites.id} sitename={sites} />)} */}
                        <li><a href="https://www.lamedimension.moe/">{"LAME Dimension"}</a></li>
                        <li><a href="https://www.twitch.tv/mirynth">{"Mirynth's Starship"}</a></li>
                </ul>
        </div>
    )
}

export default Sites