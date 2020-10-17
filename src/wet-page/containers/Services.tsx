import React from "react";
import Service from "../components/ServiceCard";
import {ServiceCard} from "../../models/ServiceCard.model";
import styles from './Services.module.scss';
import '../../scss/_utilities.scss';
import {Container} from "react-bootstrap";
import {IconTypes} from "../../models/IconTypes";

class Services extends React.Component<any, any> {
    state = {
        services: [
            {
                icon: IconTypes.Hotel,
                headingFront: 'Hotel',
                headingBack: 'Warunki przyjęcia',
                bulletPoints: [
                    'szczepienie przeciwko wściekliźnie oraz chorobom zakaźnym',
                    'odrobaczenie',
                    'zabezpieczenie przeciwko pchłom i kleszczom',
                ]
            },
            {
                icon: IconTypes.Loyalty,
                headingFront: 'Strzyżenie i pielęgnacja',
                headingBack: 'Nasze usługi',
                bulletPoints: [
                    'strzyżenie FCI Federation Cynologique Internationale',
                    'strzyżenie psów nierasowych i kotów',
                    'trymowanie',
                    'wyczesywanie',
                    'kąpiele pielęgnacyjne i lecznicze',
                ]
            },
            {
                icon: IconTypes.Shop,
                headingFront: 'Sklep',
                headingBack: 'Nasz asortyment',
                bulletPoints: [
                    'karmy weterynaryjne',
                    'produkty codziennego użytku',
                    'artykuły do pielęgnacji',
                    'zabawki',
                ]
            },
        ]
    }
    render() {
        return (
            <section className={[styles.services, 'sectionPadding'].join(' ')}>
                <h2>Dodatkowe usługi</h2>
                <Container className={styles.servicesWrapper}>
                    {
                        this.state.services.map((service: ServiceCard) => (
                            <Service key={service.icon} {...service} />
                        ))
                    }
                </Container>
            </section>);
    }
}

export default Services;
