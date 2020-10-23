import React, {useEffect, useReducer, useRef, useState} from "react";
import {Employee} from "../../models/Employee.model";
import EmployeeCard from "../components/Employee";
import ControlArrows from "../../shared/ControlArrows";
import styles from './Employees.module.scss';
import '../../scss/_utilities.scss';
import {Col, Row} from "react-bootstrap";
import axios, {AxiosResponse} from 'axios';
import Modal from '../../shared/Modal';
import {mapEmployeeToModalItem} from "../../models/ModalData.model";
import {CURRENT_ENV} from "../../environment";
import {employeeReducer} from "../../store/employees-store/reducer";

function Employees() {
    const [employees, setEmployees] = useReducer(employeeReducer, []);
    const heading = 'O nas';
    const description = 'Mamy nadzieję,że znajdziecie tu wszystko czego Wasz Pupil potrzebuje do zdrowego i radosnego życia. Do zobaczenia!';
    const footer = 'Zespół Centrum Weterynaryjnego WET-MEDYK';
    const [displayModal, setDisplayModal] = useState<boolean>(false);
    const [selectedId, setSelected] = useState<number>(0);
    const selectedEmployee = employees
        .find((employee: Employee) => employee.id === selectedId);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        getEmployees();
    }, [])

    useEffect(() => {
        const cardsContainer = document.querySelector('.employee-scroll');
        (cardsContainer as any).scrollTo({ left: offset, behavior: 'smooth' });
    }, [offset])

    return (
        <section className={[styles.aboutUs, 'sectionPadding'].join(' ')}>
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
                                toggleModal={toggleModal}/>
                        ))
                    }
                </Col>
            </Row>
            <Row>
                <Col md={6}/>
                <Col md={6}>
                    <ControlArrows
                        maxCount={employees.length}
                        onLeftClick={() => setOffset(offset - 750)}
                        onRightClick={() => setOffset(offset + 750)}/>
                </Col>
            </Row>
            {
                selectedEmployee ?
                    <Modal toggleModal={toggleModal}
                           displayModal={displayModal}
                           data={mapEmployeeToModalItem(selectedEmployee as Employee)}/> : null
            }
        </section>);

    function getEmployees() {
        axios.get(`${CURRENT_ENV}/employees`)
            .then((res: AxiosResponse<Employee[]>) => {
                res.data.forEach((employee: Employee) => {
                    setEmployees({type: 'AddOne', payload: employee});
                });

            });
    }

    function toggleModal(id: number = 0) {
        setDisplayModal(!displayModal);
        setSelected(id);
    }
}

export default Employees;

