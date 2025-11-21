    import { create } from 'zustand';
    import animalsData from '../../../../../src/data/animalsOwner.json';


export const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('fr-FR');
};

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