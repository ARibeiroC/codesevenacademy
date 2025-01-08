import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    min-height: 100vh;

    color: var(--color-default);

    h1 {
    
        font-size: 3rem;
        font-weight: 700;
    }

    h2 {
        font-size: 2rem;
        font-weight: 500;
    }
`