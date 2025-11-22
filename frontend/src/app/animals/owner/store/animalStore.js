import {create} from 'zustand';
import animalsData from '../../../../../src/data/animalsOwner.json';

/**
 * Formate une date au format français (jj/mm/aaaa) mais je pense n'as rien a faire la mieux dans un fichiers qui regroupe des function utilitaire destiné au scope global de l'app
 */
export const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('fr-FR');
};

// permet de partager l'etat a travers tout les composant qui l'appel , evite de passer a chaque fois en props
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