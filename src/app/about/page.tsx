import { Metadata } from "next"
import TextWrapper from "../_components/TextWrapper"
import Link from "next/link"

export const metadata: Metadata = {
    title: {
        absolute: "acerca de sbector"
    },
    description: "información sobre sbector"
}

export default function About() {
    return (
        <div>
            <TextWrapper className="felx ">
                <div className="">
                    <h1 className="text-center text-lg font-semibold text-emerald-100 pb-6 md:text-3xl md:pb-10">acerca de sbector</h1>
                    <p className="pb-4 text-pretty">artista multidisciplinario, productor de arte y programador originario de león, guanajuato. su trabajo artístico reflexiona acerca de la individualidad y la sociedad, el antropocentrismo en la cultura occidental y la idea de autoría en el arte contemporáneo utilizando técnicas como video, fotogrametría, realidad virtual y net art.</p>
                    <Link href="./cv_saul_becerra_torres_2024.pdf" target="blank" className="text-emerald-100 font-light">descargar cv</Link>
                </div>
            </TextWrapper>
        </div>
    )
}