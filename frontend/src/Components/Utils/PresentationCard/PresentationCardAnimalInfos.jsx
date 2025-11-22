import styles
    from "@/Components/AnimalHealthRecord/HealthRecordPresentationCard/HealthRecordPresentationCard.module.css";
import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";

function PresentationCardAnimalInfos({animal = null}) {
    const storeSelectedAnimal = useOwnerAnimalStore((state) => state.selectedAnimal);
    const selectedAnimal = animal || storeSelectedAnimal;
    return (
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
    )
}

export default PresentationCardAnimalInfos
