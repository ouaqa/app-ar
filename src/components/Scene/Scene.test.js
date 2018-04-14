import React from 'react'
import { shallow } from 'enzyme'

import Scene from './Scene'

describe('<Scene/>', () => {
  it('renders without crashing', () => {
    shallow(<Scene />, {})
  })
})
