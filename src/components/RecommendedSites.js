import CONFIG from '../userConfig.json';
import { useState, useEffect } from 'react';

const RecommendedSites = () => {
    const[sites, setSites] = useState([]);

    const makeList = () => {
        var sitelist = CONFIG.websites;
        console.log(sitelist);
        setSites(sitelist);
    return sitelist;
}
useEffect(() => {
    makeList();
}, [])
return(
<div class="card recSites">
                <p className="display-6 p-3 m-0 title">
                    Links
                </p>
                <ul class="list-group list-group-flush px-3">
                  {sites.map((site, x) => (
                    <li className='list-group-item'>
                        <img src={site.icon} alt={site.name} className='icon'></img>
                        <a href={site.url} key={site.id}>{site.name}</a>
                    </li>
                  ))}
                                          
                </ul>
            </div>
)

}
export default RecommendedSites;