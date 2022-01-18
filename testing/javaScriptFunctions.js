const validator = require("validator");

const validate = (number) => {
  // console.log(validator.isMobilePhone("he-IL", number));
  // console.log(validator.isMobilePhone(number,"he-IL"));
  // validator.isMobilePhone(unique_key, 'any')
};

// validate(+972542086882);
// validate("+982542086882");
// validate("0542086882");

const arrValidate = (arg) => {
  console.log(typeof arg);
  console.log(arg.length);
};

const tempArr = [];

arrValidate(arrValidate);
