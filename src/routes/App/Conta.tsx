import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";


const ContaContainer = styled.div`
    width: 100%;
    height: 100dvh;

    main{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        flex-direction: column;
        gap: 15px;

    }

    & h1{
        scale: 0.9;
        text-align: center;
        padding: 0;
        margin: 0;
    }

    & h2{
        scale: 0.8;
        text-align: center;
        padding: 0;
        margin: 0;
    }
`;

const Conta = () => {
    const navigate = useNavigate();

    return (
        <ContaContainer>
            <GoArrowLeft onClick={() => navigate(-1)} size={40} />
            <main>
                <FaRegUserCircle size={150} />
                <div>
                    <h1>
                        Pedro Antônio Mendes Lemos
                    </h1>
                    <h2>
                        CRM/CPF
                    </h2>
                </div>

            </main>
        </ContaContainer>
    )
}


export default Conta;