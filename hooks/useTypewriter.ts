import React, { useEffect } from "react";
import { motion } from "motion/react";

const phrases = [
    "Hello, world!",
    "This is a typewriter effect.",
    "Using Framer Motion.",
    "And React!",
];

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Adjust stagger for typing speed
        },
    },
};

const letter = {
    hidden: { opacity: 0, y: 20 }, // Start slightly below and hidden
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }, // Smooth appearance
};

export const Typewriter = () => {
    const [currentPhraseIndex, setCurrentPhraseIndex] = React.useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000); // Change phrase every 3 seconds

        return () => clearTimeout(timer); // Clear timer on unmount or phrase change
    }, [currentPhraseIndex]);
};