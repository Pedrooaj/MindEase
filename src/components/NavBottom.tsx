import styled from "styled-components";


const Nav = styled.div`
    background-color: gray;
    display: flex;
    align-items: center;
    width: 100%;
    height: 10dvh;
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
    & ul li {
        text-decoration: none;
    }
`



const NavBottom = () => {
    return (
        <Nav>
            <ul>
                <li><a href="">Agenda</a></li>
                <li><a href="">Dialogo</a></li>
                <li><a href="">Conta</a></li>
            </ul>
        </Nav>
    )
}

export default NavBottom;