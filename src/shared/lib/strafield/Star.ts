

class Star {
    x: number;
    y: number;
    z: number;
    pz: number;
    w: number;
    h: number;
    constructor (width: number, height: number) {
        this.w =  width  ;
        this.h =  height  ;
        this.reset();
    }
    reset(){
        this.x= (Math.random()- 0.5) * this.w;
        this.y= (Math.random()- 0.5) * this.h;
        this.z= Math.random() *this.w;
        this.pz=this.z;
    }

    show (c: CanvasRenderingContext2D) {
        const sx =(this.x / this.z) * this.w;
        const sy =(this.y / this.z) * this.h;
        const px =(this.x / this.pz) * this.w;
        const py =(this.y / this.pz) * this.h;
        const r = Math.max ( 0, 3-this.z *0.005)
        c.beginPath();
        c.arc(sx, sy, r, 0, 2 * Math.PI);
        c.fill();
        c.beginPath();
        c.lineWidth =r
        c.strokeStyle = "white"
        c.moveTo(px,py);
        c.lineTo(sx,sy);
        c.stroke()
    }
    update (speed: number) {
        this.pz =this.z;
        this.z -= speed;
        if ( this.z < 1 ) { this.reset()}
    }

}

export { Star };