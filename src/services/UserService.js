import api from "./api";

export const getUserData = async (username) => {
  try {
    const { data } = await api.get(`/users/${username}`);
    let userData = {
      login: data.login,
      avatar_url: data.avatar_url,
      bio: data.bio,
      name: data.name,
      company: data.company,
      blog: data.blog,
      location: data.location,
      email: data.email,
      followers: data.followers,
      following: data.following,
      twitter_username: data.twitter_username,
    };
    return userData;
  } catch (error) {
    let userData = {
      login: "error",
      avatar_url: "/assets/userNotFound.png",
      name: "Something went wrong!",
      bio: "Couldn't find user data. Try again later.",
      followers: 0,
      following: 0,
    };
    return userData;
  }
};
