import React from 'react'
import Card from "@/Components/Card/Card";
import Image from "next/image";
import styles from './HealthRecordPresentationCard.module.css';
import {ArrowBigRight} from "lucide-react";
import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";

function HealthRecordPresentationCard({selectedAnimal, implemType = 'list'}) {

    const openModal = useOwnerAnimalStore((state) => state.openModal)


    return (
        <div className={styles.headerCard}>
            <Card>
                <Card.Header>
                    <div className={styles.animalHeader}>
                        <Image
                            className={styles.animalImage}
                            src={selectedAnimal.image_path || '/images/chienfigma.png'}
                            alt={selectedAnimal.name}
                            width={120}
                            height={120}
                        />
                        <div className={styles.animalInfo}>
                            <h1 className={styles.animalName}>{selectedAnimal.name}</h1>
                            <div className={styles.infoGrid}>
                                <div className={styles.infoItem}>
                                    <span className={styles.label}>Race</span>
                                    <span className={styles.value}>{selectedAnimal.breed.label}</span>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.label}>Âge</span>
                                    <span className={styles.value}>{selectedAnimal.age} ans</span>
                                </div>
                                <div className={styles.infoItem}>
                                    <span className={styles.label}>Espèce</span>
                                    <span className={styles.value}>{selectedAnimal.breed.species.label}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Header>
                {implemType === 'list' && (
                    <Card.Footer>
                        <div className={styles.footerCard}>
                            <button onClick={() => openModal(selectedAnimal)}>Voir les details</button>
                        </div>

                    </Card.Footer>
                )}
            </Card>
        </div>
    )
}
export default HealthRecordPresentationCard
