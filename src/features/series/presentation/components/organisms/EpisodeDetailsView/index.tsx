import React, { useState } from "react";
import { View } from "react-native";
import PlayButton from "@series/components/atoms/PlayButton";
import EpisodeContent from "@series/components/molecules/EpisodeContent";
import Button from "@series/components/atoms/Button";
import componentsStyles from "@core/theme/components-style";
import { seriesOrganismStyles } from "./style";
import Constants from "@constants/Constants";
import { Season } from "@series/domain/entities/season";
import { Episode } from "@series/domain/entities/episode";
import ProgressBar from "@series/components/atoms/ProgressBar";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


export default function EpisodeDetailsView(props: EpisodeDetailsProps) {
  const [seriesState, setSeriesState] = useState("");

  let focusDown = () => props.handleView(Constants.downAction);
  let focusUp = () => props.handleView(Constants.upAction);

  return (
    <View style={seriesOrganismStyles.seriesOrganism}>
      <EpisodeContent {...props} />
      {seriesState === "" && (
        WatchForCredits(setSeriesState, focusUp, focusDown)
      )}
      {seriesState === Constants.subscribedWithCredits && (
        PlayEpisode(setSeriesState, focusUp, focusDown)
      )}
      {seriesState === Constants.startedWatching && (
        ResumeEpisode(focusUp, focusDown)
      )}
    </View>
  );
}

function WatchForCredits(setSeriesState: Function, focusUp: () => void, focusDown: () => void) {
  return (
    <View style={seriesOrganismStyles.buttonSection}>
      <Button
        value={Constants.watchForCredits}
        icon={require("assets/credits.png")}
        onPress={() => setSeriesState(Constants.subscribedWithCredits)}
        onFocus={focusUp}
        onBlur={focusDown}
        style={componentsStyles.primaryButton}
        testID={Constants.TEST_ID_REEDEM_BUTTON}
      />
    </View>
  )
}

function PlayEpisode(setSeriesState: Function, focusUp: () => void, focusDown: () => void) {
  return (
    <View style={seriesOrganismStyles.subscribedWithCredits}>
      <PlayButton
        onPress={() => setSeriesState(Constants.startedWatching)}
        onFocus={focusUp}
        onBlur={focusDown}
        style={componentsStyles.playButton}
        testID={Constants.TEST_ID_PLAY_BUTTON}
      />
      <View style={seriesOrganismStyles.subscribedWithCreditsPadding}>
        <Button
          value={Constants.daysLeft}
          onPress={() => { }}
          onFocus={focusUp}
          onBlur={focusDown}
          style={componentsStyles.secondaryButton}
          testID={Constants.TEST_ID_EXPIRY_BUTTON}
        />
      </View>
    </View>
  )
}

function ResumeEpisode(focusUp: () => void, focusDown: () => void) {
  return (
    <View style={seriesOrganismStyles.startedWatchingSection}>
      <View style={seriesOrganismStyles.progressBar}>
        <ProgressBar height={wp("0.45%")} progress={0.3} />
      </View>
      <View style={seriesOrganismStyles.startedWatching}>
        <View style={seriesOrganismStyles.startedWatchingSubView}>
          <Button
            value={Constants.resume}
            onPress={() => {}}
            onFocus={focusUp}
            onBlur={focusDown}
            style={componentsStyles.primaryButton}
            testID={Constants.TEST_ID_RESUME_BUTTON}
          />
        </View>
        <View style={seriesOrganismStyles.startedWatchingSubView}>
          <Button
            value={Constants.daysLeft}
            onPress={() => {}}
            onFocus={focusUp}
            onBlur={focusDown}
            style={componentsStyles.secondaryButton}
            testID={Constants.TEST_ID_EXPIRY_BUTTON}
          />
        </View>
      </View>
    </View>
  );
}

/**
 * EpisodeDetailProps used to send the data to top level details view from Episode list
 */
export interface EpisodeDetailsProps {

  // Selected season from seasons list scroll view
  selectedSeason: Season;

  // Selected episode of selected season episodes list
  selectedEpisode: Episode;
  handleView: Function;
}
