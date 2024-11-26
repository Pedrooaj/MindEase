import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

const Contain = styled.div`
    margin-bottom: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0;
    width: 90%;
    height: 6dvh;
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

const SearchBar: React.FC<{ placeholder: string }> = ({placeholder}) => {
    return (
        <Contain>
            <FaSearch size={20} color="black" />
            <input type="text" placeholder={placeholder} />
            <IoFilter size={25} color="black"/>
        </Contain>
    )
}

export default SearchBar;