let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquids: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (fruitName, holderName, toppingName, callProduction) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruitName]} was selected.`);

        callProduction(holderName, toppingName);
    }, 2000);
};

let production = (holderName, toppingName) => {
    setTimeout(() => {
        console.log("Production has started");

        setTimeout(() => {
            console.log("The fruit has been chopped");

            setTimeout(() => {
                console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was added.`);

                setTimeout(() => {
                    console.log("Machine has started.");

                    setTimeout(() => {
                        console.log(`Ice cream was placed on ${stocks.holder[holderName]}.`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[toppingName]} was added.`);

                            setTimeout(() => {
                                console.log("Serve ice cream");
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
};
// Example usage:
// order(fruitIndex, holderIndex, toppingIndex, production);
order(0, 1, 1, production);
