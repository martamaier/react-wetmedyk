import React from "react";
import {Employee} from "../models/Employee.model";
import EmployeeCard from "./../components/Employee";
import ControlArrows from "./../utilities/ControlArrows";
import styles from './Employees.module.scss';
import './../scss/_utilities.scss';
import {Col, Row} from "react-bootstrap";

class Employees extends React.Component<any, any> {
    state = {
        employees: []
    }
    render() {
        return (
            <section className={[styles.aboutUs, 'sectionPadding'].join(' ')}>
                <Row>
                    <Col md={6} sm={12} className={['row', styles.title].join(' ')}>
                        <Col md={4} sm={12}/>
                        <Col md={4} sm={12}/>
                        <Col md={4} sm={12} className={styles.aboutUsContent}>
                            <h2>O nas</h2>
                            <p>Mamy nadzieję,że znajdziecie tu wszystko czego Wasz Pupil potrzebuje do zdrowego i radosnego
                                życia. Do zobaczenia!</p>
                            <span>Zespół Centrum Weterynaryjnego WET-MEDYK</span>
                        </Col>
                    </Col>
                    <Col md={6} sm={12} className={styles.cardsContainer}>
                        {
                            this.state.employees.map((employee: Employee) => (
                                <EmployeeCard {...employee} />
                            ))
                        }
                    </Col>
                </Row>
                <Row>
                    <Col md={6}/>
                    <Col md={6}>
                        <ControlArrows/>
                    </Col>
                </Row>
            </section>);
    }
}

export default Employees;
