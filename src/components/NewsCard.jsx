import React from 'react';

const NewsCard = (props) => {
  const { title, description, imageUrl, publishedAt , url } = props;
  const slicedTitle = typeof title === 'string' && title.length > 0 ? title.slice(0, 60) + '...' : title;
  const slicedDescription = typeof description === 'string' && description.length > 0 ? description.slice(0, 100) + '...' : description;

  return (
    <div className="card border-4 m-1 d-inline-flex" style={{ width: 300, height: '450px' }}>
      <img src={imageUrl} style={{ height: '180px', width: '299px' }} className="card-img-top rounded h-10" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{slicedTitle}</h5>
        <p className="card-text">{slicedDescription}</p>
        <p style={{ position: 'absolute', bottom: 3 }}>{publishedAt.slice(0, 10)}</p>
        <a href={url} target="_blank" style={{ position: 'absolute', bottom: 15, right: 15 }} className="btn btn-sm btn-dark  ">Read more</a>
      </div>
    </div>
  );
};

export default NewsCard;
