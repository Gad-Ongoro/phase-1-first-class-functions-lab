// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return (drivers.slice(0, 2));
}
const returnLastTwoDrivers = function (drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']) {
    return (drivers.slice(-2));
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] ;

function createFareMultiplier(x) {
    return (fare) => {
        return (fare * x);
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversArray, functionX) {
    if (functionX === returnFirstTwoDrivers) {
        return (driversArray.slice(0, 2));
    } else if (functionX === returnLastTwoDrivers) {
        return (driversArray.slice(-2));
    }
}