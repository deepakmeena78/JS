const user = {};
user.id = "123a";
user.name = "Ankit";
console.log(user);

const as = {
    email: "deepakmeenaa78@gmail.com",
    fullName: {
        usersName: {
            FirstName: "Deepak",
            LastName: "Meena"
        }
    }
};

console.log(as);
console.log(as.email);
console.log(as.fullName.usersName.FirstName);
console.log(as.fullName.usersName.LastName);


