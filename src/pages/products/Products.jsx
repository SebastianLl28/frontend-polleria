import styled from "styled-components"
import { useFetchProducts } from "../../hooks/usePruebaProduct"
import { useCarritoStore } from "../../store/carrito"

const Products = () => {

  const { data: products, isLoading } = useFetchProducts()
  
  const addCarrito = useCarritoStore(state => state.addCarrito)
  // const clearCarrito = useCarritoStore(state => state.clearCarrito)


  const handleAdd = (id) => {
    // clearCarrito()
    addCarrito(id)
  }

  return (
    <Main>
      { isLoading ? (
        <div>...Loading</div>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <p>{product.nombre}</p>
              <p>{product.precio}</p>
              <p>{product.stock}</p>
              {/*//! Cuando se vaya a agergar una card puede ser del mismo prop.product.id  */}
              <button onClick={() => handleAdd(product.id)}>Agregar</button>
            </li>
          ))}
        </ul>
      )}
    </Main>
  )
}

export default Products


const Main = styled.main`
  color: white;

  & ul {
    display: grid;
    gap: 1rem;
    margin: 1rem;
    background-color: #00d5ff39;
    padding: 1rem;
    border-radius: .5rem;
  }
`