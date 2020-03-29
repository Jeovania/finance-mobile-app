import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import Text from './index'

let wrapper: ReactTestRenderer

describe('Text screen test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<Text />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})
