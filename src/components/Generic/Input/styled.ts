import styled from "styled-components";

interface InputProps {
    width?: number;
    height?: number;
}

const Container = styled.input<InputProps>`
    height: ${({height}) => (height ? `${height}px` : "40px")};
    width: ${({width}) => (width ? `${width}px`: "200px")};

    padding: 5px 10px;
    border: 1px solid var(--textColorWarning);
    background: none;
    border-radius: 5px;
    color: var(--textColorWarning);
    font-size: 14px;
    outline: none;
    ::placeholder {
        color: var(--textColorWarning);
    }
`;

export {Container}