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

function ServicesIcon (props: { id: number }) {
    const classes = {
        icon: {
            height: '8rem',
        }
    }
    switch (props.id) {
        case 0:
            return <Veterinary style={classes.icon} />;
        case 1:
            return <Stethoscope style={classes.icon} />;
        case 2:
            return <Health style={classes.icon} />;
        case 3:
            return <HeartBeat style={classes.icon} />;
        case 4:
            return <Tooth style={classes.icon} />;
        case 5:
            return <Vaccine style={classes.icon} />;
        case 6:
            return <MedicalReport style={classes.icon} />;
        case 7:
            return <Hospital style={classes.icon} />;
        case 8:
            return <PetHouse style={classes.icon} />;
        case 9:
            return <Bathing style={classes.icon} />;

        default:
            return <Paw style={classes.icon} />;
    }
}

export default ServicesIcon;
