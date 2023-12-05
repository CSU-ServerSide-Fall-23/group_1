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
        if (Object.keys(this.state.theOneApiData).length === 0) { //so it only calls the API once
            const randomQuoteId = Math.floor(Math.random() *1000)
            const oneApiUrl = 'https://the-one-api.dev/v2/quote'
            axios.get(oneApiUrl, {
                headers: {
                    'Authorization' : 'Bearer ECpzqigl8778NRrj2KKZ'
                }
                })
                .then(response=>{
                    this.setState({theOneApiData: response.data.docs[randomQuoteId]})
                })
                .catch(function (error) {
                    console.error(error);
            })
        }
    }

    render(){
        let quote = this.state.theOneApiData.dialog
        return(
            <div id="lotr">
                <p>LOTR Quote: {quote}</p>
            </div>
        )

    }

}

export default TheOneApi
