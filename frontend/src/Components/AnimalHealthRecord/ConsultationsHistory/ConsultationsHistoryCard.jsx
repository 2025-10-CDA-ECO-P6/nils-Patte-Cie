import React from 'react'
import Card from "@/Components/Card/Card";
import styles from './ConsultationHistoryCard.module.css'
import {Calendar} from "lucide-react";
import {formatDate} from "@/app/animals/owner/store/animalStore";
import ConsultationsHistoryHeaderCard
    from "@/Components/AnimalHealthRecord/ConsultationsHistory/ConsultationsHistoryHeaderCard";
import ConsultationsHistoryBodyCard
    from "@/Components/AnimalHealthRecord/ConsultationsHistory/ConsultationsHistoryBodyCard";

function ConsultationsHistoryCard({selectedAnimal}) {
    return (
        <>
            <Card className={styles.consultationsCard}>
               <ConsultationsHistoryHeaderCard/>
                <ConsultationsHistoryBodyCard selectedAnimal={selectedAnimal}/>
            </Card>
        </>
    )
}

export default ConsultationsHistoryCard
