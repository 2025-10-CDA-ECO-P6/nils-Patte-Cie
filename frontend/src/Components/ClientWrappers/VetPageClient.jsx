'use client'
import {useVetAnimalStore} from "@/app/animals/vet/animalStore";
import AnimalsList from "@/Components/AnimalsList";
import AnimalModal from "@/Components/AnimalModal";

function VetPageClient() {


    const isModalOpen = useVetAnimalStore((state) => state.isModalOpen);
    const selectedAnimal = useVetAnimalStore((state) => state.selectedAnimal);
    return (

        <div className="page-container">
            {!isModalOpen && (
                <AnimalsList type='vet'/>
            )}

            { isModalOpen && selectedAnimal && (
                <AnimalModal type='vet'/>
            )}
        </div>
    )
}

export default VetPageClient
