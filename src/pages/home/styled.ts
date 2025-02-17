import styled from "@emotion/styled";

export const Page = styled.div`
    z-index: 1;
    width: 100%;
    height: 100vh;
    color: #fff;
    background: #000;
`;

export const Content = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 16px;
`;

export const Title = styled.h1`
    margin: 8px;
    text-align: center;
`;

export const Navigation = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    color: #000;
    text-decoration: none;
    background: #fff;
    border-radius: 8px;
`;
