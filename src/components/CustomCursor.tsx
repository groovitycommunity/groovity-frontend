import { useEffect, useState } from "react";
import mic from "@/cursor/mic.png";
import guitar from "@/cursor/guitar.png";
import sax from "@/cursor/sax.png";

const cursors = [mic, guitar, sax];

export default function CursorChanger() {
    const [index, setIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(false);

    // 1️⃣ Detect desktop only
    useEffect(() => {
        const checkDevice = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkDevice();
        window.addEventListener("resize", checkDevice);

        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    // 2️⃣ UPDATE CURSOR WHEN INDEX CHANGES  ← ADD THIS HERE
    useEffect(() => {
        if (!isDesktop) return;

        document.documentElement.style.setProperty(
            "--custom-cursor",
            `url(${cursors[index]}) 12 12, auto`
        );
    }, [index, isDesktop]);

    // 3️⃣ Click to rotate cursor (ignore drag)
    useEffect(() => {
        if (!isDesktop) return;

        let isDragging = false;
        let mouseDown = false;

        const handleMouseDown = (e: MouseEvent) => {
            if (e.button !== 0) return;
            mouseDown = true;
            isDragging = false;
        };

        const handleMouseMove = () => {
            if (mouseDown) {
                isDragging = true;
            }
        };

        const handleMouseUp = () => {
            if (!isDragging && mouseDown) {
                setIndex((prev) => (prev + 1) % cursors.length);
            }

            mouseDown = false;
            isDragging = false;
        };

        document.addEventListener("mousedown", handleMouseDown);
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDesktop]);

    return null;
}
