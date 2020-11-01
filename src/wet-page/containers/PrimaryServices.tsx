import React, {useEffect, useState} from 'react';
import styles from './PrimaryServices.module.scss';
import {Container} from "react-bootstrap";
import {PrimaryServiceCard} from "../../models/PrimaryServiceCard.model";
import PrimaryService from '../components/PrimaryService';
import axios from "axios";
import {AxiosResponse} from "axios";
import Modal from './../../shared/Modal';
import {mapPrimaryServiceToModalItem} from "../../models/ModalData.model";
import PrimaryServiceModalComponent from "../components/PrimaryServiceModalComponent";


function PrimaryServices() {
    const [primaryServices, setPrimaryServices] = useState<PrimaryServiceCard[]>([]);
    const [displayModal, setDisplayModal] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<PrimaryServiceCard | null>(null);

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
                            <PrimaryService
                                key={service.id}
                                {...service}
                                handleClick={() => toggleModal(service.id)} />))
                    }
                </div>
            </Container>
            {
                selectedCard ?
                    <Modal
                        toggleModal={toggleModal}
                        displayModal={displayModal}
                        data={mapPrimaryServiceToModalItem(selectedCard)} >
                        <PrimaryServiceModalComponent {...selectedCard} />
                    </Modal> : null
            }
        </section>)

    function getPrimaryServices() {
        axios.get('/data/primary-services.json').then((res: AxiosResponse<PrimaryServiceCard[]>) => {
            setPrimaryServices(res.data);
        });
    }

    function toggleModal(id: number | null = null) {
        const selectedCard = primaryServices.find((card: PrimaryServiceCard) => card.id === id);
        setDisplayModal(!displayModal);
        setSelectedCard(selectedCard ? selectedCard : null);
    }
}

export default PrimaryServices;
