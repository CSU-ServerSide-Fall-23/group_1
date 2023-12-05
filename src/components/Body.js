import News from "./News";
import Weather from "./Weather";
import TheOneApi from "./TheOneApi";
import RecommendedSites from "./RecommendedSites";
import GoogleSearch from "./GoogleSearch";
import Trivia from "./Trivia";
import CONFIG from '../userConfig.json';

const Body = () => {
    return(
        
        <div className="py-4 container float-start d-flex flex-column body-container">
            <div className="container justify-content-center p-3">
                <GoogleSearch />
            </div>
            <div className="container justify-content-center p-3">
                <div className="row">
                    {CONFIG.displaySites && <div className="col mw-50"><RecommendedSites /></div>}
                    {CONFIG.displayNews && <div className="col mw-50"> <News /></div>}
                    <div className="col">
                        {CONFIG.displayWeather && <Weather/>}
                        {CONFIG.displayTrivia && <Trivia />}
                    </div>
                </div>

            </div>
            {CONFIG.displayQuotes && <TheOneApi /> }
            
        </div>
    )

}

export default Body;
