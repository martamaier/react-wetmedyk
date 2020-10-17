import React, {FormEvent} from "react";
import styles from './Newsletter.module.scss';
import {Container, Form, InputGroup} from "react-bootstrap";
import '../../scss/_utilities.scss';
import axios, {AxiosResponse} from 'axios';
import {NewsletterResponse} from "../../models/NewsletterResponse.model";
import Alert from '../../shared/Alert';
import {Statuses} from "../../models/ResponseStatuses";
import Button from '../../shared/Button';

class Newsletter extends React.Component<any, any> {
    state = {
        form: {
            isValid: false,
            touched: false,
        },
        formControls: {
            email: {
                type: 'email',
                placeholder: 'adres e-mail',
            }
        },
        alert: {
            shouldDisplay: false,
            message: null,
            status: null,
        }
    };
    render() {
        return (
            <section className={[styles.newsletter, 'sectionPadding'].join(' ')}>
                <Container>
                    {
                        !this.state.alert.shouldDisplay ? null : (
                            <Alert message={this.state.alert.message as any}
                                   onClose={this.updateAlert.bind(this)}
                                   status={this.state.alert.status as any} />
                        )
                    }
                    <Form
                        className={styles.newsletterForm}
                        onSubmit={(event: FormEvent<HTMLFormElement>) => this.onSubmit(event)}>
                        <Form.Label className={styles.label} htmlFor="email">Newsletter</Form.Label>
                        <div className={styles.inputGroup}>
                            <InputGroup>
                                <Form.Control
                                    className={styles.formControl}
                                    type={this.state.formControls.email.type}
                                    placeholder={this.state.formControls.email.placeholder}
                                    name={this.state.formControls.email.type} />
                                {/*<input type="submit" value="Zapisz sie!"/>*/}
                                <Button text="Zapisz sie!" type="submit" />
                            </InputGroup>
                        </div>
                    </Form>
                </Container>
            </section>);
    }

    onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const email = formData.get('email');

        if ((email as string).length) {
            axios.post('http://localhost:8080/newsletter', { email })
                .then((res: AxiosResponse<NewsletterResponse>) => (
                    this.handleAlert(res.data)))
        } else {
            const payload: NewsletterResponse = {
                status: Statuses.Warning,
                message: 'E-mail address cannot be empty'
            };
            this.handleAlert(payload);
        }
    }

    handleAlert(newsletter: NewsletterResponse) {
        this.updateAlert(true, newsletter.message, newsletter.status);
        setTimeout(() => {
            this.updateAlert(false, null, null);
        }, 5000);
    }

    updateAlert(shouldDisplay: boolean, message: string | null = null, status: number | null): void {
        this.setState({
            ...this.state,
            alert: {
                shouldDisplay, message, status
            }
        })
    }
}

export default Newsletter;
