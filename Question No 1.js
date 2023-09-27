// 1 .FOR THE GIVEN JSON ITERATE OVER ALL FOR LOOPS(FOR, FOR IN , FOR OF ,FOREACH)
// for loop
const jsonObject = {
    "name": "Rajeebrazak",
    "age": 20,
    "email": "rajeebrazak786@gmail.com",
    "address": {
      "street": "ummini",
      "city": "Palakkad",
      "state": "Kerala"
    },
    "hobbies": ["reading", "sports", "cooking"]
  };
  for (let key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      console.log(key, jsonObject[key]);
    }
  }

  //for In
  const jsonObject = {
    "name": "Rajeebrazak",
    "age": 20,
    "email": "rajeebrazak786@gmail.com",
    "address": {
      "street": "ummini",
      "city": "Palakkad",
      "state": "Kerala"
    },
    "hobbies": ["reading", "sports", "cooking"]
  };
  for (let key in jsonObject) {
    console.log(key, jsonObject[key]);
  }
//FOR OF 
const jsonObject = {
    "name": "Rajeebrazak",
    "age": 20,
    "email": "rajeebrazak786@gmail.com",
    "address": {
      "street": "ummini",
      "city": "Palakkad",
      "state": "Kerala"
    },
    "hobbies": ["reading", "sports", "cooking"]
  };
  for (let value of Object.values(jsonObject)) {
    console.log(value);
  }
  //FOR EACH
  const jsonObject = {
    "name": "Rajeebrazak",
    "age": 20,
    "email": "rajeebrazak786@gmail.com",
    "address": {
      "street": "ummini",
      "city": "Palakkad",
      "state": "Kerala"
    },
    "hobbies": ["reading", "sports", "cooking"]
  };
  jsonObject.hobbies.forEach(hobby => {
    console.log(hobby);
  });



