import styled from "styled-components"
import { FaRegUserCircle } from "react-icons/fa";


const MessageContent = styled.div<{ position: string }>`
    height: auto;
    width: 70%;
    display: flex;
    flex-direction: column;
    background-color: gray;
    gap: 4px;
    border: 2px solid black;

    border-radius: 0 20px 0 20px;
    padding: 10px;
    ${(props) => props.position == "left" ? "margin-left: auto;" : props.position == "right" ? "margin-right: auto;" : ""};
    
    & main {
        padding: 0;
    }

    & #date{
        margin-left: auto;
    }

`;

const Message: React.FC<{ autor: string, message: string, date: string, position: string }> = ({ autor, message, date, position }) => {

    return (
        <MessageContent position={position}>
            { autor? <header><FaRegUserCircle size={25} /> {autor} </header>: "" }
            <main>{message}</main>
            <footer id="date">{date}</footer>
        </MessageContent>

    )
}

export default Message;