function SiteList(props) {
    // eslint-disable-next-line react/prop-types
    return <li>{props.sitename}</li>
}


function Sites(){
    const sites = ['LAME Dimension',];
    return(
        <div style={{border: "1px solid red", width: "800px", float: "left", height: "700px", margin: "6% auto 2% 10%"}}>
            <h1>Contacted Settlements</h1>
                <ul>
                    {/* A Foreach loop that goes through the entire array to display the li tag at the top */}
                    {sites.map((sites) => <SiteList key={sites.id} sitename={sites} />)}
                </ul>
        </div>
    )
}

export default Sites