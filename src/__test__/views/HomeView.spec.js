import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import HomeView from '@/views/HomeView.vue'

describe('Navegacion mediante VueRouter', async () => {
  const routerTest = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      }
    ]
  })

  it('Navega en vista HomeView', async () => {
    /**Hace push de la ruta mediante el nombre del componente(Vista) */
    routerTest.push({ name: 'home' })
    /**Espera a que la vista AbouView haya renderizado*/
    await routerTest.isReady()
    const wrapper = mount(App, {
      global: {
        plugins: [routerTest]
      }
    })
    /**Hace la prueba esperando encontrar el componente, que exista y devuelva un valor true */
    expect(wrapper.findComponent(HomeView).exists()).toBe(true)
  })
})
