import React from 'react'
import Card from "@/Components/Card/Card";
import styles from "@/Components/AnimalHealthRecord/CardsGrid/CardsGrid.module.css";
import {Calendar, Stethoscope} from "lucide-react";
import {formatDate, useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";

function LastConsultCard() {
    const selectedAnimal = useOwnerAnimalStore((state) => state.selectedAnimal);
    return (
        <>
            <Card className={styles.infoCard}>
                <Card.Header>
                    <div className={styles.cardTitle}>
                        <Stethoscope size={20} />
                        <h3>Dernière consultation</h3>
                    </div>
                </Card.Header>
                <Card.Body>
                    {selectedAnimal.derniere_consultation ? (
                        <div>
                            <p className={styles.consultDate}>
                                <Calendar size={16} />
                                {formatDate(selectedAnimal.derniere_consultation.date)}
                            </p>
                            <p className={styles.vetName}>
                                Dr. {selectedAnimal.derniere_consultation.veterinaire.first_name} {selectedAnimal.derniere_consultation.veterinaire.last_name}
                            </p>
                        </div>
                    ) : (
                        <p className={styles.noData}>Aucune consultation enregistrée</p>
                    )}
                </Card.Body>
            </Card>
        </>
    )
}

export default LastConsultCard
