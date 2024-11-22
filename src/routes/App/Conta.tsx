import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ContaContainer = styled.div`
    width: 100%;
    height: 100dvh;
`;

const Conta = () => {
    const navigate = useNavigate();
    return (
        <ContaContainer>   
            <GoArrowLeft onClick={() => navigate(-1)} size={40} />
        </ContaContainer>
    )
}


export default Conta;