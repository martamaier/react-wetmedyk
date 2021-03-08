import React, {useEffect, useState} from "react";
import {Post} from "../../models/post.interface";
import styles from './post-card.module.scss';
import Button from '../../shared/button.component';

function PostCard (props: { post: Post, onClick: Function }) {
    const { post, onClick } = props;
    const handleClick = () => onClick(post.id);
    const [formattedContent, setFormattedContent] = useState<string[]>([]);

    useEffect(() => {
        if (post.content.length) {
            const newContent = post.content
                .slice(0, 200)
                .split(';');

            setFormattedContent(newContent);
        }
    }, [post.content]);

   return (
       <article className={styles.newsItem}>
           <img src="http://wetmedyk.pl/wp-content/uploads/2015/01/WetMedyk-4.jpg" alt="" />
           <div className={styles.newsItemContent}>
               <h3>{post.title}</h3>
               <h4>{post.date}</h4>
               <div>
                   {
                       formattedContent.length ?
                           formattedContent
                           .map((sentence: string, index: number) => (
                               <div key={index}>
                                   {index === (formattedContent.length - 1)
                                       ? `${sentence}...`
                                       : sentence}
                               </div>)) : ''
                   }
               </div>
               <Button
                   onClick={handleClick}
                   type="button"
                   text="Więcej"
               />
           </div>
       </article>
   )
}

export default PostCard;
