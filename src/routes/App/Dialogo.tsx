import styled from "styled-components"
import SearchBar from "../../components/SearchBar";
import ChatItem from "../../components/ChatItem";



const DiaologoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`;

const ChatsList = styled.ul`
    display: flex;
    flex-direction: column;
    height: 80dvh;
    width: 100%;
    margin: 0;
    padding: 0;
    gap: 1px;
    overflow: scroll;
`;

const Dialogo = () => {
    return (
        <DiaologoContainer>
            <SearchBar placeholder="Conversas" />
            <ChatsList>
                <ChatItem nome="Joaquim" data="10/11/2024" mensagem="Como está o senhor após nossa conversa?" />
                <ChatItem nome="Marcos" data="03/12/2024" mensagem="Opa senhor Osvaldo gostaria de avisar que amanhã em nossa agenda irei atrasar" />
                <ChatItem nome="Miqueias" data="01/01/2025" mensagem="Feliz ano novo!" />
                <ChatItem nome="Joaquim" data="10/11/2024" mensagem="Como está o senhor após nossa conversa?" />
                <ChatItem nome="Marcos" data="03/12/2024" mensagem="Opa senhor Osvaldo gostaria de avisar que amanhã em nossa agenda irei atrasar" />
                <ChatItem nome="Miqueias" data="01/01/2025" mensagem="Feliz ano novo!" />
                <ChatItem nome="Joaquim" data="10/11/2024" mensagem="Como está o senhor após nossa conversa?" />
                <ChatItem nome="Marcos" data="03/12/2024" mensagem="Opa senhor Osvaldo gostaria de avisar que amanhã em nossa agenda irei atrasar" />
                <ChatItem nome="Miqueias" data="01/01/2025" mensagem="Feliz ano novo!" />
                <ChatItem nome="Joaquim" data="10/11/2024" mensagem="Como está o senhor após nossa conversa?" />
                <ChatItem nome="Marcos" data="03/12/2024" mensagem="Opa senhor Osvaldo gostaria de avisar que amanhã em nossa agenda irei atrasar" />
                <ChatItem nome="Miqueias" data="01/01/2025" mensagem="Feliz ano novo!" />
                <ChatItem nome="Joaquim" data="10/11/2024" mensagem="Como está o senhor após nossa conversa?" />
                <ChatItem nome="Marcos" data="03/12/2024" mensagem="Opa senhor Osvaldo gostaria de avisar que amanhã em nossa agenda irei atrasar" />
                <ChatItem nome="Miqueias" data="01/01/2025" mensagem="Feliz ano novo!" />
                
            </ChatsList>
        </DiaologoContainer>
    )
}

export default Dialogo;