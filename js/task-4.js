console.log('************************ task-4 *******************************');

function getShippingCost(country) {

    let tarrif = 0;
    switch (country)
    {
        case 'China':
            tarrif = 100;
            break;
        case 'Chile':
            tarrif = 250;
            break;
        case 'Australia':
            tarrif = 170;
            break;
        case 'Jamaica':
            tarrif = 120;
            break;
        default:
            tarrif = 0;
            break;
    }

    return tarrif ? `Shipping to ${country} will cost ${tarrif} credits` : "Sorry, there is no delivery to your country";
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
