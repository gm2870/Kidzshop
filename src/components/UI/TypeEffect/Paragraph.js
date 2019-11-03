import React from "react";
import { useState, useEffect, useRef } from "react";
import useTypewriter from "react-typewriter-hook";

const MagicOcean = [
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک",
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک"
];
let index = 0;
const paragraph = () => {
    const [magicName, setMagicName] = useState("");
    const intervalRef = useRef({});
    const name = useTypewriter(magicName);
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            // index = index + 1 > 2 ? 0 : ++index + 1;
            index = index > 2 ? 0 : ++index;
            setMagicName(MagicOcean[index]);
        }, 10000);
        return function clear() {
            clearInterval(intervalRef.current);
        };
    }, [magicName]);
    return <h3 className="slider_sub_text animated_text">{name}</h3>;
};
export default paragraph;
