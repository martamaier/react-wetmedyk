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
import classes from './ServicesIcon.module.scss';


function ServicesIcon (props: { id: number }) {
    switch (props.id) {
        case 0:
            return <Veterinary className={classes.icon} />;
        case 1:
            return <Stethoscope className={classes.icon} />;
        case 2:
            return <Health className={classes.icon} />;
        case 5:
            return <HeartBeat className={classes.icon} />;
        case 4:
            return <Tooth className={classes.icon} />;
        case 3:
            return <Vaccine className={classes.icon} />;
        case 6:
            return <MedicalReport className={classes.icon} />;
        case 7:
            return <Hospital className={classes.icon} />;
        case 8:
            return <PetHouse className={classes.icon} />;
        case 9:
            return <Bathing className={classes.icon} />;

        default:
            return <Paw className={classes.icon} />;
    }
}

export default ServicesIcon;
