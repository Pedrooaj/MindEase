import ConsultaCard from "../../components/ConsultaCard";
import SearchBar from "../../components/SearchBar";
import styled from "styled-components";
import { IoMdAddCircle } from "react-icons/io";
import Agendar from "../../components/Modal";
import { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

const Cards = styled.div`
    height: 60dvh;
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
        <>
            <SearchBar placeholder="Pesquisar" />
            <Button style={{ fontSize: "1.6rem", backgroundColor: "GrayText", border: "2px solid black" }} className="mb-auto" size="lg" onClick={() => setModal(true)} >Agendar <IoMdAddCircle /></Button>
            <Agendar title="Agendar" subtitle="" content={
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
            } onHide={() => setModal(false)} show={modal} />
            <Cards>
                <ConsultaCard nome="Dr.João" data="04/07/2024" status="LuCalendarClock" />
                <ConsultaCard nome="Dr.Mário" data="10/11/2024" status="LuCalendarCheck2" />
                <ConsultaCard nome="Dr.Pedro" data="07/11/2024"  status="LuCalendarMinus" />
                <ConsultaCard nome="Dr.Marcos" data="03/12/2024" status="LuCalendarClock"/>
            </Cards>
        </>
    )

}

export default Home;