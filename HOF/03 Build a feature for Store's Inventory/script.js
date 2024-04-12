const items = {
    "item1": 10,  
    "item2": 20,  
    "item3": 30   
};

const convertToINR = usd => usd * 80;

const itemsInINR = Object.fromEntries(
    Object.entries(items).map(([item, price]) => [item, convertToINR(price)])
);

console.log(itemsInINR);
