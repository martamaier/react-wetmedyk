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
import { createStyles, Select, Theme } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import * as _ from 'lodash';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 140,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        label: {
            fontSize: '2rem',
        },
        select: {
            fontSize: '2rem',
        },
        noBorder: {
            border: 'none',
        }
    }),
);

function PrimaryServices() {
    const [primaryServices, setPrimaryServices] = useState<PrimaryServiceCard[]>([]);
    const [displayModal, setDisplayModal] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<PrimaryServiceCard | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<string>('all');
    const classes = useStyles();
    const [displayServices, setDisplayServices] = useState<PrimaryServiceCard[]>([]);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedLocation(event.target.value as string);
    };

    useEffect(() => {
        getPrimaryServices();
    }, []);

    useEffect(() => {
        const selectedServices = selectedLocation === 'all'
            ? _.cloneDeep(primaryServices) :
            primaryServices.filter(service => service.available.includes(selectedLocation));
        setDisplayServices(selectedServices);
    }, [selectedLocation, primaryServices])

    return (
        <section id="services" className={[styles.primaryServices, 'sectionPadding'].join(' ')}>
            <Container>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel className={classes.label} id="demo-simple-select-outlined-label">Lecznice</InputLabel>
                    <Select className={classes.select}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={selectedLocation}
                        onChange={handleChange}
                        label="Lecznice">
                        <MenuItem className={classes.select} value="all">Wszystkie</MenuItem>
                        <MenuItem className={classes.select} value="banino">Banino</MenuItem>
                        <MenuItem className={classes.select} value="pepowo">Pepowo</MenuItem>
                    </Select>
                </FormControl>
                <h2>Usługi</h2>
            </Container>
            <Container>
                <div className={styles.primaryServicesWrapper}>
                    {
                        displayServices.map((service: PrimaryServiceCard) => (
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
