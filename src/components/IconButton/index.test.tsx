import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import IconButton from './index'

let wrapper: ReactTestRenderer

describe('IconButton screen test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<IconButton />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})
