import Card from "@/Components/Utils/Card/Card";
import styles from './VaccinationCard.module.css'
import {Syringe} from "lucide-react";
import VaccinationEffectuee from "@/Components/AnimalHealthRecord/Vaccination/VaccinationEffectuee";
import VaccinationTodo from "@/Components/AnimalHealthRecord/Vaccination/VaccinationTodo";
import VaccinationCardHeader from "@/Components/AnimalHealthRecord/Vaccination/VaccinationCardHeader";

function VaccinationCard() {

    return (
        <>
            <Card className={styles.vaccinCard}>
                <Card.Header>
                   <VaccinationCardHeader/>
                </Card.Header>
                <Card.Body>
                    <div className={styles.vaccinationsGrid}>
                       <VaccinationEffectuee/>
                        <VaccinationTodo/>
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}

export default VaccinationCard
