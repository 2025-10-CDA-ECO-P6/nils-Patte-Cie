// app/animals/owner/store/animalStore.js
import { create } from 'zustand';
import animalsData from '../../../../../src/data/animalsOwner.json';

export const useAnimalStore = create((set) => ({
    // ============ ÉTAT ============
    owner: animalsData.data.proprietaire,
    animals: animalsData.data.animaux,
    selectedAnimal: null,
    isModalOpen: false,

    // ============ ACTIONS ============
    openModal: (animal) => set({
        selectedAnimal: animal,
        isModalOpen: true
    }),

    closeModal: () => set({
        selectedAnimal: null,
        isModalOpen: false
    }),
}));