import styled from "styled-components";
import { IoSend } from "react-icons/io5";


const ContainerInput = styled.div`
    width: 100%;
    height: 5dvh;
    overflow-y: hidden;
    padding: 0 5px;
    position: absolute;
    bottom: 5px;
    

    & #input-msg{
        height: 100%;
        width: 85%;
        border-radius: 10px;
        border: 2px solid black;
        padding: 5px;
        outline: none;
    }

    & #btn-msg{
        width: 15%;
        height: 100%;
        border: none;
        background-color: transparent;
        transition: 0.3s all;
    }
    & #btn-msg:hover{
        cursor: pointer;
        scale: 1.1;

    }
`;

const SendMessage = () => {
    return (
        <ContainerInput>
            <input id="input-msg" type="text" />
            <button id="btn-msg">
                <IoSend size={30} />
            </button>
        </ContainerInput>
    )
}

export default SendMessage;