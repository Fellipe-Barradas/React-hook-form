import { useForm} from "react-hook-form";
import styles from "./Form.module.css"
import validator from "validator";
function Form() {
    //Usando o hook para registrar os dados fornecidos
    const {register, handleSubmit, formState:{ errors }, watch} = useForm()

    const onSubmit = (e)=>{

      alert(`Seu nome é ${e.name} e e-mail: ${e.email}`)
    } 
    const watchPassword = watch(register.senha)
    console.log(watchPassword)
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
          <div className={styles.content} >
            <label htmlFor="email">E-mail:</label>
            <input 
            type="email" 
            name="emai" 
            id="email"  
            placeholder="Digite seu nome..." 
            autoComplete="off"
            {...register('email',{ required:true, validate:(value)=>validator.isEmail(value)})}
            />
            {errors?.email && <p className={styles.errorMsg}>Adicione um email válido</p> }
          </div>
          <div className={styles.content} >
            <label htmlFor="senha">Confirmação da senha:</label>
            <input 
            type="password" 
            name="senha" 
            id="senha"  
            placeholder="Digite seu nome..." 
            autoComplete="off"
            {...register('senha',{ required:true, minLength:8})}
            />
            {errors?.senha && <p className={styles.errorMsg}>Adicione um senha válido</p> }
          </div>
          <div className={styles.content} >
            <label htmlFor="senhaconfirmation">Senha:</label>
            <input 
            type="password" 
            name="emai" 
            id="senhaconfirmation"  
            placeholder="Digite seu nome..." 
            autoComplete="off"
            {...register('senhaconfirmation',{ required:true, minLength:8, validate:(value)=>value!==watchPassword})}
            />
            {errors?.senhaconfirmation === "validate" && <p className={styles.errorMsg}>Adicione uma senha igual a anterior</p>}
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" name="termos" id="termos"
            {...register("privacyTerms", {required:true})} />
            <label htmlFor="termos">Termos de serviço</label>
          </div>
          {errors?.privacyTerms && <p className={styles.errorMsg}>Esse campo é obrigatório</p>}
          <div>
            <button onClick={()=>handleSubmit(onSubmit)()}>Enviar</button>
          </div>
        </div>
        </>
     );
}

export default Form;