import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

function NewsBoard() {
    // const VITE_API_KEY=
    // "48755ba0586c49e1863abad573fc135e"
    const VITE_API_KEY= "pub_506284378f3067263301c71aa1ebf2ec8d9be"
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.error('Error fetching the news:', error));
    }, []);

    return (
        <div>
            <h2 className='text-center'>
                Latest <span className='badge bg-danger'>News</span>
            </h2>
            {articles.map((news, index) => (
                <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage}
                    url={news.url}
                />
            ))}
        </div>
    );
}

export default NewsBoard;
