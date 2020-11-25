import React, {useEffect, useState} from 'react';
import styles from './PrimaryServices.module.scss';
import {Container} from "react-bootstrap";
import {PrimaryServiceCard} from "../../models/PrimaryServiceCard.model";
import PrimaryService from '../components/PrimaryService';
import Modal from './../../shared/Modal';
import {mapPrimaryServiceToModalItem} from "../../models/ModalData.model";
import PrimaryServiceModalComponent from "../components/PrimaryServiceModalComponent";
import { createStyles, Select, Theme } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import * as _ from 'lodash';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { LoadServices } from "../../store/services-store/actions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 140,
            marginLeft: '3.5rem',
            marginBottom: '5rem',
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
    const dispatch = useDispatch();
    const primaryServices = useSelector((state: RootState) => state.service.services);
    const isLoading = useSelector((state: RootState) => state.service.isLoading);
    const [displayModal, setDisplayModal] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<PrimaryServiceCard | null>(null);
    const [selectedLocation, setSelectedLocation] = useState<string>('all');
    const classes = useStyles();
    const [displayServices, setDisplayServices] = useState<PrimaryServiceCard[]>([]);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectedLocation(event.target.value as string);
    };

    const toggleModal = (id: number | null = null) => {
        const selectedCard = primaryServices.find((card: PrimaryServiceCard) => card.id === id);
        setDisplayModal(!displayModal);
        setSelectedCard(selectedCard ? selectedCard : null);
    }

    useEffect(() => {
        if (!primaryServices.length && !isLoading) {
            dispatch(LoadServices());
        }
    }, [dispatch, isLoading, primaryServices]);

    useEffect(() => {
        const selectedServices = selectedLocation === 'all'
            ? _.cloneDeep(primaryServices) :
            primaryServices.filter(service => service.available.includes(selectedLocation));
        setDisplayServices(selectedServices);
    }, [selectedLocation, primaryServices])

    return (
        <section id="services" className={[styles.primaryServices, 'sectionPadding'].join(' ')}>
            <h2>Usługi</h2>
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
}

export default PrimaryServices;
