import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";
import {useVetAnimalStore} from "@/app/animals/vet/animalStore";

function OwnerAnimalModal({type}) {
    if (type === 'owner') {
        const selectedAnimal = useOwnerAnimalStore((state)=> state.selectedAnimal);
        const closeModal = useOwnerAnimalStore((state) => state.closeModal);
    } else if (type === 'vet') {
        const selectedAnimal = useVetAnimalStore((state)=> state.selectedAnimal);
        const closeModal = useOwnerAnimalStore((state) => state.closeModal);
    }

    return (

        <div className="modal-container">
            <p>{selectedAnimal?.name}</p>
            <div className="selected-animal-list-container">
                {selectedAnimal?.consultations?.map((consult, index) => {
                    return (
                        <div className="consultations-infos" key={index}>
                            <p>{consult.date}</p>
                            <p>{consult.motif}</p>
                            <strong><p>{consult.veterinaire?.first_name}</p></strong>
                            {consult.vaccinations?.map((vac, index) => {
                                return (
                                    <div key={vac.id}>{vac.label}</div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <button onClick={closeModal}>CLOSE</button>
        </div>

    )
}

export default OwnerAnimalModal
