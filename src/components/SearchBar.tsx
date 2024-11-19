import styled from "styled-components"


const Contain = styled.div`
    margin-bottom: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 80%;
    height: 5dvh;
    background-color: aqua;
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
            <input type="text" placeholder="Pesquisar" />
        </Contain>
    )
}

export default SearchBar;