import React, {useEffect, useState} from "react";
import PostCard from '../components/PostCard';
import ControlArrows from "../../shared/ControlArrows";
import {Col, Row} from "react-bootstrap";
import styles from './Employees.module.scss';
import '../../scss/_utilities.scss';
import axios, {AxiosResponse} from 'axios';
import {Post} from "../../models/Post.model";
import Modal from "../../shared/Modal";
import {mapPostToModalItem} from "../../models/ModalData.model";

function News() {
    const [news, setNews] = useState<Post[]>([]);
    const heading = 'Aktualności';
    const description = 'Mamy nadzieję,że znajdziecie tu wszystko czego Wasz Pupil potrzebuje do zdrowego i radosnego życia. Do zobaczenia!';
    const footer = 'Zespół Centrum Weterynaryjnego WET-MEDYK';
    const [displayModal, setDisplayModal] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<number>(0);
    const selectedPost = news
        .find((post: Post) => post.id === selectedId);

    useEffect(() => {
        getNews();
    }, [])

        return (
            <section className={[styles.news, 'sectionPadding'].join(' ')}>
                <Row>
                    <Col md={6} sm={12} className={['row', styles.title].join(' ')}>
                        <Col md={4} sm={12} />
                        <Col md={4} sm={12} />
                        <Col md={4} sm={12} className={styles.newsContent}>
                            <h2>{heading}</h2>
                            <p>{description}</p>
                            <span>{footer}</span>
                        </Col>
                    </Col>
                    <Col md={6} sm={12} className={styles.newsContainer}>
                        {news.map((post: Post) => (
                            <PostCard key={post.id} post={post} onClick={toggleModal} />
                        ))}

                    </Col>
                </Row>
                <Row>
                    <Col md={6}/>
                    <Col md={6}>
                        <ControlArrows
                            onLeftClick={() => console.log('left click')}
                            onRightClick={() => console.log('right click')}/>
                    </Col>
                </Row>
                {
                    selectedPost ?  <Modal
                        data={mapPostToModalItem(selectedPost)}
                        toggleModal={toggleModal}
                        displayModal={displayModal}/> : null
                }
            </section>);

    function toggleModal(id: number = 0) {
        setDisplayModal(!displayModal);
        setSelectedId(id);
    }

    function getNews() {
        axios.get('http://localhost:8080/posts')
            .then((res: AxiosResponse<Post[]>) => {
                setNews(res.data);
            });
    }
}

export default News;
