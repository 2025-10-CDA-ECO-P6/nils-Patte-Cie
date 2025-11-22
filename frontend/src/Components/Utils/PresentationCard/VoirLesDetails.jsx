import Card from "@/Components/Utils/Card/Card";
import styles
    from "@/Components/AnimalHealthRecord/HealthRecordPresentationCard/HealthRecordPresentationCard.module.css";
import React from "react";
import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";

function VoirLesDetails({animal}) {
    const openModal = useOwnerAnimalStore((state) => state.openModal);
    return (

            <div className={styles.footerCard}>
                <button onClick={() => openModal(animal)}>Voir les details</button>
            </div>


    )
}

export default VoirLesDetails
