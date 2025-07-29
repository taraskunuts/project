let products = []; // Змінна для збереження товарів
fetch('http://localhost:3000/products').then((response)=>response.json()).then((products)=>{
    // Масив для імен, цін і наявності
    let names = [];
    let prices = [];
    let availableStatuses = [];
    for(let i = 0; i < products.length; i++){
        names.push(products[i].name);
        prices.push(products[i].price);
        availableStatuses.push(products[i].available);
    }
    console.log("\u0406\u043C\u0435\u043D\u0430:", names);
    console.log("\u0426\u0456\u043D\u0438:", prices);
    console.log("\u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C:", availableStatuses);
}).catch((error)=>console.error("\u041F\u043E\u043C\u0438\u043B\u043A\u0430:", error));

//# sourceMappingURL=project.c4775257.js.map
