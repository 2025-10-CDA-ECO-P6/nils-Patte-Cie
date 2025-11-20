import {useAnimalStore} from "@/app/animals/owner/store/animalStore";

function AnimalModal() {
    const selectedAnimal = useAnimalStore((state)=> state.selectedAnimal);
    const closeModal = useAnimalStore((state) => state.closeModal);

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

export default AnimalModal
