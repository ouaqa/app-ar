import React from 'react'
import { shallow } from 'enzyme'

import HelloScene from './HelloScene'

describe('<HelloScene/>', () => {
  it('renders without crashing', () => {
    shallow(<HelloScene />, {})
  })
})
