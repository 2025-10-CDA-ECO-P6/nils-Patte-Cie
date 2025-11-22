import styles
    from "./PresentationCard.module.css"
import Image from "next/image";
import PresentationCardAnimalInfos from "@/Components/Utils/PresentationCard/PresentationCardAnimalInfos";
import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";

function PresentationCardInfos({animal = null}) {
    const storeSelectedAnimal = useOwnerAnimalStore((state) => state.selectedAnimal);
    const selectedAnimal = animal || storeSelectedAnimal;

    return (
        <div className={styles.animalHeader}>
            <Image
                className={styles.animalImage}
                src={selectedAnimal.image_path || '/images/chienfigma.png'}
                alt={selectedAnimal.name}
                width={120}
                height={120}
            />
            {animal ? (
                <PresentationCardAnimalInfos animal={animal}/>
            ) : (
                <PresentationCardAnimalInfos/>
            )}
        </div>
    )
}

export default PresentationCardInfos
