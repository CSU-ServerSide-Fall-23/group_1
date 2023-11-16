import News from "./News";
import Weather from "./Weather";
import TheOneApi from "./TheOneApi";
//import axios from 'axios';

// let oneApiUrl ='https://the-one-api.dev/v2/quote'
// let oneApiKey = 'ECpzqigl8778NRrj2KKZ'

// axios.get(oneApiUrl, {
//     headers: {
//         'Authorization' : 'Bearer ECpzqigl8778NRrj2KKZ'
//     }
//     })
//     .then(response=>{
//         const oneApiData = response.data;
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })

const Body = () => {
    return(
        <div class ="container float-start d-flex justify-content-evenly p-3 body-container">
            <div class="card" style={{width: "18rem"}}>
                <div class="card-header bg-secondary text-white">
                    Recommended Sites
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/youtube.com" alt="youtube.com icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.youtube.com/">Youtube</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/github.com" alt="github.com icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.github.com/">GitHub</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/columbusstate.edu" alt="columbusstate.edu icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.columbusstate.edu/">Columbus State</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/getbootstrap.com" alt="getbootstrap.com icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.getbootstrap.com/">Bootstrap Docs</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/geeksforgeeks.org" alt="geeksforgeeks.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.geeksforgeeks.org/">GeeksforGeeks</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/reddit.com" alt="reddit.com icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.reddit.com/">Reddit</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/twitter.com" alt="twitter.com icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.twitter.com/">Twitter</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/linkedin.com" alt="linkedin.com icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.linkedin.com/">LinkedIn</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/openai.com" alt="openai.com icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.openai.com/">OpenAI</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/discord.com" alt="discord.com icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.discord.com/">Discord</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/amazon.com" alt="amazon.com icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.amazon.com/">Amazon</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/netflix.com" alt="netflix.com icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.netflix.com/">Netflix</a></li>
                </ul>
            </div>
            {/* <p>
                <img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                <a href="https://www.wikipedia.org/">Wikipedia</a>
                <br></br>
                <img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                <a href="https://www.wikipedia.org/">Wikipedia</a>
                <br></br>
                <img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                <a href="https://www.wikipedia.org/">Wikipedia</a>
                <br></br>
            </p> */}


            {/*
            API call not working:
            <p>
            <img src="
            https://icon.horse/icon/:wikipedia.org
                ?apikey=...
                &fallback_text=000000
                &fallback_bg=ffffff
                &size=small
                &ignore_other_sizes=true
                &status_code_404=true">
            </img>
            </p>
             */}

             <News />
             <Weather />
             <TheOneApi />

        </div>
    )

}

export default Body;
