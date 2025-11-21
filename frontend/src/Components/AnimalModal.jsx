import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";
import AnimalHealthRecord from "@/Components/AnimalHealthRecord/AnimalHealthRecord";


function AnimalModal() {

    const selectedAnimal = useOwnerAnimalStore((state) => state.selectedAnimal);
    const closeModal = useOwnerAnimalStore((state) => state.closeModal);

        console.log(selectedAnimal);

    return (
        <div className="modal-container">
            <AnimalHealthRecord/>
        </div>

    )
}
export default AnimalModal;