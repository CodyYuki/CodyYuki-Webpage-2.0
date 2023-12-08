function SiteList(props) {
    // eslint-disable-next-line react/prop-types
    return <li>{props.sitename}</li>
}


function Sites(){
    const sites = ['LAME Dimension',];
    return(
        <>
            <h1>Contacted Settlements</h1>
                <ul>
                    {sites.map((sites) => <SiteList key={sites.id} sitename={sites} />)}
                </ul>
        </>
    )
}

export default Sites