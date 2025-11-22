import styles from "./ListHeader.module.css";
import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";

function ListHeader() {
    const owner = useOwnerAnimalStore((state) => state.owner);
    return (

        <div className={styles.greetContainer}>
            <h2>Bonjour {owner.first_name + ' ' + owner.last_name} </h2>
            <span>Retrouver tout les infos sur vos animaux</span>
        </div>
    )
}

export default ListHeader
