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
        const randomQuoteId = Math.floor(Math.random() *1000)
        const oneApiUrl = 'https://the-one-api.dev/v2/quote'
        axios.get(oneApiUrl, {
            headers: {
                'Authorization' : 'Bearer ECpzqigl8778NRrj2KKZ'
            }
            })
            .then(response=>{
                this.setState({theOneApiData: response.data.docs[randomQuoteId]})
                console.log(response);
                console.log(this.state)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render(){
        let quote = this.state.theOneApiData.dialog
        console.log(this.state.theOneApiData.dialog)
        return(
            <footer>
            <React.Fragment>
                LOTR Quote: {quote}
            </React.Fragment>
            </footer>
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
