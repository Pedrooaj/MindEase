import styled from "styled-components";
import { TfiAgenda } from "react-icons/tfi";
import { IoIosChatbubbles } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Nav = styled.div`
    background-color: #BFC5D2;
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 5px;
    border: 2px solid black;
    position: absolute;
    bottom: 0;
    & ul {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        margin: 0;
        padding: 0;
        height: auto;

    }
    & ul li{

        font-size: 1.3rem;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    & ul li a{
        color: black;
        text-decoration: none;

    }
`



const NavBottom = () => {
    const navigate = useNavigate();
    return (
        <Nav>
            <ul>
                <li><TfiAgenda size={21} /> <a href="">Agenda</a></li>
                <li><IoIosChatbubbles size={21} /><a href="">Dialogo</a></li>
                <li onClick={() => navigate("/conta")}><MdAccountCircle size={21} /><a href="">Conta</a></li>
            </ul>
        </Nav>
    )
}

export default NavBottom;