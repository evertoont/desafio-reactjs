import api from "./api";
import starOrdenation from "../utils/sortRepository";

class RepositoryEmptyError extends Error {
  constructor() {
    super();
    this.name = "EmptyRepository";
  }
}

export const getUserRepository = async (username) => {
  try {
    const { data } = await api.get(`/users/${username}/repos`);

    if (data.length === 0) throw new RepositoryEmptyError();

    const dataCards = [];

    data.forEach((repos) => {
      dataCards.push({
        id: repos.id,
        html_url: repos.html_url,
        description: repos.description,
        name: repos.name,
        updated_at: repos.updated_at,
        stargazers_count: repos.stargazers_count,
      });
    });

    const repositoryList = [...dataCards].sort(starOrdenation).reverse();

    return repositoryList;
  } catch (error) {
    if (error instanceof RepositoryEmptyError) {
      throw new Error("User doesn't have any public repository.");
    } else {
      throw new Error(
        "Oops! Repositories couldn't be loaded. Try again later."
      );
    }
  }
};
