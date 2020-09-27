import React from "react";
import {NewsItem} from "../models/NewsItem.model";

const newsItem = (props: NewsItem) => (
    <article className="news-item ml-5">
        <img src="http://wetmedyk.pl/wp-content/uploads/2015/01/WetMedyk-4.jpg" alt="" />
            <div className="news-item-content">
                <h3>{props.title}</h3>
                <h4>{props.date}</h4>
                <p>{props.content.length ? `${props.content.slice(0, 200)}...` : ''}</p>
                <button className="news-item-button">Wiecej</button>
            </div>
    </article>
);

export default newsItem;
