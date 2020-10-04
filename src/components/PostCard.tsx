import React from "react";
import {Post} from "../models/Post.model";
import styles from './PostCard.module.scss';

const postCard = (props: Post) => (
    <article className={styles.newsItem}>
        <img src="http://wetmedyk.pl/wp-content/uploads/2015/01/WetMedyk-4.jpg" alt="" />
            <div className={styles.newsItemContent}>
                <h3>{props.title}</h3>
                <h4>{props.date}</h4>
                <p>{props.content.length ? `${props.content.slice(0, 200)}...` : ''}</p>
                <button className={styles.newsItemButton}>Wiecej</button>
            </div>
    </article>
);

export default postCard;
