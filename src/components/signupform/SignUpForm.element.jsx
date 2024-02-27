import styled from "styled-components";
import palette from "../../styles/palette";

export const SignUpFormBlock = styled.form`
    height:100%;
    width:27rem;
    
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    gap: 1.2rem;
`

export const InputGroup = styled.div`
    display:flex;
    flex-direction: column;
    width:100%;
    gap:0.3rem;
    label{

    }

    input{
        padding: 0.8rem 0.8rem;
        line-height: 1rem;
        height: 3 rem;
        
        border: solid 1px grey;
        border-radius: 2rem;
        &:focus{
            outline:none;
            border: solid 1px ${palette.fontBlue};
        }
    }

    span{
        color:red;
    }
`

export const Button = styled.button`
    flex-direction: column;
    // min-width:10px;
    width:100%;

    background-color:${palette.fontBlue};
    color:white;

    padding: 0.8rem 0.8rem;
    line-height: 1rem;
    height: 3 rem;

    border-radius: 2rem;     
    border:none;

    &:hover{
        background-color:${palette.fontGray};
    }
    `