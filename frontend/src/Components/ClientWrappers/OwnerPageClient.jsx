'use client'
import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";
import AnimalsList from "@/Components/AnimalsList";
import AnimalModal from "@/Components/AnimalModal";

function OwnerPageClient() {
    const owner = useOwnerAnimalStore((state) => state.owner);
    const isModalOpen = useOwnerAnimalStore((state) => state.isModalOpen);
    const selectedAnimal = useOwnerAnimalStore((state) => state.selectedAnimal);

    return (
        <div className="page-container">
            <h1>Bonjour {owner.first_name}</h1>

            {!isModalOpen && (
                <AnimalsList type='owner'/>
            )}

            {isModalOpen && selectedAnimal && (
                <AnimalModal type='owner'/>
            )}

        </div>
    )
}

export default OwnerPageClient
