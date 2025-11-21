import OwnerPageClient from "@/Components/ClientWrappers/OwnerPageClient";

function OwnerPage() {

    return (
        <main className="page-container">
            {/* ici jappel un wrapper pour garder la page comme composant server  */}
            <OwnerPageClient/>
        </main>
    )
}

export default OwnerPage;
