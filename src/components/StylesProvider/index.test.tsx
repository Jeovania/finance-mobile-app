import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import StylesProvider from './index'

let wrapper: ReactTestRenderer

describe('StylesProvider screen test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<StylesProvider />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})
