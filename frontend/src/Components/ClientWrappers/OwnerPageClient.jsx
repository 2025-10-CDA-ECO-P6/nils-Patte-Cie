'use client'
import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";
import AnimalsList from "@/Components/AnimalList/AnimalsList";
import AnimalModal from "@/Components/AnimalModal";


function OwnerPageClient() {
    const owner = useOwnerAnimalStore((state) => state.owner);
    const isModalOpen = useOwnerAnimalStore((state) => state.isModalOpen);
    const selectedAnimal = useOwnerAnimalStore((state) => state.selectedAnimal);

    return (
        <>
            {!isModalOpen && (

                <AnimalsList/>
            )}

            {isModalOpen && selectedAnimal && (
                <AnimalModal />
            )}

        </>
    )
}

export default OwnerPageClient
