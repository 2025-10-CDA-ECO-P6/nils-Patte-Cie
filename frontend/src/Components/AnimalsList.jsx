import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";

function OwnerAnimalsList() {
    const animals = useOwnerAnimalStore((state) => state.animals);
    const openModal = useOwnerAnimalStore((state) => state.openModal);

    return (


        <div>


            <div className={`animals-list-container`}>

                {animals.map((animal) => {
                    return (
                        <div className="animal-tease-card" key={animal.id}>
                            <p><strong>Nom</strong>: {animal.name}</p>
                            <p><strong>Âge</strong>: {animal.age} ans</p>
                            <p><strong>Race</strong>: {animal.breed.label}</p>
                            <p><strong>Espèce</strong>: {animal.breed.species?.label}</p>
                            <strong><p
                                className={`up-to-date  ${animal.is_up_to_date ? 'update' : 'noupdate'} `}>Vaccination {animal.is_up_to_date ? 'A jour' : 'non a jour'}</p>
                            </strong>
                            <p><strong>Dernière
                                visite</strong> : {animal.derniere_consultation.date} - <span>{animal.derniere_consultation.veterinaire?.first_name}</span>
                            </p>
                            <button onClick={() => openModal(animal)}>Voir les détails</button>
                        </div>


                    );
                })}

            </div>

        </div>



)
}

export default OwnerAnimalsList
