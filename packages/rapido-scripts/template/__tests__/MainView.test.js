import React from 'react';
import { create } from 'react-test-renderer';

import MainView from '../views/MainView';

describe('<MainView />', () => {
  it('renders without crashing', () => {
    let root = create(<MainView key="key1" title="Title" />);
    expect(root.toJSON()).toMatchSnapshot();
  });
});
