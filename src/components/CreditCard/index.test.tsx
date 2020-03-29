import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import CreditCard from './index'

let wrapper: ReactTestRenderer

describe('CreditCard screen test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<CreditCard />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})
