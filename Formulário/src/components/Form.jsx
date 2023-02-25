import { useForm, useWatch } from "react-hook-form";
import styles from "./Form.module.css"
function Form() {
    return ( 
        <>
        <form className={styles.form}>
          <div className={styles.content}>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" id="name" placeholder="Digite seu nome..." autoComplete="off"/>
          </div>
        </form>
        </>
     );
}

export default Form;