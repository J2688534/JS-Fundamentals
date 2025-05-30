// Get the total number of arguments passed by the user (excluding first 2)
const args = process.argv.slice(2); // this gives you just the user-provided arguments

if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
