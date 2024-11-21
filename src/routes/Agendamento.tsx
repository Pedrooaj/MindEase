import StatusAgendamento from "../components/FormStatus";
import styled from "styled-components";
import { TbCalendarClock } from "react-icons/tb";
import { IoIosChatbubbles } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import { GoX } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    align-items: center;
    flex-direction: column;
    background-color: #F2B3A9;
    & #buttons{
        width: 100%;
        height: 20dvh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    & #buttons ul{
        display: flex;
        align-items: end;
        padding: 0;
        gap: 25px;
    }

    & #buttons ul li{
        margin: 0;
        padding: 0;
        list-style: none;
        border: 3px solid black;
        border-radius: 100%;
        padding: 5px;
    }
    
`;


const Agendamento = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <GoArrowLeft onClick={() => navigate(-1)} size={40} style={{ marginRight: "auto", cursor: "pointer" }} />
            <TbCalendarClock size={75} style={{ marginTop: "auto"  }} />
            <StatusAgendamento />
            <div id="buttons">
                <ul>
                    <li style={{ backgroundColor: "red" }}><GoX size={45} /></li>
                    <li style={{ marginBottom: "75px", backgroundColor: "#FFF9E6" }} ><IoIosChatbubbles  size={45} /></li>
                    <li style={{ backgroundColor: "#00800097" }}><GoCheck size={45} /></li>  
                </ul>
            </div>
        </Container>
        )
}

export default Agendamento;