import Card from "@/Components/Utils/Card/Card";
import VoirLesDetails from "@/Components/Utils/PresentationCard/VoirLesDetails";
import PresentationCardInfos from "@/Components/Utils/PresentationCard/PresentationCardInfos";

function PresentationCard({animal = null}) {

    return (
        animal ? (
                <Card>
                    <Card.Header>
                        <PresentationCardInfos animal={animal}/>
                    </Card.Header>
                    <Card.Footer>
                        <VoirLesDetails animal={animal}/>
                    </Card.Footer>
                </Card>
        ) : (

                <Card>
                    <Card.Header>
                        <PresentationCardInfos/>
                    </Card.Header>
                </Card>
        )
    )
}

export default PresentationCard
