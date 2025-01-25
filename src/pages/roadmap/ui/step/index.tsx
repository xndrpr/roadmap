import { Data, Date, Line, Name, Point, StepContainer, StepSC } from "./styled";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

interface Props {
    name: string;
    date: string;
    done?: boolean;
}

export const Step = ({ name, date, done }: Props) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const [progress, setProgress] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", latest => {
        setProgress(Math.round(latest * 100));
    });

    return (
        <StepContainer ref={ref}>
            <StepSC
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Point>
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r={5}
                        fill={"#fff"}
                        strokeWidth="1"
                        style={{ zIndex: 2 }}
                        initial={{ scale: 0.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </Point>
                <Data>
                    <Name>
                        {name} {done ? "✅" : ""}
                    </Name>
                    <Date>{date}</Date>
                </Data>
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
            </Line>
        </StepContainer>
    );
};
