const list = require("../country/state/city/index");

const getFunctionNames = require("../utilities/utils/index");

function getPeopleInCity(list) {
  const firstNames = getFunctionNames(list);
  console.log(firstNames);
  return firstNames;
}
getPeopleInCity(list);
module.exports = getFunctionNames;
