import NewsCard from "./NewsCard";
import defaultThumbnail from "../assets/defaultThumbnail.jpg";
import React, { useState, useEffect } from "react";
import Spining from "./Spining";

const NewsPage = (props) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); 
  
  useEffect(() => {
    
    const fetchInfo = async () => { 
      setIsLoading(true);
      if (props.setProgress) {
        props.setProgress(40); 
      }
      const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${props.ctgy}&apiKey=${props.apikey}&page=${page}`);
      const d = await res.json();
      setData(d.articles);
        if (props.setProgress) {
          props.setProgress(100); 
        }
      setIsLoading(false);
    };
    fetchInfo();
  }, [props.ctgy , page ]);
  
  const handlePrevious = () => {
    if (page >= 1) {
      setPage(()=> page -1);
    }
  };
  
  const handleNext = () => {
    setPage(()=>page + 1);
  };
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  return (
    <>
      <div className="my-3" style={{ marginLeft: "50px" }}>
        <h1 className="" style={{marginTop: 100}} >RapidNews - Top {capitalizeFirstLetter(props.ctgy) } headlines</h1>
        <br />
        {isLoading && <Spining /> }
        {!isLoading && data.map((articles,index) => { 
          return (
            <NewsCard
              key={index}
              cardKey={index} 
              title={articles.title}
              description={articles.description}
              imageUrl={articles.urlToImage || defaultThumbnail}
              publishedAt={articles.publishedAt}
              url={articles.url}
            />
          );
        })}
      </div>
      <nav aria-label="...">
        <ul className="pagination " style={{ float: "right", marginRight: 150, marginBottom: 30 }} >
          <button disabled={page < 2} type="button" style={{ margin: 10 }} onClick={handlePrevious} className="btn btn-dark" >
            &larr; Previous
          </button>
          <button disabled={data.length < 20}  type="button" style={{ margin: 10 }} onClick={handleNext} className="btn btn-dark" >
            Next &rarr;
          </button>
        </ul>
        <br />
        <br />
      </nav>
    </>
  );
};

export default NewsPage;
