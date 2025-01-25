import { Date, Line, Name, StepContainer, StepSC } from "./styled";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

interface Props {
    name: string;
    date: string;
}

export const Step = ({ name, date }: Props) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const [progress, setProgress] = useState(0);

    // Update the progress value as scrollYProgress changes
    useMotionValueEvent(scrollYProgress, "change", latest => {
        setProgress(Math.round(latest * 100)); // Convert to percentage
    });

    return (
        <StepContainer ref={ref}>
            <StepSC
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: progress / 100, scale: progress / 100 }}
            >
                <Name>{name}</Name>
                <Date>{date}</Date>
            </StepSC>
            <Line>
                <motion.line
                    x1="50%"
                    x2="50%"
                    y1="0"
                    y2="100%"
                    stroke="grey"
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: progress / 100 }}
                />
                <motion.circle
                    cx="50%"
                    cy="50%"
                    r="5"
                    fill={"#fff"}
                    strokeWidth="1"
                    initial={{ scale: 0.1 }}
                    animate={{ scale: progress / 100 }}
                />
            </Line>
        </StepContainer>
    );
};
