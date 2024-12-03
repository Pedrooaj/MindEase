import ConsultaCard from "../../components/ConsultaCard";
import SearchBar from "../../components/SearchBar";
import styled from "styled-components";
import { IoMdAddCircle } from "react-icons/io";
import Agendar from "../../components/Modal";
import { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    
`


const Cards = styled.div`
    height: 60dvh;
    width: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: auto;
    overflow-y: scroll;

`

const Home = () => {
    const [modal, setModal] = useState(false);

    return (
        <Container>
            <SearchBar placeholder="Pesquisar" />
            <Button style={{ fontSize: "1.6rem", backgroundColor: "GrayText", border: "2px solid black" }} className="mb-auto" size="lg" onClick={() => setModal(true)} >Agendar <IoMdAddCircle /></Button>
            <Agendar title="Agendar" subtitle="" content={
                <Form>
                    <Row className="mb-3">

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Paciente/Terapeuta</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Escolha...</option>
                                <option>Marcelo</option>
                                <option>Miqueias</option>
                                <option>Matias</option>
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
            } onHide={() => setModal(false)} show={modal} />
            <Cards>
                <ConsultaCard hora="10:30" nome="João" data="04/07/2024" status="LuCalendarClock" />
                <ConsultaCard hora="13:25" nome="Mário" data="10/11/2024" status="LuCalendarCheck2" />
                <ConsultaCard hora="16:00" nome="Pedro" data="07/11/2024"  status="LuCalendarMinus" />
                <ConsultaCard hora="07:00" nome="Marcos" data="03/12/2024" status="LuCalendarClock"/>
            </Cards>
        </Container>
    )

}

export default Home;