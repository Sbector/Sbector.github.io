import SocialCard from "../components/SocialCard";
import Wrapper from "../components/Wrapper";

export default function AboutPage({ id }) {
    return (
        <Wrapper id={id}>
            <h1 className="text-2xl text-green-500 font-bold uppercase pb-6">Saúl Becerra Torres</h1>
            <h2 className="textmd py-2">Productor de arte contemporáneo y museográfo. Especializado en medios electrónicos y digitales.</h2>
            <SocialCard/>
        </Wrapper>
    )
}