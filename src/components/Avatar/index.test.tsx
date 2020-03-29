import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import Avatar from './index'

let wrapper: ReactTestRenderer

describe('Avatar screen test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<Avatar />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})
