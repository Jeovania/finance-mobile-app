import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import Icon from './index'

let wrapper: ReactTestRenderer

describe('Icon screen test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<Icon />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})
