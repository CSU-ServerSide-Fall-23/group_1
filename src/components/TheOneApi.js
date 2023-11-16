import React, {Component} from "react";
import axios from 'axios';

class TheOneApi extends Component{
    constructor(props){
        super(props)
        this.state = {
            theOneApiData : {}
        }
    }



    componentDidMount(){
        const oneApiUrl = 'https://the-one-api.dev/v2/quote'
        axios.get(oneApiUrl, {
            headers: {
                'Authorization' : 'Bearer ECpzqigl8778NRrj2KKZ'
            }
            })
            .then(response=>{
                this.setState({theOneApiData: response.data.docs})
                console.log(response);
                console.log(this.state)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render(){
        console.log("break point")
        console.log(this.state)
        const apiData = new Array(this.state)
        let quote = apiData[5];
        return(
            <div class="container">
            <React.Fragment>
                red<br></br>
                LOTR Quote: {quote}
            </React.Fragment>
            </div>
        )

    }



}

    export default TheOneApi


// export default function TheOneApi(){
//     const[oneData, setData] = useState({});
//     let oneApiUrl = 'https://the-one-api.dev/v2/quote'
//     const quoteArray = []
//     axios.get(oneApiUrl, {
//         headers: {
//             'Authorization' : 'Bearer ECpzqigl8778NRrj2KKZ'
//         }
//         })
//         .then(response=>{
//             setData(response.data);
//             quoteArray = oneData.docs
//             console.log(response);
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//     return(
//         <div class="container">
//         <React.Fragment>
//             red
//         </React.Fragment>
//         </div>
//     )
// }

//LOTR Quote: {quoteArray[5].dialog}
