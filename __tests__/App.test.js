/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import { render, waitFor } from '@testing-library/react-native';
import SeriesScreen from "@series/screens/series-screen"

jest.mock('axios')

describe('<SeriesScreen />', () => {

  it('renders series screen correctly', async () => {
    const tree = render(<SeriesScreen />);
    await waitFor(() => {
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });

});
