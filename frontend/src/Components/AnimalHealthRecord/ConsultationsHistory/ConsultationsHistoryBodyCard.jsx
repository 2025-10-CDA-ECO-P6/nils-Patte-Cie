import styles from "@/Components/AnimalHealthRecord/ConsultationsHistory/ConsultationHistoryCard.module.css";
import {formatDate} from "@/app/animals/owner/store/animalStore";
import Card from "@/Components/Card/Card";
import React from "react";
import ConsultationHistoryListCard
    from "@/Components/AnimalHealthRecord/ConsultationsHistory/ConsultationHistoryListCard";

function ConsultationsHistoryBodyCard({selectedAnimal}) {
    return (
        <Card.Body>
            {selectedAnimal.consultations.length > 0 ? (
               <ConsultationHistoryListCard selectedAnimal={selectedAnimal}/>
            ) : (
                <p className={styles.noData}>Aucune consultation enregistrée</p>
            )}
        </Card.Body>
    )
}

export default ConsultationsHistoryBodyCard
