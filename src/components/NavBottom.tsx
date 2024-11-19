import styled from "styled-components";


const Nav = styled.div`
    background-color: aqua;
    display: flex;
    align-items: center;
    width: 100%;
    height: 7dvh;
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
    }
`



const NavBottom = () => {
    return (
        <Nav>
            <ul>
                <li>Agenda</li>
                <li>Dialogo</li>
                <li>Conta</li>
            </ul>
        </Nav>
    )
}

export default NavBottom;