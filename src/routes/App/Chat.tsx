import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import Message from "../../components/MessageContent";
import { useNavigate } from "react-router-dom";
import SendMessage from "../../components/SendMessage";


const ChatContainer = styled.div`
    width: 100%;
    height: 100dvh;



    & #autor{
        width: 100%;
        height: auto;
        border-bottom: 2px solid black;
        padding-bottom: 5px;
        display: flex;

    }

    & main{
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    & #user-content{
        margin-left: auto;
        margin-right: 5px;
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 1.5em;
    }

`;

const Chat = () => {
    const navigate = useNavigate();
    return (
        <ChatContainer>
            <header id="autor">
            <GoArrowLeft onClick={() => navigate(-1)} size={40} />
            <div id="user-content">João<FaRegUserCircle  size={40} /></div>
            </header>
            <main>
                <Message autor="" position="left" date="13:53" message="Olá joão tenha um bom dia" />
                <Message autor="João" position="right" date="14:00" message="Olá Senhor Pedro estarei presente em nossa terapia hoje as 15:40" />
            </main>
            <footer>
                <SendMessage />
            </footer>
        </ChatContainer>
    )
}

export default Chat;