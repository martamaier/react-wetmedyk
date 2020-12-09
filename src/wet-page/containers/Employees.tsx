import React, {useEffect} from "react";
import {Employee} from "../../models/Employee.model";
import EmployeeCard from "../components/Employee";
import '../../scss/_utilities.scss';
import {Container} from "react-bootstrap";
import {mapEmployeeToModalItem, ModalItem} from "../../models/ModalData.model";
import {useDispatch, useSelector} from "react-redux";
import {LoadEmployees} from "../../store/employees-store/actions";
import {getEmployees, getIsLoading} from "../../store/employees-store/selectors";
import {OpenModal} from "../../store/modal-store/actions";
import {ModalState} from "../../store/modal-store";
import classes from './Employees.module.scss';

function Employees() {
    const dispatch = useDispatch();
    const employees = useSelector(getEmployees);
    const isLoading = useSelector(getIsLoading);
    const {heading} = {
        heading: 'O nas',
    }
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

    return (
        <section id={'employees'} className={['sectionPadding'].join(' ')}>
            <Container className={classes.employees}>
                <div className={classes.title}>
                    <h2>{heading}</h2>
                </div>
                <div className={classes.employeesWrapper}>
                    {
                        employees.map((employee: Employee) => (
                            <EmployeeCard
                                key={employee.id}
                                employee={employee}
                                toggleModal={openModal}/>
                        ))
                    }
                </div>
            </Container>
        </section>);
}

export default Employees;

