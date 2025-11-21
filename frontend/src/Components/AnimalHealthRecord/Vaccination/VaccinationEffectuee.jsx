import styles from "@/Components/AnimalHealthRecord/Vaccination/VaccinationCard.module.css";
import {formatDate} from "@/app/animals/owner/store/animalStore";


function VaccinationEffectuee({selectedAnimal}) {
    return (
            <>
                <div className={styles.vaccinSection}>
                    <h4 className={styles.sectionTitle}>Effectuées</h4>
                    {selectedAnimal.vaccinations.effectuees.length > 0 ? (
                        <ul className={styles.vaccinList}>
                            {selectedAnimal.vaccinations.effectuees.map((vaccin, index) => (
                                <li key={index} className={styles.vaccinItem}>
                                    <span className={styles.vaccinLabel}>{vaccin.label}</span>
                                    <span className={styles.vaccinDate}>
                                                        {formatDate(vaccin.next_due)}
                                                    </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className={styles.noData}>Aucune vaccination effectuée</p>
                    )}
                </div>
            </>
    )
}

export default VaccinationEffectuee
