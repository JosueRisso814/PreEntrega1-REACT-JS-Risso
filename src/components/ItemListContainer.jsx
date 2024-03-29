//AL LLEGAR UN OBJETO COMO PROP DIRECTAMENTE LO DESESTRUCTURO 
function CartWidget({propGreeting}) {
  return (
    <>
      <h2 className="texto-en-pantalla">{propGreeting}</h2>
    </>
  )
}

export default CartWidget
