import React from "react";
import {NewsItem} from "../models/NewsItem.model";
import NewsItemCard from './../components/NewsItem';
import ControlArrows from "./../utilities/ControlArrows";
import {Col, Row} from "react-bootstrap";
import styles from './Employees.module.scss';
import './../scss/_utilities.scss';

class News extends React.Component<any, any> {
    state = {
        news: []
    }

    render() {
        return (
            <section className={[styles.news, 'sectionPadding'].join(' ')}>
                <Row>
                    <Col md={6} sm={12} className={['row', styles.title].join(' ')}>
                        <Col md={4} sm={12} />
                        <Col md={4} sm={12} />
                        <Col md={4} sm={12} className={styles.newsContent}>
                            <h2>Aktualności</h2>
                            <p>Mamy nadzieję,że znajdziecie tu wszystko czego Wasz Pupil potrzebuje do zdrowego i
                                radosnego
                                życia. Do zobaczenia!</p>
                            <span>Zespół Centrum Weterynaryjnego WET-MEDYK</span>
                        </Col>
                    </Col>
                    <Col md={6} sm={12} className={styles.newsContainer}>
                        {this.state.news.map((newsItem: NewsItem) => (
                            <NewsItemCard {...newsItem} />
                        ))}

                    </Col>
                </Row>
                <Row>
                    <Col md={6}/>
                    <Col md={6}>
                        <ControlArrows/>
                    </Col>
                </Row>
            </section>);
    }
}

export default News;
