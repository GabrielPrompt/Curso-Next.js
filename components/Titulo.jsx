export default function Titulo({ Title, Subtitle, Pequeno }) {


    return !Pequeno ? (
        <>
            <h1>{Title}</h1>
            <h2>{Subtitle}</h2>
        </>
    ) : (

        <>
            <p>{Title}</p>
            <p>{Subtitle}</p>
        </>
    )





}