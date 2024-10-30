import React, { useEffect, useState } from 'react'
import image from '../assets/news.jpeg'

function Newboard({ category }) {
    const [article, SetArticle] = useState([])

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=bcf59eb9785e4c58a08ad19aaee26ab4`)
            .then(response => response.json())
            .then(data => SetArticle(data.articles));
    }, [category])

    return (
        <div>
            <h1 className='text-center'><span className='bg-danger m-5 text-light px-3 rounded'>News Bulletin</span></h1>
            <div className="d-flex flex-wrap justify-content-center">
                {article && article.map((news, index) => (
                    <div className="card m-2 p-1  text-light bg-dark" key={index} style={{ width: "320px" }} >
                        <img src={news.urlToImage ? news.urlToImage : image} class="card-img-top" style={{ height: "200px" }} alt={news.urlToImage} />
                        <div className="card-body px-2">
                            <h5 className="card-title">
                                {news.title ? news.title.slice(0, 50) + "..." : "Stay Updated on the Latest Headlines, Trends, and Major Events Happening Around the World"}
                            </h5>
                            <p className="card-text">{news.description ? news.description.slice(0, 100) + "..." : "Not Available"}</p>
                            <a href={news.url} class="btn btn-primary">Read more</a>
                        </div>
                    </div>
                ))
                }
            </div>
        </div >
    )
}
export default Newboard 