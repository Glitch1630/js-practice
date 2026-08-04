const colors = ["Red", "Green", "Blue"];
a=colors.splice(1,1,"Yellow");
b=colors.pop();
colors.push("Black");
console.log(colors);
console.log(a,b);