import React from 'react'
import Card from "@/Components/Utils/Card/Card";
import styles from "@/Components/AnimalHealthRecord/ConsultationsHistory/ConsultationHistoryCard.module.css";
import {Calendar} from "lucide-react";

function ConsultationsHistoryHeaderCard() {
    return (
        <Card.Header>
            <div className={styles.cardTitle}>
                <Calendar size={20} />
                <h3>Historique des consultations</h3>
            </div>
        </Card.Header>
    )
}

export default ConsultationsHistoryHeaderCard
