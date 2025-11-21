import React from 'react'
import styles from "@/Components/AnimalHealthRecord/Vaccination/VaccinationCard.module.css";
import {Syringe} from "lucide-react";

function VaccinationCardHeader({selectedAnimal}) {
    return (
        <>
            <div className={styles.cardTitle}>
                <Syringe size={20} />
                <h3>Vaccinations</h3>
                {selectedAnimal.is_up_to_date && (
                    <span className={styles.upToDateBadge}>À jour</span>
                )}
                {!selectedAnimal.is_up_to_date && (
                    <span className={styles.notUpToDateBadge}>Pas A jour</span>
                )}
            </div>
        </>
    )
}

export default VaccinationCardHeader
