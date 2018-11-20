'use strict';

async function MultiplyAfterTwoSec1(x, y) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            return resolve(1 + 1);
        }, 0);
        //  return reject('SOme Error Occurs');
    }); //
};