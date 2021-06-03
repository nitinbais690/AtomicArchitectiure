import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import SeriesScreen from "@series/screens/series-screen"
import Constants from "@constants/Constants"

jest.mock('axios')

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

describe('Episode list', () => {

  it('renders correctly', async() => {
    const { getAllByTestId } = render(<SeriesScreen />);

    await waitFor(() => {
      // press first season card
      fireEvent.press(getAllByTestId(Constants.TEST_ID_SEASON_ITEM)[0]);

      expect(getAllByTestId(Constants.TEST_ID_EPISODE_ITEM).length).toBeGreaterThan(0);
    });
  });

  it('selected episode details renders correctly', async () => {
    const { getByTestId, getAllByTestId } = render(<SeriesScreen />);

    await waitFor(() => {
      let titleView = getByTestId(Constants.TEST_ID_CURRENT_EPISODE_TITLE);

      // press first season card
      fireEvent.press(getAllByTestId(Constants.TEST_ID_SEASON_ITEM)[0]);

      let episodeCards = getAllByTestId(Constants.TEST_ID_EPISODE_ITEM);
      let selectedIndex = episodeCards.length == 1 ? 0: randomInt(0, episodeCards.length -1);

      let itemTitle = getAllByTestId(Constants.TEST_ID_EPISODE_ITEM_TITLE)[selectedIndex].children[0];

      // press episode card
      fireEvent.press(episodeCards[selectedIndex]);

      expect(titleView.children[0]).toMatch(itemTitle);
    });
  });

});
