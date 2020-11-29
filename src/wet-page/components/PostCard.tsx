import React from "react";
import {Post} from "../../models/Post.model";
import styles from './PostCard.module.scss';
import Button from './../../shared/Button';

function PostCard (props:{post: Post, onClick: Function}) {
    const { post, onClick } = props;
    const handleClick = () => onClick(post.id);

   return (
       <article className={styles.newsItem}>
           <img src="http://wetmedyk.pl/wp-content/uploads/2015/01/WetMedyk-4.jpg" alt="" />
           <div className={styles.newsItemContent}>
               <h3>{post.title}</h3>
               <h4>{post.date}</h4>
               <p>{post.content.length ? `${post.content.slice(0, 200)}...` : ''}</p>
               <Button onClick={handleClick} type="button" text="Więcej" />
           </div>
       </article>
   )
}

export default PostCard;
