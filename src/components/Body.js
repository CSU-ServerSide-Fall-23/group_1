import News from "./News";
import Weather from "./Weather";

const Body = () => {
    return(
        <div class ="container float-start d-flex justify-content-evenly p-3 body-container">
            <div class="card" style={{width: "18rem"}}>
                <div class="card-header bg-secondary text-white">
                    Favorite Sites
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
                    <li class="list-group-item"><img src="https://icon.horse/icon/wikipedia.org" alt="wikipedia.org icon" style={{ width:"32px", height:"32px", padding:"5px"}}></img>
                    <a href="https://www.wikipedia.org/">Wikipedia</a></li>
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
        </div>
    )

}

export default Body;
