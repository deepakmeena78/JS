const obj = {
    name: "Deepak",
    getName: function () {
      return this.name;
    },
  };
  console.log(obj.getName()); // "Deepak"
  