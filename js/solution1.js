import fetch from "node-fetch";

export const letter = {
  get handleUsersWithPosts() {
    return (async function getUserInfoAndPostInfo() {
      try {
        const users = await fetch("https://jsonplaceholder.typicode.com/users")
          .then((res) => res.json())
          .then((data) => data);
    
        const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((data) => data);
    
          const usersWithPosts = users.map((user) => ({
          ...user,
          posts: posts.filter(({ userId }) => userId === user.id),
        }));
    
        return usersWithPosts
      } catch (error) {
        console.log(error, "Erro ao carregar dados ");
      }
    })();
  },
};

//For testing purposes
//If remove the instruction the test will fail
export const letterInfo = async () => await letter.handleUsersWithPosts;

//To display data on console
//console.log(await letter.handleUsersWithPosts)