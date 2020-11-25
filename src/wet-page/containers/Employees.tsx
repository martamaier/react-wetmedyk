import React, { useEffect, useState } from "react";
import {Employee} from "../../models/Employee.model";
import EmployeeCard from "../components/Employee";
import ControlArrows from "../../shared/ControlArrows";
import styles from './Employees.module.scss';
import '../../scss/_utilities.scss';
import {Col, Row} from "react-bootstrap";
import { mapEmployeeToModalItem, ModalItem } from "../../models/ModalData.model";
import { useDispatch, useSelector} from "react-redux";
import {LoadEmployees} from "../../store/employees-store/actions";
import { getEmployees, getIsLoading } from "../../store/employees-store/selectors";
import { OpenModal } from "../../store/modal-store/actions";
import { ModalState } from "../../store/modal-store";

function Employees() {
    const dispatch = useDispatch();
    const employees = useSelector(getEmployees);
    const isLoading = useSelector(getIsLoading);
    const { heading, footer, description } = {
        heading: 'O nas',
        description: 'Mamy nadzieję,że znajdziecie tu wszystko czego Wasz Pupil potrzebuje do zdrowego i radosnego życia. Do zobaczenia!',
        footer: 'Zespół Centrum Weterynaryjnego WET-MEDYK',
    }
    const [offset, setOffset] = useState(0);
    const openModal = (id: number = 0) => {
        const modalData: ModalState<ModalItem> = {
            data: mapEmployeeToModalItem(employees.find((employee: Employee) => employee.id === id) as Employee),
            contentType: "employee",
            shouldDisplay: true,

        }
        dispatch(OpenModal(modalData));
    }

    useEffect(() => {
        if (!employees.length && !isLoading) {
            dispatch(LoadEmployees());
        }
    }, [dispatch, employees, isLoading])

    useEffect(() => {
        const cardsContainer = document.querySelector('.employee-scroll');
        (cardsContainer as any).scrollTo({ left: offset, behavior: 'smooth' });
    }, [offset])

    return (
        <section id={'employees'} className={[styles.aboutUs, 'sectionPadding'].join(' ')}>
            <Row className={styles.row}>
                <Col lg={6} md={12} sm={12} className={styles.title}>
                    <div className={styles.aboutUsWrapper}>
                        <div className={styles.aboutUsContent}>
                            <h2>{heading}</h2>
                            <p>{description}</p>
                            <span>{footer}</span>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12} sm={12} className={[styles.cardsContainer, 'employee-scroll'].join(' ')}>
                    {
                        employees.map((employee: Employee) => (
                            <EmployeeCard
                                key={employee.id}
                                employee={employee}
                                toggleModal={openModal}/>
                        ))
                    }
                </Col>
            </Row>
            <Row>
                <Col md={6}/>
                <Col md={6}>
                    <ControlArrows
                        maxCount={employees.length}
                        onLeftClick={() => setOffset(offset - 600)}
                        onRightClick={() => setOffset(offset + 600)}/>
                </Col>
            </Row>
        </section>);
}

export default Employees;

