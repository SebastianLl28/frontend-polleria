import styled from "styled-components"
import { useFetchProducts } from "../../hooks/usePruebaProduct"
import { useCarritoStore } from "../../store/carrito"
import { CardProduct } from "./components"
import FilterProduct from "./components/FilterProduct"
import { ContainerSection } from "../../styled-components/components/Sections"
import Footer from "../../components/Footer"

const Products = () => {

  const { data: products, isLoading } = useFetchProducts()
  
  const addCarrito = useCarritoStore(state => state.addCarrito)


  const handleAdd = (id) => {
    // clearCarrito()
    addCarrito(id)
  }

  return (
    <Main>
      <FilterProduct />
      { isLoading ? (
        <div>...Loading</div>
      ) : (
        <ul>
          {products.map(product => (
            <CardProduct product={product} key={product.id}/>
          ))}
        </ul>
      )}
    </Main>
  )
}

export default Products


const Main = styled(ContainerSection)`
  color: white;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: .5fr 1fr;
  gap: 2rem;
  grid-template-areas: 'filter product';
  position: relative;

  & ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
    grid-auto-rows: auto;
    gap: 2rem;
    border-radius: .5rem;
    grid-area: product;
  }
`