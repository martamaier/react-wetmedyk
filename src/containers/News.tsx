import React from "react";
import {NewsItem} from "../models/NewsItem.model";
import NewsItemCard from './../components/NewsItem';

class News extends React.Component<any, any> {
    state = {
        news: []
    }
    render() {
        return <section className="news section-padding">
            <div className="row">
                <div className="col-md-6 col-sm-12 row title">
                    <div className="col-md-4 col-sm-12" />
                    <div className="col-md-4 col-sm-12" />
                    <div className="col-md-4 col-sm-12 news-content">
                        <h2>Aktualności</h2>
                        <p>Mamy nadzieję,że znajdziecie tu wszystko czego Wasz Pupil potrzebuje do zdrowego i radosnego
                            życia. Do zobaczenia!</p>
                        <span>Zespół Centrum Weterynaryjnego WET-MEDYK</span>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 news-container">
                    {this.state.news.map((newsItem: NewsItem) => (
                        <NewsItemCard {...newsItem} />
                    ))}

                </div>
            </div>
            <div className="row">
                <div className="col-md-6" />
                <div className="col-md-6">
                    <span className="material-icons chevron">chevron_left</span>
                    <span className="material-icons chevron">chevron_right</span>
                </div>
            </div>
        </section>;
    }
}

export default News;
