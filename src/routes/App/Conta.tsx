import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { FaTrash } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

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

    & #buttons{
        display: flex;
        gap: 125px;
        height: auto;
        margin-top: 5px;
    }
`;

const Conta = () => {
    const navigate = useNavigate();

    const deletarConta = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            Deletar Conta
        </Tooltip>
    );

    // retorna JSX.element
    const alterarCargo = (props: any) => (
        <Tooltip id="button-tooltip" {...props}>
            Alterar Cargo
        </Tooltip>
    )



    return (
        <ContaContainer>
            <GoArrowLeft onClick={() => navigate(-1)} size={40} />
            <main>
                <FaRegUserCircle size={150} />
                <FloatingLabel controlId="nome" label="Nome">
                    <Form.Control type="text" placeholder="Nome" />
                </FloatingLabel>
                <h1>
                    Pedro Antônio Mendes Lemos
                </h1>
                <h2>
                    CRM/CPF
                </h2>
 

                <div id="buttons" >
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={deletarConta}
                    >
                        <Button onClick={() => navigate("/")} size="lg" variant="danger"><FaTrash /></Button>
                    </OverlayTrigger>

                    <OverlayTrigger
                        
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={alterarCargo}

                    >
                        <Button onClick={() => navigate(-1)} size="lg" variant="warning"><TfiReload /></Button>
                    </OverlayTrigger>
                </div>
                <Button onClick={() => navigate(-1)} style={{
                    marginTop: "5px"
                }} size="lg" variant="success">
                    Salvar
                </Button>

            </main>
        </ContaContainer>
    )
}


export default Conta;