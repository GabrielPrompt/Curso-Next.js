
const NumeroDisplay = ({numero = 4}) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70px",
            width: "70px",
            borderRadius: "35px",
            color: "#FFF",
            fontSize: "2rem",
            margin: "20px",
            backgroundColor: "black",
        }}>
            {numero}
        </div>
    )
}

export default NumeroDisplay