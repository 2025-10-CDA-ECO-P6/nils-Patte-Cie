import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";
import AnimalHealthRecord from "@/Components/AnimalHealthRecord/AnimalHealthRecord";


function AnimalModal() {




    return (
        <div className="modal-container">
            <AnimalHealthRecord/>
        </div>

    )
}
export default AnimalModal;