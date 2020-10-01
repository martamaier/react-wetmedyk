import React from "react";
import styles from './Newsletter.module.scss';
import {Container, Form, InputGroup} from "react-bootstrap";
import './../scss/_utilities.scss';

class Newsletter extends React.Component<any, any> {
    render() {
        return (
            <section className={[styles.newsletter, 'sectionPadding'].join(' ')}>
                <Container>
                    <Form className={styles.newsletterForm}>
                        <Form.Label className={styles.label} htmlFor="email">Newsletter</Form.Label>
                        <InputGroup className={styles.inputGroup}>
                            <Form.Control className={styles.formControl} type="email" placeholder="adres e-mail"
                                          id="email"/>
                            <InputGroup>
                                <input type="submit" value="Zapisz sie!"/>
                            </InputGroup>
                        </InputGroup>
                    </Form>
                </Container>
            </section>);
    }
}

export default Newsletter;
