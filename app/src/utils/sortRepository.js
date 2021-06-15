export default function starOrdenation(fristPosition, secondPosition) {
  if (fristPosition.stargazers_count < secondPosition.stargazers_count)
    return -1;

  if (fristPosition.stargazers_count > secondPosition.stargazers_count)
    return 1;
}
