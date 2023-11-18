import News from "./News";
import Weather from "./Weather";
import TheOneApi from "./TheOneApi";
import RecommendedSites from "./RecommendedSites";
import GoogleSearch from "./GoogleSearch";


const Body = () => {
    return(
        <div class ="container float-start d-flex flex-column justify-content-evenly p-3 body-container">
            <div class="d-flex justify-content-center p-3">
                <GoogleSearch />
            </div>
            <div class="d-flex justify-content-evenly p-3">
                <RecommendedSites/>
                <News />
                <Weather />
                <TheOneApi />
            </div>
        </div>
    )

}

export default Body;
