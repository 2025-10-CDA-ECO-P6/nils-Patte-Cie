'use client'
import {useAnimalStore} from "@/app/animals/owner/store/animalStore";
import AnimalsList from "@/Components/AnimalsList";
import AnimalModal from "@/Components/AnimalModal";

function OwnerPageClient() {
    const owner = useAnimalStore((state) => state.owner);
    const isModalOpen = useAnimalStore((state) => state.isModalOpen);
    const selectedAnimal = useAnimalStore((state) => state.selectedAnimal);

    return (
        <div className="page-container">
            <h1>Bonjour {owner.first_name}</h1>

            {!isModalOpen && (
                <AnimalsList/>
            )}

            {isModalOpen && selectedAnimal && (
                <AnimalModal/>
            )}

        </div>
    )
}

export default OwnerPageClient
