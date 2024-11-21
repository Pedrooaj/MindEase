import { Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";



const Formulario = styled.div`
    width: 100%;
    height: auto;
    padding: 25px;
    margin-bottom: auto;

`

const FormStatus = () => {
    return (
        <Formulario>
            <Form>
                <Row className="mb-3">
            
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Paciente/Terapeuta</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Escolha...</option>
                            <option>Dr.Marcelo</option>
                            <option>Dr.Miqueias</option>
                            <option>Dr.Matias</option>
                            <option>Antônio</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Data</Form.Label>
                        <Form.Control type="date" placeholder="Horario" />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Horário</Form.Label>
                    <Form.Control type="time" placeholder="Digite o hórario" />
                </Form.Group>
            </Form>
        </Formulario>
    )
}

export default FormStatus;