import styles from "@/Components/AnimalHealthRecord/ConsultationsHistory/ConsultationHistoryCard.module.css";
import {formatDate, useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";
import Card from "@/Components/Card/Card";
import React from "react";
import ConsultationHistoryListCard
    from "@/Components/AnimalHealthRecord/ConsultationsHistory/ConsultationHistoryListCard";

function ConsultationsHistoryBodyCard() {
    const selectedAnimal = useOwnerAnimalStore((state) => state.selectedAnimal);
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
