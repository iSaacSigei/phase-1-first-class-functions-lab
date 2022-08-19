//return array of first two drivers
const returnFirstTwoDrivers=function(drivers){
    return [...drivers].slice(0,2)
}

//return array of last 2 drivers
const returnLastTwoDrivers= function(drivers){
    return [...drivers].slice(-2)
}

//selecting drivers
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

//fare multiplication
const createFareMultiplier=function(fare){
    return function(price){
        return fare*price;
    }
}
//fare multiplication to double and triple the fare
const fareDoubler=createFareMultiplier(2);
const fareTripler=createFareMultiplier(3)

//selection of drivers

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
}