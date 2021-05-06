import bcrypt from "bcrypt";

const saltRounds = 12;
const plainTextPassword = "keapass123";
const wrongPassword = "HappyDog";
const hashedPassword = "$2b$12$cyafGBJFw1YFH6OElrBU1O1KDunVMh2P6vLz0MRF6/bjLlqhH/gzq";

bcrypt.hash(plainTextPassword, saltRounds, (error, hash) => {
    console.log(hash);
});

bcrypt.compare(plainTextPassword, hashedPassword, (error, result) => {
    if (error) {
        console.log(error);
    }
    console.log(result);
});

bcrypt.compare(plainTextPassword, wrongPassword, (error, result) => {
    if (error) {
        console.log(error);
    }
    console.log(result);
});

export default {};