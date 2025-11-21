import Card from "@/Components/Card/Card";
import styles from './VaccinationCard.module.css'
import {Syringe} from "lucide-react";
import VaccinationEffectuee from "@/Components/AnimalHealthRecord/Vaccination/VaccinationEffectuee";
import VaccinationTodo from "@/Components/AnimalHealthRecord/Vaccination/VaccinationTodo";
import VaccinationCardHeader from "@/Components/AnimalHealthRecord/Vaccination/VaccinationCardHeader";

function VaccinationCard({selectedAnimal}) {
    return (
        <>
            <Card className={styles.vaccinCard}>
                <Card.Header>
                   <VaccinationCardHeader selectedAnimal={selectedAnimal}/>
                </Card.Header>
                <Card.Body>
                    <div className={styles.vaccinationsGrid}>
                       <VaccinationEffectuee selectedAnimal={selectedAnimal}/>
                        <VaccinationTodo selectedAnimal={selectedAnimal}/>
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}

export default VaccinationCard
