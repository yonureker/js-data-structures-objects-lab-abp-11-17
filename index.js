// Write your solution in this file!
const driver = {a:1}

function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = {...driver};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver
}

function deleteFromDriverByKey(driver, key){
  const newObj = {...driver};
  return delete newObj.key;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  newDriver = delete driver.key;
  return newDriver;
}
