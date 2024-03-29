import './itemListContainer.css'
//AL LLEGAR UN OBJETO COMO PROP DIRECTAMENTE LO DESESTRUCTURO 
function CartWidget({greeting}) {
  return (
    <>
      <h2 className="texto-en-pantalla">{greeting}</h2>
    </>
  )
}

export default CartWidget
