import React, { useRef, useEffect } from "react";
import "./main-block.css";

function CircleMask() {
    const circleRef = useRef(null);

    useEffect(() => {
        // Обработчик для скролла
        const scrollHandler = () => {
            const scrollX = window.scrollY;
            if (circleRef.current) {
                circleRef.current.style.transform = `translate(${scrollX}px, 0%)`;
            }
        };

        // Добавляем обработчик скролла
        window.addEventListener("scroll", scrollHandler);

        return () => {
            // Удаляем обработчик скролла при размонтировании
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    useEffect(() => {
        // Обработчик для перемещения мыши
        const mouseMoveHandler = (e) => {
            const { clientX, clientY } = e;
            if (circleRef.current) {
                circleRef.current.style.transform = `translate(${clientX - 100}px, ${clientY - 100}px)`;
            }
        };

        // Добавляем обработчик перемещения мыши
        document.addEventListener("mousemove", mouseMoveHandler);

        return () => {
            // Удаляем обработчик перемещения мыши при размонтировании
            document.removeEventListener("mousemove", mouseMoveHandler);
        };
    }, []);

    return <div className="Circle-mask" ref={circleRef}></div>;
}

export default CircleMask;
