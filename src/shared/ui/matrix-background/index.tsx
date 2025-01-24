import { Canvas } from "./styled";
import { useEffect, useRef } from "react";

export const MatrixBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const speed = 0.3;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = canvas;
        const fontSize = 16;
        const columns = Math.floor(width / fontSize);
        const drops = Array(columns)
            .fill(1)
            .map(() => (Math.random() * height) / fontSize);
        const characters = "0123456789ABCDEF";

        const draw = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, width, height);

            ctx.fillStyle = "#262626";
            ctx.font = `${fontSize}px monospace`;

            drops.forEach((y, x) => {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, x * fontSize, y * fontSize);

                if (y * fontSize > height && Math.random() > 0.95) {
                    drops[x] = 0;
                }
                drops[x] += speed;
            });

            requestAnimationFrame(draw);
        };

        draw();
    }, []);

    return <Canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight} />;
};
