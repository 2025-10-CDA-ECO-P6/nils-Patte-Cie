import styles from "@/Components/AnimalHealthRecord/Vaccination/VaccinationCard.module.css";
import {formatDate, useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";

function VaccinationTodo() {
    const selectedAnimal = useOwnerAnimalStore((state)=> state.selectedAnimal);
    return (
        <>
            <div className={styles.vaccinSection}>
                <h4 className={styles.sectionTitle}>À venir</h4>
                {selectedAnimal.vaccinations.a_venir.length > 0 ? (
                    <ul className={styles.vaccinList}>
                        {selectedAnimal.vaccinations.a_venir.map((vaccin, index) => (
                            <li key={index} className={styles.vaccinItemUpcoming}>
                                <span className={styles.vaccinLabel}>{vaccin.label}</span>
                                <span className={styles.vaccinDateUpcoming}>
                                                        {formatDate(vaccin.date_rappel)}
                                                    </span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={styles.noData}>Aucune vaccination prévue</p>
                )}
            </div>
        </>
    )
}

export default VaccinationTodo
