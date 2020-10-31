import React, {useEffect, useState} from 'react';
import styles from './PrimaryServices.module.scss';
import {Container} from "react-bootstrap";
import {PrimaryServiceCard} from "../../models/PrimaryServiceCard.model";
import PrimaryService from '../components/PrimaryService';
import axios from "axios";
import {AxiosResponse} from "axios";


function PrimaryServices() {
    const [primaryServices, setPrimaryServices] = useState<PrimaryServiceCard[]>([]);

    useEffect(() => {
        getPrimaryServices();
    }, []);

    return (
        <section className={[styles.primaryServices, 'sectionPadding'].join(' ')}>
            <h2>Usługi</h2>
            <Container>
                <div className={styles.primaryServicesWrapper}>
                    {
                        primaryServices.map((service: PrimaryServiceCard) => (
                            <PrimaryService key={service.id} {...service} />))
                    }
                </div>
            </Container>
        </section>)

    function getPrimaryServices() {
        axios.get('/data/primary-services.json').then((res: AxiosResponse<PrimaryServiceCard[]>) => {
            setPrimaryServices(res.data);
        });
    }
}

export default PrimaryServices;
