import { Outlet } from "react-router-dom";
import NavBottom from "../../components/NavBottom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    
`;

const Default= () => {
    return (
        <Container>
            <Outlet />
            <NavBottom />
        </Container>
    )
}

export default Default;
