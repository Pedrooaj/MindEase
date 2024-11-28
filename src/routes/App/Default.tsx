import { Outlet } from "react-router-dom";
import NavBottom from "../../components/NavBottom";
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #FFF9E6;

`;

const Content  = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const Default = () => {
    return (
        <Container>
            <Content>
                <Outlet />
            </Content>
            <NavBottom />
        </Container>
    )
}

export default Default;
