const user = [
    {
        item: "Book1",
        Price: 100,
    },
    {
        item: "Book2",
        Price: 120,
    },
    {
        item: "Book3",
        Price: 80,
    },
    {
        item: "Book4",
        Price: 150,
    },
    {
        item: "Book5",
        Price: 170,
    },
];

const pay = user.reduce((total, current) => total + current.Price, 0)             // total price   620
console.log(pay);
