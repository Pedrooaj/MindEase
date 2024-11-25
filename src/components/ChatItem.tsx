import styled from "styled-components";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavigateFunction, useNavigate } from "react-router-dom";

const ContainerChatItem = styled.li`
    width: 100%;
    height: 15dvh;
    border: 2px solid black;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px;
    gap: 5px;

    p, h1{
        padding: 0;
        margin: 0;
    }
   
   
    #info{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    #mensagem{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

    }

    #user-icon{
        font-size: 2em;
    }
`;

const ChatItem: React.FC<{ nome: string, mensagem: string, data: string }> = ({ mensagem, nome, data }) => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <ContainerChatItem onClick={() => navigate("/chat")}>
            <FaRegCircleUser id="user-icon" />
            <div id="info">
                <h1 style={{ fontSize: "1.5em" }} >{nome}</h1>
                <p id="mensagem">{mensagem}</p>
            </div>
            <p>{data}</p>
        </ContainerChatItem>
    )
}

export default ChatItem;