import styled from "styled-components";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
    cursor: pointer;
    width: auto;
    height: auto;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    justify-content: center;
    padding: 10px 30px 10px 30px;
    & #content-card{
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 20px;
        & h2{
            margin: 0;
            padding: 0;
        }
    }
`

const ConsultaCard: React.FC<{nome: string, data: string}> = ({nome, data}) => {
    const navigate = useNavigate();
    return (
        <Card onClick={() => navigate("/agendamento")}>
            <h1>{nome}</h1>
            <div id="content-card">
                <MdAccountCircle size={55} />
                <h2>{data}</h2>
            </div>
        </Card>
    )
}

export default ConsultaCard;