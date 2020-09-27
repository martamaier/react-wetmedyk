import React from "react";
import {Employee} from "../models/Employee.model";
import EmployeeCard from "./../components/Employee";

class Employees extends React.Component<any, any> {
    state = {
        employees: []
    }
    render() {
        return <section className="about-us section-padding">
            <div className="row">
                <div className="col-md-6 col-sm-12 row title">
                    <div className="col-md-4 col-sm-12" />
                    <div className="col-md-4 col-sm-12" />
                    <div className="col-md-4 col-sm-12 about-us-content">
                        <h2>O nas</h2>
                        <p>Mamy nadzieję,że znajdziecie tu wszystko czego Wasz Pupil potrzebuje do zdrowego i radosnego
                            życia. Do zobaczenia!</p>
                        <span>Zespół Centrum Weterynaryjnego WET-MEDYK</span>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 cards-container" >
                    {
                        this.state.employees.map((employee: Employee) => (
                            <EmployeeCard {...employee} />
                        ))
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-md-6" />
                <div className="col-md-6">
                    <span className="material-icons chevron">chevron_left</span>
                    <span className="material-icons chevron">chevron_right</span>
                </div>
            </div>
        </section>;
    }
}

export default Employees;
