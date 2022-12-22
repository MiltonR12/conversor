import estilos from '../sass/numConver.module.scss';

function NumConver({ base, defecto, children }) {

  const numero = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  return (
    <div className={estilos.contenedor} >
      <label>{children}</label>
      <select onChange={(e) => base(e.target.value)}
        className={estilos.seleccionador}
        defaultValue={defecto} >
        {
          numero.map(num => (
            <option value={num} key={num} className={estilos.item} > {num} </option>
          ))
        }
      </select>
    </div>
  )
}

export default NumConver