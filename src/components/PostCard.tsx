import React from "react";
import {Post} from "../models/Post.model";
import styles from './PostCard.module.scss';

const postCard = (props:{post: Post, onClick: Function}) => (
    <article className={styles.newsItem}>
        <img src="http://wetmedyk.pl/wp-content/uploads/2015/01/WetMedyk-4.jpg" alt="" />
            <div className={styles.newsItemContent}>
                <h3>{props.post.title}</h3>
                <h4>{props.post.date}</h4>
                <p>{props.post.content.length ? `${props.post.content.slice(0, 200)}...` : ''}</p>
                <button onClick={() => props.onClick(props.post.id)} className={styles.newsItemButton}>Wiecej</button>
            </div>
    </article>
);

export default postCard;
