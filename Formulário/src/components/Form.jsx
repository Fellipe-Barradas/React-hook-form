import { useForm} from "react-hook-form";
import styles from "./Form.module.css"
function Form() {
    //Usando o hook para registrar os dados fornecidos
    const {register, handleSubmit, formState:{ errors }} = useForm()

    const onSubmit = (e)=>{
        console.log(e)
    } 
    
    return ( 
        <>
        <div className={styles.form}>
          <div className={styles.content} >
            <label htmlFor="name">Nome:</label>
            <input 
            type="text" 
            name="name" 
            id="name"  
            placeholder="Digite seu nome..." 
            autoComplete="off"
            {...register('name',{ required:true,})}
            />
            {errors?.name && <p className={styles.errorMsg}>Adicione um nome válido</p> }
          </div>
          <div>
            <button onClick={()=>handleSubmit(onSubmit)()}>Enviar</button>
          </div>
        </div>
        </>
     );
}

export default Form;