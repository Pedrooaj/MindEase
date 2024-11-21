import styled from "styled-components";
import { TfiAgenda } from "react-icons/tfi";
import { IoIosChatbubbles } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";


const Nav = styled.div`
    background-color: gray;
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 10px 5px 10px 5px;
    border-radius: 30px 30px 0 0;
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
    return (
        <Nav>
            <ul>
                <li><TfiAgenda size={30} /> <a href="">Agenda</a></li>
                <li><IoIosChatbubbles size={30} /><a href="">Dialogo</a></li>
                <li><MdAccountCircle size={30} /><a href="">Conta</a></li>
            </ul>
        </Nav>
    )
}

export default NavBottom;