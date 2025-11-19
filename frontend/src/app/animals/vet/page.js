import animalsData from '../../../data/animalsVet.json';

export default function vetAnimals() {

    const nameVet = animalsData.data.veterinaire.first_name

    return (
        <div>Bonjour {nameVet}</div>
    );
}
