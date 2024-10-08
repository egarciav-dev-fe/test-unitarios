import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { useCounterStore } from '@/stores/counter'

describe('useCounter', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('Contador inicial cero', () => {
    const initialCounter = useCounterStore()

    expect(initialCounter.count).toBe(0)
  })

  it('Incrementar contador', () => {
    const initialCounter = useCounterStore()
    initialCounter.increment()
    expect(initialCounter.count).toBe(1)
  })

  it('Disminuir contador', () => {
    const initialCounter = useCounterStore()
    initialCounter.decrement()
    console.log(initialCounter.decrement())
    expect(initialCounter.count).toBeLessThan(0)
  })
})
