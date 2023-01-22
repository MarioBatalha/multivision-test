import fetch from "node-fetch";

export const letter = {
  get handleUsersWithPosts() {
    return (async function getUserInfoAndPostInfo() {
      try {
        const users = await fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Network response error loading users data");
            }
          })
          .then((data) => data);

        const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Network response error loading posts data");
            }
          })
          .then((data) => data);

        const usersWithPosts = users.map((user) => ({
          ...user,
          posts: posts.filter(({ userId }) => userId === user.id),
        }));

        return usersWithPosts;
      } catch (error) {
        console.log(error, "Error loading data");
      }
    })();
  },
};

//For testing purposes
//If remove the instruction the test will fail
//export const letterInfo = async () => await letter.handleUsersWithPosts;

//To display data on console
console.log(await letter.handleUsersWithPosts);
