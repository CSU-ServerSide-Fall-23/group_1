import CONFIG from '../userConfig.json';
import { useState, useEffect } from 'react';

const RecommendedSites = () => {
    const[sites, setSites] = useState([]);

    const makeList = () => {
        var sitelist = CONFIG.websites;
        setSites(sitelist);
    return sitelist;
}
useEffect(() => {
    makeList();
}, [])
return(
    <div className="card p-3 recSites">
        <p className="display-6 m-0 title">Links</p>
        <ul className="list-group list-group-flush px-3">
            {sites.map((site) => (
            <li className='list-group-item' key={site.id}>
                <img src={site.icon} alt={site.name} className='icon'></img>
                <a className='site px-2' href={site.url} >{site.name}</a>
            </li>
            ))}                      
        </ul>
    </div>
)

}
export default RecommendedSites;