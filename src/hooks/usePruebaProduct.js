import { useQuery } from "@tanstack/react-query";
import api from "../api/pruebaProducts";

const fetchProducts = async () => {
  const { data } = await api.get('/')
  return data
}

const fetchProduct = async (ctx) => {
  const [, id] = ctx.queryKey
  const { data } = await api.get(`/${id}`)
  return data
}

export const useFetchProducts = () => useQuery(['products'], fetchProducts)

export const useFetchProduct = (id) => useQuery(['getProduct', id], fetchProduct)