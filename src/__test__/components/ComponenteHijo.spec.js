import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ComponenteHijo from '@/components/ComponenteHijo.vue'

describe('Pruebas Unitaria a ComponenteHijo', () => {
  it('Enviar texto al ComponentePadre al pinchar boton', async () => {
    const wrapper = mount(ComponenteHijo)

    /**Ingreso de texto en el Input*/
    await wrapper.find('input').setValue('texto ingresado')

    /**Click en boton, buscando un evento Submit*/
    await wrapper.find('button').trigger('submit')

    /**aqui se realiza la prueba en el primer elemento del arreglo de emits */
    expect(wrapper.emitted('envia-texto')[0]).toEqual(['texto ingresado'])
  })
})
