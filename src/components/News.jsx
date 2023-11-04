import { useState, useEffect } from "react"

const News = () => {
    const [topNews, setTopNews] = useState()
    const today = new Date()
    const formattedDate = today.toISOString

    const getNews = async () => {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY
        try{
            const response = await fetch(`https://gnews.io/api/v4/top-headlines?lang=en&from=${formattedDate}&apikey=${apiKey}`)
            const data = await response.json()
            if(data){
                console.log(data)
                setTopNews(data.articles)
            }
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <div className="card rounded text-light text-start p-3 gy-3 news-container">
            <p className="display-6">News</p>
            {topNews && 
                topNews.map((headline, key) => {
                    return (
                        <div className="row p-3 align-items-center news-row" key={key}>
                            {/* <img className="col-1 object-fit-cover rounded news-img" src={headline.image} alt={`Image relating to ${headline.title}`}></img> */}
                            <p className="col news-headline">{headline.title.substring(0, 100)}</p>

                        </div>
                    )
                })
                
            }
        </div>
    )
}

export default News
