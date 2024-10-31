function Account({ login, email }) {
    this.login = login;
    this.email = email;
}

Account.prototype.getInfo = function () {
    return `Login: ${this.login}, Email: ${this.email}`;
}

const tom = new Account({
    login: "Tom",
    email: "tom@email.com",
});

console.log(tom.getInfo());