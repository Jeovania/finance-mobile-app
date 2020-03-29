import { ReactTestInstance } from 'react-test-renderer'

/**
 * Create a props object with navigation
 */
export const createTestPropsWithNavigation = (ownProps: object): object => ({
  navigation: {
    navigate: jest.fn(),
    push: jest.fn(),
    goBack: jest.fn(),
  },
  route: {
    params: {
      ...ownProps,
    },
  },
})

/**
 * Get an instace by testID
 */
export const findByTestID = (instance: ReactTestInstance, testID: string): ReactTestInstance =>
  instance.findByProps({ testID })

/**
 * Get all instaces by testID
 */
export const findAllByTestID = (instance: ReactTestInstance, testID: string): ReactTestInstance[] =>
  instance.findAllByProps({ testID })
