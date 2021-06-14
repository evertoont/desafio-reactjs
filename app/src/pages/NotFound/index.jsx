import { useHistory } from "react-router";
import styles from "./notfound.module.scss";
import { MdFindInPage } from "react-icons/md";

export default function NotFound() {
  const history = useHistory();

  return (
    <div className={styles.container}>
        <MdFindInPage/> 
      <p>Error 404: Page not found!</p>
      <div className={styles.go_back}>
        <button onClick={() => history.push("/")}>Voltar</button>
      </div>
    </div>
  );
}
