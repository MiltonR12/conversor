import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ''
}

const conBaseDiez = (numero, baseConvertir = 2) => {
  let nuevo = 0;
  numero.map((num, index) => {
    nuevo = nuevo + (num * (Math.pow(baseConvertir, index)))
  })
  return nuevo
}

const conNewBase = (num, base) => {
  let binario = ''
  while (num > 0) {
    let numEnd = num % base
    num = parseInt(num/base)
    binario = numEnd + binario;
  }
  return binario;
}

export const conversorSlice = createSlice({
  name: 'conversor',
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload
    },
    convDinary: (state, action) => {
      const { numero, base, baseConvertir } = action.payload
      const resultado = conBaseDiez(numero.split('').reverse() , base)
      state.value = conNewBase(resultado, baseConvertir)
    }
  }
})

export const { updateValue, convDinary } = conversorSlice.actions;
export default conversorSlice.reducer;