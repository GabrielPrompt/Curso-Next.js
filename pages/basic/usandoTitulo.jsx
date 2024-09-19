import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
    return (
        <>
            <Titulo 
                Subtitle="Titulo da Materia" 
                Title="Subtitulo da Materia" 
            />
            <Titulo 
                Subtitle="Titulo da Materia" 
                Title="Subtitulo da Materia" 
                Pequeno={true}
            />
        </>
    )
}