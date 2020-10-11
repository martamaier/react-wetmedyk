import React from "react";
import {Employee} from "../models/Employee.model";
import EmployeeCard from "./../components/Employee";
import ControlArrows from "./../utilities/ControlArrows";
import styles from './Employees.module.scss';
import './../scss/_utilities.scss';
import {Col, Row} from "react-bootstrap";
import axios, {AxiosResponse} from 'axios';
import Modal from './../utilities/Modal';
import {mapEmployeeToModalItem} from "../models/ModalData.model";

class Employees extends React.Component<any, any> {
    state = {
        employees: [],
        heading: 'O nas',
        description: 'Mamy nadzieję,że znajdziecie tu wszystko czego Wasz Pupil potrzebuje do zdrowego i radosnego życia. Do zobaczenia!',
        footer: 'Zespół Centrum Weterynaryjnego WET-MEDYK',
        displayModal: false,
        selected: null,
    }

    render() {
        const selectedEmployee = this.state.employees
            .find((employee: Employee) => employee.id === this.state.selected);
        return (
            <section className={[styles.aboutUs, 'sectionPadding'].join(' ')}>
                <Row className={styles.row}>
                    <Col lg={6} md={12} sm={12} className={styles.title}>
                        <div className={styles.aboutUsWrapper}>
                            <div className={styles.aboutUsContent}>
                                <h2>{this.state.heading}</h2>
                                <p>{this.state.description}</p>
                                <span>{this.state.footer}</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} sm={12} className={styles.cardsContainer}>
                        {
                            this.state.employees.map((employee: Employee) => (
                                <EmployeeCard
                                    key={employee.id}
                                    employee={employee}
                                    toggleModal={this.toggleModal.bind(this)}/>

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
                        <Modal toggleModal={this.toggleModal.bind(this)}
                               displayModal={this.state.displayModal}
                               data={mapEmployeeToModalItem(selectedEmployee as Employee)}/> : null
                }
            </section>);
    }

    componentDidMount() {
        this.getEmployees();
    }

    toggleModal(id: number = 0) {
        this.setState({
            ...this.state,
            displayModal: !this.state.displayModal,
            selected: id,
        });
    }

    getEmployees() {
        axios.get('http://localhost:8080/employees')
            .then((res: AxiosResponse<Employee[]>) => {
                console.log(res.data);
                this.setState({
                    ...this.state,
                    employees: res.data,
                });
            });
    }
}

export default Employees;
