import { Outlet } from "react-router-dom";
import NavBottom from "../../components/NavBottom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    
`;

const Content  = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    
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
