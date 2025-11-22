import styles from "@/Components/AnimalList/AnimalsList.module.css";
import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";
import PresentationCard from "@/Components/Utils/PresentationCard/PresentationCard";

function AnimalCardsList() {

    const animals = useOwnerAnimalStore((state) => state.animals);

    return (
        <div className={styles.cardsGrid}>
            {animals.map((animal) => (
                <PresentationCard
                    key={animal.id}
                    animal={animal}
                />
            ))}
        </div>
    )
}

export default AnimalCardsList
