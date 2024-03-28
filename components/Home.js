import React, { useState, useEffect } from 'react';
import '../index.css';
import nav from "./nav";

export default function Home() {
  const [articles, setArticles] = useState([]);

  const requestOptions = {
    method: 'GET'
  }
  const apiParams = {
    api_token: "U1EsWKIxZ3zj96BXb4ntPrgrCeKLyXF7RBKn5cp9",
    symbols: 'msft,fb',
    limit: '50'
  }


  useEffect(() => {
    fetchArticles();
  }, []);

const fetchArticles = async () => {
  try {
    let query = Object.keys(apiParams)
      .map(function(k){return encodeURIComponent(k) + '=' + encodeURIComponent(apiParams[k]);})
      .join('&');
  
    const response = await fetch("https://api.marketaux.com/v1/news/all?" + query, requestOptions);
  
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
  
    const responseData = await response.json();
    console.log('API response:', responseData);
  
    // Set the articles state with the data array
    setArticles(responseData.data);
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
};

  
  
  return (
    <div className='homepage'> 
    <div className='homepage-elements'></div>

    
    <div className='categories-title'>
      <h1>categories</h1>
    </div>
    <div className='categories-container'>
    <div className='category-devider'></div>
    <div className='categorie-bubbles-container'>
    <div className='categorie-bubbles'>all</div>
    <div className='categorie-bubbles'>marketing trends</div>
    <div className='categorie-bubbles'>money trends</div>
    <div className='categorie-bubbles'>social media</div>
    </div>
    </div>

    <div className="card-container">
      {/* Use conditional rendering to handle the case where articles is empty */}
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <div key={index} className="blog-border">
            <div className="blog-container">
              <img className="card-img-top" src={article.image_url} alt={article.title} />
              <div className="card-body bg-transparent">
                <div className="card-text">
                  <h1 className='card-title'>{article.title}</h1>
                  <div className="author-info">
                    <p>{article.source}</p>
                    <p>{article.tag}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No articles found</p>
      )}
    </div>
    
    </div>
  );
}
