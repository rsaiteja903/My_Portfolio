import { useEffect, useState } from "react";

export const LightModeBackground = () => {
    const [patterns, setPatterns] = useState([]);

    useEffect(() => {
        generatePatterns();

        const handleResize = () => {
            generatePatterns();
        };
                        console.log(
            "light"
        );

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const generatePatterns = () => {
        const count = Math.floor((window.innerWidth * window.innerHeight) / 12000);
        const newPatterns = [];

        for (let i = 0; i < count; i++) {
            newPatterns.push({
                id: i,
                size: Math.random() * 4 + 2,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 6 + 4,
            });
        }
                console.log(
            "light"
        );

        setPatterns(newPatterns);
    };

    return (

        <div className="fixed inset-0 overflow-hidden pointer-events-none z-10 dark:hidden">
           {patterns.map((pattern) => (
                <div
                    key={pattern.id}
                    className="absolute dark:hidden"
                    style={{
                    left: `${pattern.x}%`,
                    top: `${pattern.y}%`,
                    width: `${pattern.size}px`,
                    height: `${pattern.size}px`,
                    opacity: pattern.opacity,
                    animation: `float ${pattern.animationDuration}s ease-in-out infinite`,
                    }}
                >
                    <svg width="12" height="12" viewBox="0 0 100 100" fill="none">
                    <polygon points="50,0 100,100 0,100" fill="#d1d5db" opacity="0.3" />
                    </svg>
                </div>
                ))}
        </div>
    );
};