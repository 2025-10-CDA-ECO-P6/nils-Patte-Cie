import React from 'react'
import styles from '@/Components/AnimalHealthRecord/CardsGrid/CardsGrid.module.css'
import Card from "@/Components/Utils/Card/Card";
import {AlertCircle} from "lucide-react";
import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";

function AllergiesCard() {
    const selectedAnimal = useOwnerAnimalStore((state) => state.selectedAnimal)
    return (
        <>
            <Card className={styles.infoCard}>
                <Card.Header>
                    <div className={styles.cardTitle}>
                        <AlertCircle size={20} />
                        <h3>Allergies</h3>
                    </div>
                </Card.Header>
                <Card.Body>
                    {selectedAnimal.allergies ? (
                        <p className={styles.allergiesText}>{selectedAnimal.allergies}</p>
                    ) : (
                        <p className={styles.noData}>Aucune allergie connue</p>
                    )}
                </Card.Body>
            </Card>
        </>
    )
}

export default AllergiesCard
