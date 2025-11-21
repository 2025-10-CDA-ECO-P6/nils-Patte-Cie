import styles from './AnimalsList.module.css'
import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";
import HealthRecordPresentationCard
    from "@/Components/AnimalHealthRecord/HealthRecordPresentationCard/HealthRecordPresentationCard";

function AnimalsList() {

    const animals = useOwnerAnimalStore((state) => state.animals);
    const owner = useOwnerAnimalStore((state) => state.owner);

    return (
        <div className={styles.listContainer}>
            <h2 className={styles.pageTitle}>Bonjour {owner.first_name + ' ' + owner.last_name} </h2>
            <div className={styles.cardsGrid}>
                {animals.map((animal) => (
                    <HealthRecordPresentationCard
                        key={animal.id}
                        selectedAnimal={animal}
                        implemType='list'
                    />
                ))}
            </div>
        </div>
    );
}

export default AnimalsList
