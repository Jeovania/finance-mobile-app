import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import CategoryCard from './index'

let wrapper: ReactTestRenderer

describe('CategoryCard screen test suite', () => {
  beforeEach(() => {
    act(() => {
      wrapper = create(<CategoryCard />)
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})
