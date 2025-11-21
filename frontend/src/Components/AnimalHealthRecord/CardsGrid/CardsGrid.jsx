import styles from './CardsGrid.module.css'
import AllergiesCard from "@/Components/AnimalHealthRecord/CardsGrid/AllergiesCard/AllergiesCard";
import LastConsultCard from "@/Components/AnimalHealthRecord/CardsGrid/LastConsult/LastConsultCard";
function CardsGrid({selectedAnimal}) {



    return (
        <>
            <div className={styles.cardsGrid}>
                <AllergiesCard selectedAnimal={selectedAnimal}/>
               <LastConsultCard selectedAnimal={selectedAnimal}/>
            </div>
        </>
    )
}

export default CardsGrid
