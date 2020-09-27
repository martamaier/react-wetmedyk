import React from "react";
import Service from "./../components/ServiceCard";
import { ServiceCard } from "../models/ServiceCard.model";

class Services extends React.Component<any, any> {
    state = {
        services: [
            {
                icon: 'location-city',
                headingFront: 'Hotel',
                headingBack: 'Warunki przyjęcia',
                bulletPoints: [
                    'szczepienie przeciwko wściekliźnie oraz chorobom zakaźnym',
                    'odrobaczenie',
                    'zabezpieczenie przeciwko pchłom i kleszczom',
                ]
            },
            {
                icon: 'loyalty',
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
                icon: 'shopping_cart',
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
        return <section className="services section-padding">
            <h2>Dodatkowe usługi</h2>
            <div className="container services-wrapper">
                {
                    this.state.services.map((service: ServiceCard) => (
                        <Service {...service} />
                    ))
                }

            </div>

        </section>;
    }
}

export default Services;
