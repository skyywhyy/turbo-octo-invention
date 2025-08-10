import {useEffect, useRef} from "react";
import {Star} from "./Star.ts";

interface IUseStarfieldOptions {
    count?: number;
    baseSpeed?: number;
    pixelRatioAware?:boolean;
}


const useStarfield =(
    canvasRef: React.RefObject<HTMLCanvasElement |null>, {count = 100, baseSpeed = 0.1, pixelRatioAware = true
    }: IUseStarfieldOptions) => {
    const speedRef = useRef(baseSpeed);
    const ctxRef = useRef<CanvasRenderingContext2D | null >(null);
    const starsRef = useRef<Star[]>([]);
    const rafRef = useRef<number> (1);
    const warpTimeoutRef = useRef<number>(0);
    const resize = () =>{
        const canvas = canvasRef.current;
        if(!canvas) return;
        const dpr =pixelRatioAware ? window.devicePixelRatio || 1 : 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.scale(dpr, dpr);
        ctx.translate(canvas.width / 2 , canvas.height / 2 );
        ctx.fillStyle = "#fff"
        ctxRef.current = ctx
        starsRef.current = Array.from({length: count}, ()=>new Star(canvas.width, canvas.height));
    };

    const loop = () => {
        const ctx = ctxRef.current;
        const canvas = canvasRef.current;
        if (!ctx || !canvas) return;
        ctx.clearRect(-canvas.width,-canvas.height, canvas.width *2 , canvas.height*2);
        const speed = speedRef.current;
        for (const star of starsRef.current) {
            star.update(speed);
            star.show(ctx);
        }
        rafRef.current =requestAnimationFrame(loop);
    };

    useEffect(() => {
        if (baseSpeed != null) speedRef.current = baseSpeed;
    }, [baseSpeed]);

    useEffect(() => {
        resize();
        window.addEventListener("resize", resize);
        rafRef.current = requestAnimationFrame(loop);
        return ( ) => {
            window.removeEventListener("resize", resize);
            if (rafRef.current) { cancelAnimationFrame(rafRef.current); }
            if (warpTimeoutRef.current) window.clearTimeout(warpTimeoutRef.current);
        };
    },[])
};

export {useStarfield};
