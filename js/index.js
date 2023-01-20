import fetch from "node-fetch";

export const letter = {
  get userInfoAndPostInfo() {
    try {
      const users = fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => data);

      const posts = fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => data);

      const usersWithPosts = users.map(user => ({
        ...user,
        posts: posts.filter(({ userId }) => userId === user.id),
      }));

      console.log(users)
      return usersWithPosts
    } catch (error) {
      console.log(error, " Falha ao carregar dados ");
    }
  },
};