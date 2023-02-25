import './App.css'
import Form from './components/Form'
import { BsLightningCharge } from "react-icons/bs";
function App() {

  return (
    <div className='conteiner_form'>
      <div>
        <div className='icon_thunder'><BsLightningCharge className='icon'/></div>
      
        <h1>Faça sua inscrição para o <span>futuro</span></h1>
      </div>
      <Form />
    </div>
  )
}

export default App
