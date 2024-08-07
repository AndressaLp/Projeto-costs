import styles from "./css/Loading.module.css"
import loading from "../../imagem/loading.svg"

function Loading(){
    return(
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="Loading"/>
        </div>
    )
}

export default Loading