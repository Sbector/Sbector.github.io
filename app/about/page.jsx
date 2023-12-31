import Experience from "../components/Experience";
import SocialCard from "../components/SocialCard";
import Wrapper from "../components/Wrapper";

export default function AboutPage() {
    return (
        <main id="about">
            <Wrapper className="pt-20 md:pt-40">
                <h1 className="text-2xl md:text-4xl text-green-500 font-bold uppercase pb-8">Saúl Becerra Torres</h1>
                <p className="text-md md:text-xl text-wrap">Artista contemporáneo y productor de arte.<span className="text-green-200"> Especializado en medios electrónicos y virtuales.</span> Entusiasta y promotor de la cultura libre.</p>
                <Experience/>
                <SocialCard />
            </Wrapper>
        </main>
    )
}