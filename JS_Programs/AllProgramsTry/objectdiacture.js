const user = {
    id: 101,
    name: "Deepak Meena",
    contact: {
        email: "deepak@example.com",
        phone: "9876543210",
        address: {
            street: "MG Road",
            city: "Indore",
            state: "Madhya Pradesh",
            pincode: "452001"
        }
    },
    skills: {
        programming: ["Java", "JavaScript", "HTML", "CSS", "MySQL"],
        softSkills: ["communication", "teamwork"]
    },
    isActive: true
};

function fun(user) {
    for (let x in user) {
        const value = user[x];
        if (typeof value == "object") { 
            fun(value);
        } else {
            console.log(`${x} : ${value}`);
        }
    }
}

fun(user);
