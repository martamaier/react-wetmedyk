import React, {useEffect, useState} from 'react';
import styles from './primary-services.module.scss';
import {Container} from "react-bootstrap";
import {PrimaryServiceCard} from "../../models/primary-service-card.interface";
import PrimaryService from '../components/primary-service.component';
import {useDispatch, useSelector} from "react-redux";
import {LoadServices} from "../../store/services-store/actions";
import {OpenModal} from "../../store/modal-store/actions";
import {ModalState} from "../../store/modal-store";
import Dropdown, {STYLING_TYPES} from "../../shared/widgets/dropdown.component";
import {getLocations, getSelectedLocationId} from "../../store/locations-store/selectors";
import {SelectLocation} from "../../store/locations-store/actions";
import {mapLocationToDropdownItem} from "../../utils/dropdown-items-map";
import {getIsLoading, getPrimaryServices} from "../../store/services-store/selectors";
import {DataFetchInterface} from "../../wet-manager/models/data-fetch.interface";
import withDataFetch from "../../wet-manager/shared/hoc/with-data-fetch.component";
import {DataFetchProps} from "../../wet-manager/models/data-fetch-props.interface";

function PrimaryServices({ data }: DataFetchProps<PrimaryServiceCard>) {
    const dispatch = useDispatch();
    const selectedLocation = useSelector(getSelectedLocationId);
    const locations = useSelector(getLocations);
    const [displayServices, setDisplayServices] = useState<PrimaryServiceCard[]>([]);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        dispatch(SelectLocation(event.target.value as any));
    };

    const openModal = (id: number | null = null) => {
        const modalData: ModalState<PrimaryServiceCard> = {
            data: (data || []).find(service => service.id === id) as PrimaryServiceCard,
            shouldDisplay: true,
            contentType: "service",
        };
        dispatch(OpenModal(modalData));
    }

    useEffect(() => {
        const selectedServices = selectedLocation === null
            ? (data || []) :
            (data || [])
                .filter((card: PrimaryServiceCard) => card.available.find((id: number) => id === selectedLocation));
        setDisplayServices(selectedServices);
    }, [selectedLocation, data])

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

const options: DataFetchInterface<PrimaryServiceCard> = {
    dataLoader: LoadServices,
    dataSelector: getPrimaryServices,
    loadingSelector: getIsLoading,
};

export default withDataFetch(PrimaryServices, options);
