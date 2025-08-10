import styles from "./HomePage.module.scss";
import {Button} from "../../../shared/ui/button";
import {Starfield, type IStarfieldHandle} from "../../../shared/ui/starfield";
import {useEffect, useRef, useState} from "react";
import {clsx} from "clsx";


export const HomePage = () => {
    const [warp, setWarp] = useState<boolean>(false);
    useEffect(() => {
        setSpeed(warp ? 100 : 0.3);
    }, [warp]);
    // const starRef = useRef>
    const[speed, setSpeed] = useState<number>(1);
    return(
        <div className={styles.root}>
            <Starfield speed={speed} count={2500*5}/>
            <Button
                onClick={() => setWarp(w => !w)}
                className={styles.warpButton}
            >
                Warp
            </Button>
            <img src="/Ship.png" className={clsx(styles.imgShip, warp? styles.isVisible:"" )} id="ship"/>

        </div>

    )
}