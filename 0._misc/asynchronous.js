
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I'm so happy!");
//     }, 4000);
// }).then((message => {
//     console.log(message);
// }));

function myPromise() {
    return new Promise((resolve, reject) => {
        try{
            setTimeout(() => {
                resolve("I have been resolved :)")
            }, 4000);
        } catch {
            reject("I have been rejected :(")
        }
    });
}

myPromise()
    .then(value => console.log(value))
    .catch(err => console.log(error))

const getFruit = async(name) => {
    const fruits = {
        grape: '🍇',
        watermelon: '🍉',
        banana: '🍌'
    };
    return Promise.resolve(fruits[name]);
}

const badSmoothie = async() => {
    try{
        const a = getFruit('watermelon');
        const b = getFruit('grape');
        const c = getFruit('banana');
        const smoothie = await Promise.all([a, b, c]);
        return smoothie;
    } catch(err) {
        console.log(err);
        return "We are going to be fine :)"
    }
}

badSmoothie()
    .then(val => console.log(val))
    .catch(err => console.log(err));