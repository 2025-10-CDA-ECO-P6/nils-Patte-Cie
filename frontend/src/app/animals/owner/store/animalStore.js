
import { create } from 'zustand';
import animalsData from '../../../../../src/data/animalsOwner.json';

export const useAnimalStore = create((set) => ({

    owner: animalsData.data.proprietaire,
    animals: animalsData.data.animaux,
    selectedAnimal: null,
    isModalOpen: false,


    openModal: (animal) => set({
        selectedAnimal: animal,
        isModalOpen: true
    }),

    closeModal: () => set({
        selectedAnimal: null,
        isModalOpen: false
    }),
}));