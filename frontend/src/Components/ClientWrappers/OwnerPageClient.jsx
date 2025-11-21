// ici c'est donc le wrapper qui utiilse 'use client' et qui conditionne l'affichage soit d'une liste d'animaux soit d'une modal de l'animal cliquer
// si la modal est ouverte est qu'un animal est selectionné alors on affiche la modal sinon la liste des animaux
// l'etat d'ouverture de la modal et de l'animal selectionné est remonté depuis le store zustand

'use client'
import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";
import AnimalsList from "@/Components/AnimalList/AnimalsList";
import AnimalModal from "@/Components/AnimalModal";


function OwnerPageClient() {
    const isModalOpen = useOwnerAnimalStore((state) => state.isModalOpen); // --> recupere l'etat de isModalOpen
    const selectedAnimal = useOwnerAnimalStore((state) => state.selectedAnimal); // -> recupere l'etat de selectedAnimal

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
