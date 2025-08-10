import {useRef} from "react";
import type {IStarfieldProps} from "./types.ts";
import {useStarfield} from "../../lib/strafield/useStarfield.ts";
import {clsx} from "clsx";
import styles from "./Starfield.module.scss"

export const Starfield =({speed, ...rest} :  { speed: number } & IStarfieldProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useStarfield(canvasRef, {...rest, baseSpeed:speed });
    return <canvas ref={canvasRef} className={clsx(styles.canvas, rest.className)}/>
}
