import styled from "styled-components";
import { FaRegCircleUser } from "react-icons/fa6";

const ContainerChatItem = styled.li`
    width: 100%;
    height: 15dvh;
    border: 2px solid black;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    gap: 10px;

   
   
    #info{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    #mensagem{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0;
        padding: 0;
    }

    #user-icon{
        font-size: 2rem;
    }
`;

const ChatItem: React.FC<{ nome: string, mensagem: string, data: string }> = ({ mensagem, nome, data }) => {
    return (
        <ContainerChatItem>
            <FaRegCircleUser id="user-icon" />
            <div id="info">
                <h1 style={{ margin: 0, padding: 0 }} >{nome}</h1>
                <p id="mensagem">{mensagem}</p>
            </div>
            <p>{data}</p>
        </ContainerChatItem>
    )
}

export default ChatItem;