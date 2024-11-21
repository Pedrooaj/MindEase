import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { LuCalendarClock } from "react-icons/lu";
import { LuCalendarCheck2 } from "react-icons/lu";
import { LuCalendarMinus } from "react-icons/lu";

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
    padding: 5px 15px 5px 15px;
    background-color: #82B1FF;
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

const ConsultaCard: React.FC<{ nome: string, data: string, status: string }> = ({ nome, data, status }) => {
    const navigate = useNavigate();
    return (
        <Card onClick={() => navigate("/agendamento")}>
            <h1>{nome}</h1>
            <div id="content-card">
                {status == "LuCalendarClock" ? <LuCalendarClock size={40} /> : status == "LuCalendarCheck2" ? <LuCalendarCheck2 size={40} /> : status == "LuCalendarMinus" ? <LuCalendarMinus size={40} /> : ""}
                <h2>{data}</h2>
            </div>
        </Card>
    )
}

export default ConsultaCard;