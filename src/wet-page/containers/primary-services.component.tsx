import React, {useEffect, useState} from 'react';
import styles from './primary-services.module.scss';
import {Container} from "react-bootstrap";
import {PrimaryServiceCard} from "../../models/primary-service-card.interface";
import PrimaryService from '../components/primary-service.component';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {LoadServices} from "../../store/services-store/actions";
import {OpenModal} from "../../store/modal-store/actions";
import {ModalState} from "../../store/modal-store";
import Dropdown, {STYLING_TYPES} from "../../shared/widgets/dropdown.component";
import {getLocations, getSelectedLocationId} from "../../store/locations-store/selectors";
import {SelectLocation} from "../../store/locations-store/actions";
import {mapLocationToDropdownItem} from "../../utils/dropdown-items-map";

function PrimaryServices() {
    const dispatch = useDispatch();
    const primaryServices = useSelector((state: RootState) => state.service.services);
    const isLoading = useSelector((state: RootState) => state.service.isLoading);
    const selectedLocation = useSelector(getSelectedLocationId);
    const locations = useSelector(getLocations);
    const [displayServices, setDisplayServices] = useState<PrimaryServiceCard[]>([]);

    const handleChange = (event: { currentTarget: { value: unknown } }, name: string) => {
        dispatch(SelectLocation(event.currentTarget.value as any));
    };

    const openModal = (id: number | null = null) => {
        const modalData: ModalState<PrimaryServiceCard> = {
            data: primaryServices.find(service => service.id === id) as PrimaryServiceCard,
            shouldDisplay: true,
            contentType: "service",
        };
        dispatch(OpenModal(modalData));
    }

    useEffect(() => {
        if (!primaryServices.length && !isLoading) {
            dispatch(LoadServices());
        }
    }, [dispatch, isLoading, primaryServices]);

    useEffect(() => {
        const selectedServices = selectedLocation === null
            ? primaryServices :
            primaryServices
                .filter((card: PrimaryServiceCard) => card.available.find((id: number) => id === selectedLocation));
        setDisplayServices(selectedServices);
    }, [selectedLocation, primaryServices])

    return (
        <section id="services" className={[styles.primaryServices, 'sectionPadding'].join(' ')}>
            <h2>Usługi</h2>
            <Container>
                <Dropdown
                    styling={STYLING_TYPES.Custom}
                    value={selectedLocation ? selectedLocation : 1}
                    items={locations.map(location => mapLocationToDropdownItem(location))}
                    onChange={handleChange} />
            </Container>
            <Container>
                <div className={styles.primaryServicesWrapper}>
                    {
                        displayServices.map((service: PrimaryServiceCard) => (
                            <PrimaryService
                                key={service.id}
                                {...service}
                                handleClick={() => openModal(service.id)} />))
                    }
                </div>
            </Container>
        </section>)
}

export default PrimaryServices;
