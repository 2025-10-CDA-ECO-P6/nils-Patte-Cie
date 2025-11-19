"use client"
import animalsData from '../../../../src/data/animalsOwner.json'
import {useState} from "react";
function OwnerPage() {

    const nameUser = animalsData.data.proprietaire.first_name;
    const animals = animalsData.data.animaux;
    console.log(animals);

    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (animal) => {
        setSelectedAnimal(animal);
        setIsModalOpen(true);
        console.log(isModalOpen);
        console.log(selectedAnimal)
    }
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedAnimal(null);
        console.log(isModalOpen);
    }

    return (
        <div>
            <h1>Bonjour {nameUser}</h1>

            {!isModalOpen && (
                <div className="animals-list-container">
                    {animals.map((animal) => {
                        return (
                            <div className="animal-tease-card" key={animal.id}>
                                <p>Nom: {animal.name}</p>
                                <p>Âge: {animal.age} ans</p>
                                <p>Race: {animal.breed.label}</p>
                                <p>Espèce: {animal.breed.species?.label}</p>
                                <p>Vaccination {animal.is_up_to_date ? 'A jour' : 'non a jour'}</p>
                                <p>Dernière visite : {animal.derniere_consultation.date} - <span>{animal.derniere_consultation.veterinaire?.first_name}</span></p>
                                <button onClick={() => openModal(animal)}>Voir les détails</button>
                            </div>


                        );
                    })}
                </div>
            )}

                {isModalOpen && selectedAnimal && (
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
                )}

        </div>
    )
}

export default OwnerPage;
