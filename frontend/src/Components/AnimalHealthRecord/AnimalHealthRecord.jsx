import { useOwnerAnimalStore } from "@/app/animals/owner/store/animalStore";
import Card from "@/Components/Card/Card";

import { X, Calendar, Syringe, AlertCircle, Stethoscope } from "lucide-react";
import styles from './AnimalHealthRecord.module.css';
import HealthRecordPresentationCard
    from "@/Components/AnimalHealthRecord/HealthRecordPresentationCard/HealthRecordPresentationCard";
import CardsGrid from "@/Components/AnimalHealthRecord/CardsGrid/CardsGrid";
import VaccinationCard from "@/Components/AnimalHealthRecord/Vaccination/VaccinationCard";
import ConsultationsHistoryCard from "@/Components/AnimalHealthRecord/ConsultationsHistory/ConsultationsHistoryCard";

function AnimalHealthRecord() {
    const selectedAnimal = useOwnerAnimalStore((state) => state.selectedAnimal);
    const closeModal = useOwnerAnimalStore((state) => state.closeModal);



    return (
        <div className={styles.overlay}>
            <div className={styles.modalContainer}>
                <button className={styles.closeButton} onClick={closeModal}>
                    <X size={24} />
                </button>

                <div className={styles.content}>
                    <HealthRecordPresentationCard selectedAnimal={selectedAnimal}/>
                    <CardsGrid selectedAnimal={selectedAnimal}/>
                    <VaccinationCard selectedAnimal={selectedAnimal}/>
                    <ConsultationsHistoryCard selectedAnimal={selectedAnimal} />
                </div>
            </div>
        </div>
    );
}

export default AnimalHealthRecord;
