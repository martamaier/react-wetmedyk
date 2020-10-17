import React, {useEffect, useReducer, useState} from "react";
import {Employee} from "../../models/Employee.model";
import EmployeeCard from "../components/Employee";
import ControlArrows from "../../shared/ControlArrows";
import styles from './Employees.module.scss';
import '../../scss/_utilities.scss';
import {Col, Row} from "react-bootstrap";
import axios, {AxiosResponse} from 'axios';
import Modal from '../../shared/Modal';
import {mapEmployeeToModalItem} from "../../models/ModalData.model";
import * as _ from "lodash";

function Employees() {
    const [employees, setEmployees] = useReducer(employeeReducer, []);
    const heading = 'O nas';
    const description = 'Mamy nadzieję,że znajdziecie tu wszystko czego Wasz Pupil potrzebuje do zdrowego i radosnego życia. Do zobaczenia!';
    const footer = 'Zespół Centrum Weterynaryjnego WET-MEDYK';
    const [displayModal, setDisplayModal] = useState(false);
    const [selectedId, setSelected] = useState(null);
    const selectedEmployee = employees
            .find((employee: Employee) => employee.id === selectedId);

    useEffect(() => {
        if (!employees.length) {
            getEmployees();
        }
    })

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
                    <Col lg={6} md={12} sm={12} className={styles.cardsContainer}>
                        {
                            employees.map((employee: Employee) => (
                                <EmployeeCard
                                    key={employee.id + employee.firstName}
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
                            onLeftClick={() => console.log('left click')}
                            onRightClick={() => console.log('right click')}/>
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
        axios.get('http://localhost:8080/employees')
            .then((res: AxiosResponse<Employee[]>) => {
                console.log(res.data);

                res.data.forEach((employee: Employee) => {
                    setEmployees({ type: 'AddOne', payload: employee });
                });

            });
    }

    function toggleModal(id: number = 0) {
        setDisplayModal(!displayModal);
        // @ts-ignore
        setSelected(id);
    }
}

export default Employees;

function employeeReducer(
    state: Employee[],
    action: { type: string, payload: Employee },
): Employee[] {
    const newState = _.cloneDeep(state);
    switch (action.type) {
        case 'AddOne':
            return [...newState, action.payload];
        case 'Delete':
            return newState
                .filter((employee: Employee) => employee.id !== action.payload.id);
        case 'Update':
            const filteredArray = newState
                .filter((employee: Employee) => employee.id !== action.payload.id)
            return [...filteredArray, action.payload];
        default:
            return newState;
    }
}
