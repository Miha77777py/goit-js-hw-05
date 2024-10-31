function User({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
}

User.prototype.getInfo = function () {
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
}

const tom = new User({
    name: "Tom",
    age: "20",
    followers: "12",
});

console.log(tom.getInfo());