// Write your solution in this file!
const driver = {a:1, b:2}

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
  delete driver.key;
  return driver;
}
