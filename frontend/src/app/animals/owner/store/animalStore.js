import { create } from 'zustand';
import animalsData from '../../../../../src/data/animalsOwner.json';

export const useOwnerAnimalStore = create((set) => ({

    // etats
    owner: animalsData.data.proprietaire,
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