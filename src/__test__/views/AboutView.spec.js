import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import AboutView from '@/views/AboutView.vue'

describe('Navegacion mediante VueRouter', async () => {
  const routerTest = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/about',
        name: 'about',
        component: AboutView
      }
    ]
  })

  it('Navega en vista AboutView', async () => {
    /**Hace push de la ruta mediante el nombre del componente(Vista) */
    routerTest.push({ name: 'about' })
    /**Espera a que la vista AbouView haya renderizado*/
    await routerTest.isReady()

    /**En el ciclo de vida de montar la app, monta el wrapper que hace de envoltura de la aplicacion en este caso es App */
    const wrapper = mount(App, {
      global: {
        plugins: [routerTest]
      }
    })
    /**Hace la prueba esperando encontrar el componente, que exista y devuelva un valor true */
    expect(wrapper.findComponent(AboutView).exists()).toBe(true)
  })
})
