import React, { useEffect } from "react";

export const CursorTrail = () => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            const cursor = document.createElement("div");
            cursor.style.position = "absolute";
            cursor.style.width = "10px";
            cursor.style.height = "10px";
            cursor.style.borderRadius = "50%";
            cursor.style.background = "rgba(0, 0, 0, 0.7)";
            cursor.style.pointerEvents = "none";
            cursor.style.boxShadow = "0 0 20px 10px rgba(0, 0, 0, 0.7)";
            cursor.style.left = `${e.pageX}px`;
            cursor.style.top = `${e.pageY}px`;
            cursor.style.animation = "fade 1s linear forwards";

            document.body.appendChild(cursor);

            setTimeout(() => {
                cursor.remove();
            }, 1000);
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="App">
            <style jsx>{`
                @keyframes fade {
                    0% {
                        transform: scale(1);
                        opacity: 0.7;
                    }
                    100% {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
};
