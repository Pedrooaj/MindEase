import ConsultaCard from "../../components/ConsultaCard";
import SearchBar from "../../components/SearchBar";
import styled from "styled-components";


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
    return (
        <>  
            <SearchBar />
            <Cards>
                <ConsultaCard nome="Dr.João" data="04/07/2024"/>   
                <ConsultaCard nome="Dr.Mário" data="10/11/2024"/>
                <ConsultaCard nome="Dr.Pedro" data="07/11/2024"/>
                <ConsultaCard nome="Dr.Marcos" data="03/12/2024"/>
                <ConsultaCard nome="Dr.Marcos" data="03/12/2024"/>
                <ConsultaCard nome="Dr.Marcos" data="03/12/2024"/>
            </Cards>
        </>
    )

}

export default Home;