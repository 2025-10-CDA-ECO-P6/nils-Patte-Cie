import { create } from 'zustand';
import animalsData from '../../../data/animalsVet.json'

export const useVetAnimalStore = create((set) => ({
    // etats
    vet: animalsData.data.veterinaire.last_name,
    animals: animalsData.data.animaux,
    selectedAnimal: null,
    isModalOpen: false,

    // actions
    openModal: (animal) => set({
        selectedAnimal: animal,
        isModalOpen: true
    }),

    closeModal: () => set({
        selectedAnimal: null,
        isModalOpen: false
    }),
}));