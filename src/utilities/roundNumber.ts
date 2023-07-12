export const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}

export const roundNumberToFixed = (num: number, decimalPlaces: number) => {
    return Number(num.toFixed(decimalPlaces));
}