import News from "./News";
import Weather from "./Weather";
import TheOneApi from "./TheOneApi";
import RecommendedSites from "./RecommendedSites";
import GoogleSearch from "./GoogleSearch";
import Trivia from "./Trivia";

const Body = () => {
    return(
        <div class ="container float-start d-flex flex-column body-container">
            <div class="container justify-content-center p-3">
                <GoogleSearch />
            </div>
            <div class="container justify-content-evenly p-3">
                <div className="row">
                    <div className="col"><RecommendedSites /></div>
                    <div className="col"><News /></div>
                    <div className="col">
                        <Weather/>
                        <Trivia />
                    </div>
                </div>

            </div>
            <TheOneApi />
        </div>
    )

}

export default Body;
