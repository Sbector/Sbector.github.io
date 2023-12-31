import ExperienceItem from "./ExperienceItem";

const experiences = [
    {
        date: "2022-223",
        title: "Coordinador de exposiciones en Museo de Arte de Zapopan (MAZ)",
        description: "Director del departamento de museografía y coordinador exposiciones.",
    },
    {
        date: "2021",
        title: "Preproducción: Galería Curro en Armory Show 2021, Nueva York.",
        description: "Preproducción y asistencia en diseño del both del artista Andrea Galvani para Armory Show."
    },
    {
        date: "2020",
        title: "Preproducción: Galería Curro en Armory Show 2020, Nueva York.",
        description: "Preproducción y asistencia en diseño del both del artista Alejandro Almanza Pereda para Armory Show."
    },
    {
        date: "2019",
        title: "Preproducción: Simulacres, Alinka Echeverría, MOMENTA, Biennale de l'image 2019, Montreal",
        description: "Preproducción y asistencia en diseño museográfico de la exposición Silumacres de la artista Alinka Echeverría durante la Biennale de l'image en Montreal."
    }
]

export default function Experience() {
    return (
        <div className="pt-14">
            <h2 className="text-lg md:text-2xl text-gray-50 font-semibold uppercase pb-6">Experiencia como productor</h2>
            <ol className="relative border-s ml-2 border-gray-700">
                {experiences.map(({date, title, description})=>(
                    <ExperienceItem date={date} title={title} description={description}/>
                ))}
            </ol>
        </div>
    )
}