import { motion } from "motion/react";
import styled from "@emotion/styled";

export const StepContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

export const StepSC = styled(motion.div)`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
`;

export const Name = styled.h2`
    max-width: 100px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
`;

export const Date = styled.h3`
    font-size: 12px;
    color: grey;
    text-align: center;
`;

export const Line = styled(motion.svg)`
    position: relative;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    margin: 8px;
    overflow: visible;
`;
