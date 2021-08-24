// eslint-disable-next-line no-unused-vars
const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

// eslint-disable-next-line no-unused-vars
const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
// eslint-disable-next-line no-unused-vars
const saludar4 = () => `Hola Mundo`;

const getUser = () => ({
  uid: 'ABC123',
  username: 'El_Papi1502'
});

const getUsuarioActivo = ( nombre ) =>({
  uid: 'ABC567',
  username: nombre
})


export { getUser, getUsuarioActivo }
