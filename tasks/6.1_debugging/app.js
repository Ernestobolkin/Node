const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: [
      {
        meats: ["hamburgers", "sausages"],
        fish: ["salmon", "pike"],
      },
    ],
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: [
      {
        meats: ["hamburgers", "steak", "lamb"],
        fish: ["tuna", "salmon", "barracuda"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["ham", "chicken"],
        fish: ["pike"],
      },
    ],
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: [
      {
        meats: ["bird", "rooster"],
        fish: ["salmon"],
      },
    ],
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: [
      {
        meats: ["hamburgers", "lamb"],
        fish: ["anchovies", "tuna"],
      },
    ],
  },
];

const names = (arr) => {
  return arr.map((el) => {
    return el.name;
  });
};

const born = (arr) => {
  return arr.filter((item) => {
    const birthday = new Date(item.birthday).getFullYear();
    if (birthday < 1990) {
      return item;
    }
  });
};

const food = (arr) => {
  const obj = {
    meats:[],
    fish:[]
  };

  arr.forEach((el) => {
    console.log("==============");
    el.favoriteFoods.forEach((foodObj) => {

      // console.log(foodObj.fish);

// the problem seems to be here. foodObj is an object and the program tries to do forEach.
      // foodObj.for((meatItem) => {
      //   console.log(meatItem);
      //   // obj[meatItem] = obj[meatItem] + 1 || 1;
      // });
      // foodObj.fish.forEach((fishItem) => {
      //   obj[fishItem] = obj[fishItem] + 1 || 1;
      // });
// this is my solution
obj.meats.push(foodObj.meats)
obj.fish.push(foodObj.fish)
    });
  });
  return obj;
};

console.log(food(data));

