import { motion } from "motion/react";
import styled from "@emotion/styled";

export const StepContainer = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
`;

export const StepSC = styled(motion.div)`
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    justify-content: center;
`;

export const Data = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    background: rgb(0 0 0 / 100%);
`;

export const Point = styled(motion.svg)`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 10px;
    max-height: 10px;
`;

export const Name = styled.h2`
    font-size: 16px;
    color: #fff;
    text-align: center;
`;

export const Date = styled.h3`
    font-size: 12px;
    color: grey;
    text-align: center;
`;

export const Line = styled(motion.svg)`
    position: absolute;
    top: 50%;
    width: 2px;
    height: 100%;
    transform: translateY(-50%);
`;
