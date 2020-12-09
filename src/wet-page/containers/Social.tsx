import React from "react";
import styles from './Social.module.scss';
import {Container} from "react-bootstrap";
import '../../scss/_utilities.scss';
import {FaEnvelopeSquare, FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";

function Social() {
        return (
            <section className={styles.social}>
                <Container>
                    <div className={styles.socialIcons}>
                        <a className={styles.icons} target="_blank"
                           href="https://pl-pl.facebook.com/pages/category/Veterinarian/WetMedyk-390130391162994/"
                           rel="noopener noreferrer">
                            <FaFacebookSquare/>
                        </a>
                        <a className={styles.icons} href="https://twitter.com/wetmedyk?lang=en"
                           target="_blank"
                           rel="noopener noreferrer">
                            <FaTwitterSquare/>
                        </a>
                        <a className={styles.icons} href="mailto:kontakt@wetmedyk.pl">
                            <FaEnvelopeSquare/>
                        </a>
                    </div>
                </Container>
            </section>);
}

export default Social;
