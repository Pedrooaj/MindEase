import styled from "styled-components"
import { FaSearch } from "react-icons/fa"

const Contain = styled.div`
    margin-bottom: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0;
    width: 80%;
    height: 7dvh;
    background-color: #0B5ED7;
    opacity: 0.8;
    border: 2px solid black;
    padding: 7px;
    border-radius: 10px;


    & input{
        width: 100%;
        height: 100%;
        background-color: transparent;
        border: none;
        outline: 0;

    }

`

const SearchBar = () => {
    return (
        <Contain>
            <FaSearch size={20} color="black" />
            <input type="text" placeholder="Pesquisar" />
        </Contain>
    )
}

export default SearchBar;