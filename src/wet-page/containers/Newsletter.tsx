import React, {FormEvent, useState} from "react";
import styles from './Newsletter.module.scss';
import {Container, Form, InputGroup} from "react-bootstrap";
import '../../scss/_utilities.scss';
import axios, {AxiosResponse} from 'axios';
import {NewsletterResponse} from "../../models/NewsletterResponse.model";
import {Statuses} from "../../models/ResponseStatuses";
import Button from '../../shared/Button';
import {AlertMessage} from "../../models/AlertMessage.model";
import Alert from './../../shared/Alert';

function Newsletter() {
    const [isValid, setIsValid] = useState<boolean>(false);
    const [touched, setTouched] = useState<boolean>(false);
    const inputType = 'email';
    const placeholder = 'adres e-mail';
    const [alert, setAlert] = useState<AlertMessage>({
        shouldDisplay: false,
        message: null,
        status: null,
    });

        return (
            <section className={[styles.newsletter, 'sectionPadding'].join(' ')}>
                <Container>
                    {
                        !alert.shouldDisplay ? null : (
                            <Alert message={alert.message as any}
                                   onClose={updateAlert}
                                   status={alert.status as any} />
                        )
                    }
                    <Form
                        className={styles.newsletterForm}
                        onSubmit={(event: FormEvent<HTMLFormElement>) => onSubmit(event)}>
                        <Form.Label className={styles.label} htmlFor="email">Newsletter</Form.Label>
                        <div className={styles.inputGroup}>
                            <InputGroup>
                                <Form.Control
                                    className={styles.formControl}
                                    type={inputType}
                                    placeholder={placeholder}
                                    name={inputType} />
                                {/*<input type="submit" value="Zapisz sie!"/>*/}
                                <Button text="Zapisz sie!" type="submit" />
                            </InputGroup>
                        </div>
                    </Form>
                </Container>
            </section>);


    function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const email = formData.get('email');

        if ((email as string).length) {
            axios.post('http://localhost:8080/newsletter', { email })
                .then((res: AxiosResponse<NewsletterResponse>) => (
                    handleAlert(res.data)))
        } else {
            const payload: NewsletterResponse = {
                status: Statuses.Warning,
                message: 'E-mail address cannot be empty'
            };
            handleAlert(payload);
        }
    }

    function handleAlert(newsletter: NewsletterResponse) {
        const alert: AlertMessage = {
            shouldDisplay: true,
            message: newsletter.message,
            status: newsletter.status,
        }
        updateAlert(alert);
        setTimeout(() => {
            const clearAlert: AlertMessage = {
                shouldDisplay: false,
                message: null,
                status: null,
            }
            updateAlert(clearAlert);
        }, 5000);
    }

    function updateAlert(alert: AlertMessage): void {
      setAlert(alert);
    }
}

export default Newsletter;
