import React from "react";
import PostCard from '../components/PostCard';
import ControlArrows from "./../utilities/ControlArrows";
import {Col, Row} from "react-bootstrap";
import styles from './Employees.module.scss';
import './../scss/_utilities.scss';
import axios, {AxiosResponse} from 'axios';
import {Post} from "../models/Post.model";
import Modal from "./../utilities/Modal";
import {mapPostToModalItem} from "../models/ModalData.model";

class News extends React.Component<any, any> {
    state = {
        news: [],
        heading: 'Aktualności',
        description: 'Mamy nadzieję,że znajdziecie tu wszystko czego Wasz Pupil potrzebuje do zdrowego i radosnego życia. Do zobaczenia!',
        footer: 'Zespół Centrum Weterynaryjnego WET-MEDYK',
        displayModal: false,
        selectedId: null,
    }

    render() {
        const selectedPost = this.state.news
            .find((post: Post) => post.id === this.state.selectedId);
        return (
            <section className={[styles.news, 'sectionPadding'].join(' ')}>
                <Row>
                    <Col md={6} sm={12} className={['row', styles.title].join(' ')}>
                        <Col md={4} sm={12} />
                        <Col md={4} sm={12} />
                        <Col md={4} sm={12} className={styles.newsContent}>
                            <h2>{this.state.heading}</h2>
                            <p>{this.state.description}</p>
                            <span>{this.state.footer}</span>
                        </Col>
                    </Col>
                    <Col md={6} sm={12} className={styles.newsContainer}>
                        {this.state.news.map((post: Post) => (
                            <PostCard key={post.id} post={post} onClick={this.toggleModal.bind(this)} />
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
                        toggleModal={() => this.toggleModal()}
                        displayModal={this.state.displayModal}/> : null
                }
            </section>);
    }

    componentDidMount() {
        this.getNews();
    }

    toggleModal(id: number = 0) {
        this.setState({...this.state, displayModal: !this.state.displayModal, selectedId: id})
    }

    getNews() {
        axios.get('http://localhost:8080/posts')
            .then((res: AxiosResponse<Post[]>) => {
                this.setState({
                    ...this.state,
                    news: res.data,
                });
            });
    }
}

export default News;
