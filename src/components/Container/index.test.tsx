import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import Container from './index'

let wrapper: ReactTestRenderer

describe('Container screen test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<Container />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})
