import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCarritoStore = create(persist(
  (set, get) => ({
    carrito: [],
    isOpen: false,
    addCarrito: (id) => {
    const listCarrito = get().carrito
    const obj = listCarrito.find(element => element.id === id);
    if (!obj){
      return set(state => ({
        carrito: [...state.carrito, {id, count: 1}]
      }))
    }
    const newList = listCarrito.map(element => {
      if (element.id === id){
        element.count = element.count + 1
      }
      return element;
    })
    return set(state => ({
      carrito: newList
    }))},
    clearCarrito: () =>
      set(state => ({
        carrito: []
      })),
    restarCarrito: (id) => {
      const listaCarrito = get().carrito
      const obj = listaCarrito.find(element => element.id === id);
      let newList;
      if (obj.count === 1){
        newList = listaCarrito.filter(element => {
          return element.id !== id
        })
      }else {
        newList = listaCarrito.map(element => {
          if (element.id === id){
            element.count = element.count - 1
          }
          return element;
        })
      }
      return set(state => ({
        carrito: newList
      }))
    },
    setOpen: () =>
      set(state => ({
        isOpen: state.isOpen ? false : true
      }))
  }),
  {
    name: 'carrito-products'
  }
))
