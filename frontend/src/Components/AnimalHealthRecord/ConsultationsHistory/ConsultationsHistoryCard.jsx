import React from 'react'
import Card from "@/Components/Card/Card";
import styles from './ConsultationHistoryCard.module.css'
import {Calendar} from "lucide-react";
import {formatDate} from "@/app/animals/owner/store/animalStore";

function ConsultationsHistoryCard({selectedAnimal}) {
    return (
        <>
            <Card className={styles.consultationsCard}>
                <Card.Header>
                    <div className={styles.cardTitle}>
                        <Calendar size={20} />
                        <h3>Historique des consultations</h3>
                    </div>
                </Card.Header>
                <Card.Body>
                    {selectedAnimal.consultations.length > 0 ? (
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
                    ) : (
                        <p className={styles.noData}>Aucune consultation enregistrée</p>
                    )}
                </Card.Body>
            </Card>
        </>
    )
}

export default ConsultationsHistoryCard
