import {Location} from "../models/Location.model";

export const locations: Location[] = [
    {
        id: 1,
        name: 'Przychodnia Banino',
        street: 'ul. Różana 16',
        city: 'Banino',
        zipCode: '80 - 297',
        phone: '+48 664 430 387',
        openHours: 'pon. – pt. 9:00 – 19:00<br>sob. 9:00 – 12:00',
        mapUrl: 'https://www.google.com/maps/embed/v1/place?q=R%C3%B3%C5%BCana%2016%2C%20Banino%2C%20Poland&key=AIzaSyBz-w0JyWCwEzknkta4vhD6AEej2MXkvPI',
    },
    {
        id: 2,
        name: 'Gabinet Pępowo',
        street: 'ul. Armii Krajowej 2',
        city: 'Pępowo',
        zipCode: '80 - 330',
        phone: '+48 664 430 388',
        openHours: 'pon. – pt. 9:00 – 11:00<br>pon. – pt. 16:00 – 19:00',
        mapUrl: 'https://www.google.com/maps/embed/v1/place?q=ul.Armii%20Krajowej%202%2C%2083%20%E2%80%93%20330%20P%C4%99powo&key=AIzaSyBz-w0JyWCwEzknkta4vhD6AEej2MXkvPI',
    }
];
