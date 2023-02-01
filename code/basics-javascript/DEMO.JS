let user = {
  set fullName(name) {
    this.demoname = name;
  }
};

user.fullName = "Test"; // Error (property has only a getter)
console.log(user.demoname);
