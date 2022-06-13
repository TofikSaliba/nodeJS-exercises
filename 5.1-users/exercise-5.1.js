const yargs = require("yargs");
const users = require("./users-exports.js");

yargs.version("1.1.1");

yargs.command({
  command: "add",
  describe: "add new user",
  builder: {
    name: {
      describe: "user name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "user email",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.createUser(argv.name, argv.email);
  },
});

yargs.command({
  command: "get",
  describe: "read user",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.readUser(argv.id);
  },
});

yargs.command({
  command: "update",
  describe: "update user",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
    name: {
      describe: "user new name",
      type: "string",
    },
    email: {
      describe: "user new email",
      type: "string",
    },
  },
  handler(argv) {
    users.updateUser(argv.id, argv.name, argv.email);
  },
});

yargs.command({
  command: "remove",
  builder: {
    id: {
      describe: "user id",
      demandOption: true,
      type: "string",
    },
  },
  describe: "remove user",
  handler(argv) {
    users.deleteUser(argv.id);
  },
});

yargs.parse();
