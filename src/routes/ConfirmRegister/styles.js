import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    color: var(--color-ice);

    h1 {
        font-size: 3rem;
        color: var(--color-pink);
        text-shadow: 2px 2px 4px var(--color-default)
    }

    h4{
        font-size: 2rem;
    }

    p {
        font-size: 1.2rem;
    }
`