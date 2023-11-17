import News from "./News";
import Weather from "./Weather";
import TheOneApi from "./TheOneApi";
import RecommendedSites from "./RecommendedSites";


const Body = () => {
    return(
        <div class ="container float-start d-flex justify-content-evenly p-3 body-container">
            <RecommendedSites/>
            <News />
            <Weather />
            <TheOneApi />
        </div>
    )

}

export default Body;
