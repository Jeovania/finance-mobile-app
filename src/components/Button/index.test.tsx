import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import Button from './index'

let wrapper: ReactTestRenderer

describe('Button screen test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<Button />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})
