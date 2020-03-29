import React from 'react'
import { create, act, ReactTestRenderer } from 'react-test-renderer'
import { createTestPropsWithNavigation } from '../../config/testConfig'
import { StylesProvider } from '../../components'
import Home from './index'

let wrapper: ReactTestRenderer
let props: object

describe('Home screen test suite', () => {
  beforeEach(() => {
    props = createTestPropsWithNavigation({})

    act(() => {
      wrapper = create(
        <StylesProvider>
          <Home {...props} />
        </StylesProvider>,
      )
    })
  })

  it('should render without explode', () => {
    expect(wrapper).toBeTruthy()
  })
})
