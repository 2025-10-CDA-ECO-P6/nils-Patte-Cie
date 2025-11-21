import styles from "@/Components/AnimalHealthRecord/ConsultationsHistory/ConsultationHistoryCard.module.css";
import {formatDate, useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";
import React from "react";

function ConsultationHistoryListCard() {
    const selectedAnimal = useOwnerAnimalStore((state) => state.selectedAnimal);
    return (

        <div className={styles.consultationsList}>
            {selectedAnimal.consultations.map((consultation, index) => (
                <div key={index} className={styles.consultationItem}>
                    <div className={styles.consultationHeader}>
                                                <span className={styles.consultationDate}>
                                                    {formatDate(consultation.date)}
                                                </span>
                        <span className={styles.consultationType}>
                                                    {consultation.type}
                                                </span>
                    </div>
                    <p className={styles.consultationVet}>
                        Dr. {consultation.veterinaire.first_name} {consultation.veterinaire.last_name}
                    </p>
                    {consultation.motif && (
                        <p className={styles.consultationNotes}>{consultation.motif}</p>

                    )}
                    <p className={styles.consultationTraitement}>{consultation.traitement}</p>
                </div>
            ))}
        </div>
    )
}

export default ConsultationHistoryListCard
