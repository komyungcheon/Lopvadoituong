class QuadraticEquation {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getA(){
        return this.a = a;
    }
    getB(){
        return this.b = b;
    }
    getC(){
        return this.c = c;
    }
    getDiscriminant(){
        let delta = this.b * this.b - 4* this.a * this.c
        return delta
    }
    getRoot1(){
            return (-this.b + Math.sqrt(this.getDiscriminant()))/(2*this.a)
    }
    getRoot2(){
        return (-this.b - Math.sqrt(this.getDiscriminant()))/(2*this.a)
    }
}
let phuongtrinh =  new QuadraticEquation(1,3,1)
function tinhtoan() {
    if(phuongtrinh.getDiscriminant() > 0){
        console.log(`${phuongtrinh.getRoot1()},${phuongtrinh.getRoot2()}`)
    } else if(phuongtrinh.getDiscriminant() === 0 ){
        console.log(`${phuongtrinh.getRoot1()}`)
    }else {
        console.log(`The equation has no roots`);
    }

}
tinhtoan()
