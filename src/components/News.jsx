import { useState, useEffect } from "react"

const News = () => {
    const [topNews, setTopNews] = useState()
    const today = new Date()
    const formattedDate = today.toISOString

    const getNews = async () => {
        const apiKey = "50ce85c64e8c8f8c2c0b4026a902e686"
        try{
            const response = await fetch(`https://gnews.io/api/v4/top-headlines?lang=en&from=${formattedDate}&apikey=${apiKey}`)
            
            const data = await response.json()
            if(data){
                setTopNews(data.articles)
            }
        }
        catch(err){
            
        }
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <div className="card p-3 news-container">
            <p className="display-6 title m-0">News</p>
            <ul className="list-group list-group-flush px-3">
            {topNews && 
                topNews.map((headline, key) => {
                    return (
                        <li className="row py-2 align-items-center news-row" key={key}>
                            <img className="col-1 object-fit-cover rounded news-img" src={headline.image} alt={`${headline.title}`}></img>
                            <p className="col news-headline"><a href={headline.url} target="_blank">{headline.title.substring(0, 200)}</a></p>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default News
