if (true) {
    let x = 10;   
    var y = 20;   
    console.log(y); 
    console.log(x); 
}

const profile = {
    user: {
        details: {
            email: "test@mail.com"
        }
    }
};
console.log(profile?.user?.details?.email);  
console.log(profile?.user?.details?.phone);  


const car = {
    model: "Honda"
};

console.log(car.engine?.type); 