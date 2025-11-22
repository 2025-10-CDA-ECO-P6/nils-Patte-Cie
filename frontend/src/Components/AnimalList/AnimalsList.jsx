import styles from './AnimalsList.module.css'
import ListHeader from "@/Components/AnimalList/ListHeader/ListHeader";
import AnimalCardsList from "@/Components/AnimalList/AnimalCardsList";

function AnimalsList() {

    return (
        <div className={styles.listContainer}>
            <ListHeader/>
            <AnimalCardsList/>
        </div>
    );
}

export default AnimalsList
