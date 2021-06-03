
import 'react-native';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import EpisodeDetailsView from "@series/components/organisms/EpisodeDetailsView";
import Constants from "@constants/Constants";

const seasonDetail = {
    selectedSeason: {
        seriesTitle: "The Walking Dead",
    },
    selectedEpisode: {
        episodeNo: 1,
        seasonNo: 8,
        title: "Mercy",
        shortDescription: "Rick and his group, along with the Kingdom and Hilltop, band together to bring the fight to Negan and the Saviors.",
        year: 2017,
        genres: ["Drama", "Horror", "Thriller"],
        duration: 2640,
    },
};

describe("<EpisodeDetailsView />", () => {

    it("not redeemed renders correctly", () => {
        const { getByTestId } = render(<EpisodeDetailsView {...seasonDetail}/>);

        expect(getByTestId(Constants.TEST_ID_REEDEM_BUTTON)).toBeDefined();
    });

    it("redeemed renders correctly", () => {
        const { getByTestId } = render(<EpisodeDetailsView {...seasonDetail}/>);

        fireEvent.press(getByTestId(Constants.TEST_ID_REEDEM_BUTTON));
        expect(getByTestId(Constants.TEST_ID_PLAY_BUTTON)).toBeDefined();
        expect(getByTestId(Constants.TEST_ID_EXPIRY_BUTTON)).toBeDefined();
    });

    it("resume renders correctly", () => {
        const { getByTestId } = render(<EpisodeDetailsView {...seasonDetail}/>);

        fireEvent.press(getByTestId(Constants.TEST_ID_REEDEM_BUTTON));
        fireEvent.press(getByTestId(Constants.TEST_ID_PLAY_BUTTON));

        expect(getByTestId(Constants.TEST_ID_RESUME_BUTTON)).toBeDefined();
    });
});
