function nam(callback) {
    let name = "Infobeans"
    callback(name);
}                                                  // callback 

nam((name) => {
    console.log("Return A Gaya : ", name);
});
