import React from "react";
// @ts-ignore
import { ReactComponent as Veterinary } from './../images/veterinary.svg';
// @ts-ignore
import { ReactComponent as Stethoscope } from './../images/stethoscope.svg';
// @ts-ignore
import { ReactComponent as Health } from './../images/health.svg';
// @ts-ignore
import { ReactComponent as HeartBeat } from './../images/heartbeat.svg';
// @ts-ignore
import { ReactComponent as Tooth } from './../images/tooth.svg';
// @ts-ignore
import { ReactComponent as Vaccine } from './../images/vaccine.svg';
// @ts-ignore
import { ReactComponent as MedicalReport } from './../images/medical-report.svg';
// @ts-ignore
import { ReactComponent as Hospital } from './../images/animal.svg';
// @ts-ignore
import { ReactComponent as PetHouse } from './../images/pet-house.svg';
// @ts-ignore
import { ReactComponent as Bathing } from './../images/bathing.svg';
import { ReactComponent as Paw } from './../images/paw.svg';
import classes from './services-icon.module.scss';

export enum ICON_NAMES {
    Veterinary = 'Veterinary',
    Stethoscope = 'Stethoscope',
    Health = 'Health',
    HeartBeat = 'HeartBeat',
    Tooth = 'Tooth',
    Vaccine = 'Vaccine',
    MedicalReport = 'MedicalReport',
    Hospital = 'Hospital',
    PetHouse = 'PetHouse',
    Bathing = 'Bathing',
}

function ServicesIcon ({ name }: { name: string }) {
    switch (name) {
        case ICON_NAMES.Veterinary:
            return <Veterinary className={classes.icon} />;
        case ICON_NAMES.Stethoscope:
            return <Stethoscope className={classes.icon} />;
        case ICON_NAMES.Health:
            return <Health className={classes.icon} />;
        case ICON_NAMES.HeartBeat:
            return <HeartBeat className={classes.icon} />;
        case ICON_NAMES.Tooth:
            return <Tooth className={classes.icon} />;
        case ICON_NAMES.Vaccine:
            return <Vaccine className={classes.icon} />;
        case ICON_NAMES.MedicalReport:
            return <MedicalReport className={classes.icon} />;
        case ICON_NAMES.Hospital:
            return <Hospital className={classes.icon} />;
        case ICON_NAMES.PetHouse:
            return <PetHouse className={classes.icon} />;
        case ICON_NAMES.Bathing:
            return <Bathing className={classes.icon} />;

        default:
            return <Paw className={classes.icon} />;
    }
}

export default ServicesIcon;
