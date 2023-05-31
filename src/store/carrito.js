import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCarritoStore = create(persist(
  (set) => ({
    carrito: [],
    isOpen: false,
    addCarrito: (id) =>
      set(state => ({
        carrito: [...state.carrito, id]
      })),
    clearCarrito: () =>
      set(state => ({
        carrito: []
      })),
    setOpen: () =>
      set(state => ({
        isOpen: state.isOpen ? false : true
      }))
  }),
  {
    name: 'carrito-products'
  }
))