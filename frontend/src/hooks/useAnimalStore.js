import {useOwnerAnimalStore} from "@/app/animals/owner/store/animalStore";
import {useVetAnimalStore} from "@/app/animals/vet/animalStore";

export function useAnimalStore(type) {
    if (type === 'owner') {
        return useOwnerAnimalStore;
    } else if (type ==='vet') {
        return useVetAnimalStore;
    }
}