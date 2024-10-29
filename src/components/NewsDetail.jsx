import React from "react";

export default function NewsDetail({ detail, onBack }) {
  return (
    <div className="content-news-detail">
      <button className="back-btn" onClick={onBack}>Back</button>
      <h1>{detail.title}</h1>
      <p>
        By {detail.author} on {detail.date}
      </p>
      <div className="category-btn">
        {detail.categories.map((item, index) => (
          <button className="categories" key={index}>
            {item}
          </button>
        ))}
      </div>
      <div>
        {detail.content.map((item, index) =>
          item.startsWith("http") ? (
            <img key={index} src={item} alt="image" />
          ) : (
            <p key={index}>{item}</p>
          )
        )}
      </div>
    </div>
  );
}
