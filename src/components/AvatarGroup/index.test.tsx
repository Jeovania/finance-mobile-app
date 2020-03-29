import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import AvatarGroup from './index'

let wrapper: ReactTestRenderer

describe('AvatarGroup screen test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<AvatarGroup />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})
