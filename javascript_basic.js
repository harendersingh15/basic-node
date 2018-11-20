function calculateTotalAmountWithVar(vip) {
    var amount = 0
    if (vip) {
        var amount = 1
    }
    { // more crazy blocks!
        var amount = 100
        {
            var amount = 1000
        }
    }
    return amount
}

console.log(calculateTotalAmountWithVar(1));

function calculateTotalAmountWithLet(vip) {
    let amount = 0 // probably should also be let, but you can mix var and let
    if (vip) {
        let amount = 1 // first amount is still 0
    }
    { // more crazy blocks!
        let amount = 100 // first amount is still 0
        {
            let amount = 1000 // first amount is still 0
        }
    }
    return amount
}

console.log(calculateTotalAmountWithLet(1));


function addAfterTwoSec(x, y) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            return resolve(1 + 1);
        }, 4000);
        //  return reject('SOme Error Occurs');
    });
}

function MultiplyAfterTwoSec(x, y) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            return resolve(1 + 1);
        }, 0);
        //  return reject('SOme Error Occurs');
    });
};


class Polygon {
    constructor(height, width) {
        this.h = height;
        this.w = width;
    }
    test() {
        console.log("The height of the polygon: ", this.h)
        console.log("The width of the polygon: ", this.w)
    }
}

var p = new Polygon(2, 3);
p.test();

class Shape {
    constructor(a) {
        this.area = a * a;
    }
}
class Circle extends Shape {

    disp() {
        console.log("Area of the circle:  " + this.area)
    }
}

var c = new Circle(2);
c.disp();

addAfterTwoSec(4, 2)
    .then((result) => {
        console.log(`Sumation of 4 an 2 is ${result}`);
        return result;
    })
    .then((result1) => {
        console.log(result1 * 2);
        MultiplyAfterTwoSec(1, 4)
            .then((a) => {
                console.log(result1 * 2);
                MultiplyAfterTwoSec(1, 4)
                    .then((a) => {
                        console.log(result1 * 2);
                        MultiplyAfterTwoSec(1, 4)
                            .then((a) => {
                                console.log(result1 * 2);
                                MultiplyAfterTwoSec(1, 4)
                                    .then((a) => {
                                        console.log(result1 * 2);
                                        MultiplyAfterTwoSec(1, 4)
                                            .then((a) => {
                                                console.log(result1 * 2);
                                                MultiplyAfterTwoSec(1, 4)
                                                    .then((a) => {

                                                    })
                                            })
                                    })
                            })
                    })
            })
        return result1;
    })
    .then((result1) => {
        console.log(result1 * 3);
        return result1;
    })
    .then((result1) => {
        console.log(result1 * 5);
        return result1;
    })
    .then((result1) => {
        console.log(result1 * 6);
        return result1;
    })
    .catch((error) => {
        console.log(error);
    });



class test {
    c() { }
}
