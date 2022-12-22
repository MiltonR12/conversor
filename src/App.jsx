import estilo from './App.module.scss';
import NumConver from './components/NumConver';
import { useDispatch, useSelector } from "react-redux";
import { updateValue, convDinary } from "./features/conversor/conversorSlice.js";
import { useState } from 'react';

function App() {

  const dispath = useDispatch()
  const numero = useSelector(state => state.conversor.value)
  const [base, setBase] = useState(10)
  const [baseConvertir, setBaseConvertir] = useState(2)

  const handleChange = (e) => {
    dispath(updateValue(e.target.value))
  }

  const handleClick = () => {
    dispath(convDinary({ numero, base, baseConvertir }))
  }

  return (
    <div className={estilo.App} >
      <h1>CONVERSOR DE BASE X A BASE Y</h1>
      <div className={estilo.conntConversor} >
        <input
          type="text"
          onChange={handleChange}
          value={numero}
          className={estilo.cuadro}
        />
        <NumConver base={setBase} defecto={10} > Base Original </NumConver>
        <NumConver base={setBaseConvertir} defecto={2} > Base a Convertir </NumConver>
        <button onClick={handleClick} className={estilo.btnConvertir} >Convertir</button>
      </div>
    </div>
  )
}

export default App
