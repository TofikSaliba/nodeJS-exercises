import mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "rich-blogs";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  async (err, client) => {
    if (err) {
      return console.log("Unable to connect to database!");
    }
    console.log("connected!!");
    const db = client.db(databaseName);

    const usersIds = await db.collection("users").insertMany([
      {
        name: "tofik",
        email: "tofik.saliba@gmail.com",
        blogs: [],
      },
      {
        name: "gil",
        email: "gil@gmail.com",
        blogs: [],
      },
    ]);

    const blogPostsIds = await db.collection("blogPosts").insertMany([
      {
        title: "What We Do When",
        author: usersIds.insertedIds["0"],
        text: "fghjgdldgla ldjksgalghoghyds eowt dsoig  dglshjds ahg ioda hfgds ghsdagh sdajkg asdghjk sdaghsdjkgds hjksdg",
        comments: [],
      },
      {
        title: "Every day mission",
        author: usersIds.insertedIds["1"],
        text: "fghsdfgla ldsyds g iohjk asdf faslkkajs 0123 iasdllka sdaghsdjkgds hjksdg",
        comments: [],
      },
    ]);

    const commentsIds = await db.collection("comments").insertMany([
      {
        timeStamp: Date(),
        text: "sadfk ajsfas fk jasfjksa fhassfa",
        blogID: blogPostsIds.insertedIds["0"],
        userID: usersIds.insertedIds["0"],
      },
      {
        timeStamp: Date(),
        text: "sa547547457 ggsdghk hgkghk dgdsgjsfas gsdsdgfjksa sdfgsdfa",
        blogID: blogPostsIds.insertedIds["1"],
        userID: usersIds.insertedIds["1"],
      },
    ]);

    db.collection("users").updateOne(
      { email: "tofik.saliba@gmail.com" },
      {
        $push: { blogs: blogPostsIds.insertedIds["0"] },
      }
    );

    db.collection("users").updateOne(
      { email: "gil@gmail.com" },
      {
        $push: { blogs: blogPostsIds.insertedIds["1"] },
      }
    );

    db.collection("blogPosts").updateOne(
      { author: usersIds.insertedIds["0"] },
      {
        $push: { comments: commentsIds.insertedIds["0"] },
      }
    );

    db.collection("blogPosts").updateOne(
      { author: usersIds.insertedIds["1"] },
      {
        $push: { comments: commentsIds.insertedIds["1"] },
      }
    );
  }
);
