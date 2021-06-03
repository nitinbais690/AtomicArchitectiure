import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Season } from "@series/domain/entities/season";
import { Episode } from "@series/domain/entities/episode";
import { EpisodeDetailsProps } from "@series/components/organisms/EpisodeDetailsView";
import TotalCredits from "@series/components/atoms/TotalCredits";
import SeasonsAndEpisodesHeader from "@series/components/molecules/SeasonsAndEpisodesHeader";
import SeasonsAndEpisodesView from "@series/components/organisms/SeasonsAndEpisodesView";
import EpisodeDetailsView from "@series/components/organisms/EpisodeDetailsView";
import Constants from "@constants/Constants";
import SeasonsAndEpisodesTemplate from "@series/components/templates/SeasonAndEpisode/template";
import { seriesTemplateStyles } from "./style";
import ImageBackgroundView from "@series/components/atoms/ImageBackgroundView";
import { Failure } from "@core/api/failure";

export default function SeriesTemplate(props: SeriesTemplateProps) {
  const [selectedEpisode, setSelectedEpisode] = useState<Episode>();
  const [selectedSeason, setSelectedSeason] = useState<Season>();

  let backgroundImage = background(props.initialSeason);
  const [ref, setRef] = useState(Object);
  const [seasonPosition, setSeasonPosition] = useState(null);

  // Update default season and Episode
  useEffect(() => {
    let defaultEpisode = getFirstEpisode(props.initialSeason);
    let defaultSeason = props.initialSeason;
    setSelectedEpisode(defaultEpisode);
    setSelectedSeason(defaultSeason);
  }, [props.initialSeason]);

  /*
    move seasons and episodes view to top when focus go to seasons view  
  move view to of the page when focus moved from seasons view to buttons in episodes content view
  */
  let handleView = (value: String) => {
    if (value == Constants.upAction) {
      moveViewToTop(ref);
    } else if (value == Constants.downAction) {
      moveSeasonsAndEpisodesToTop(ref, seasonPosition);
    }
  };

  // this function will be called when episode is selected
  let onSelectEpisode = (episode: Episode, season: Season) => {
    moveViewToTop(ref);
    setSelectedEpisode(episode);
    setSelectedSeason(season);
  };

  return (
    <View style={seriesTemplateStyles.seriesScreen}>
      <ScrollView
        style={seriesTemplateStyles.scrollView}
        ref={setRef}
        horizontal={false}
      >
        <ImageBackgroundView
          source={{ uri: backgroundImage }}
          style={seriesTemplateStyles.seriesImage}
        >
          <LinearGradient
            style={seriesTemplateStyles.linearGradient}
            colors={["rgba(12, 16, 33, 0.6 )", "rgba(200, 200, 200, 0.1)"]}
            start={{ x: 0.3, y: 0.5 }}
            end={{ x: 0.5, y: 0.5 }}
          >
            <View style={seriesTemplateStyles.seriesContainer}>
              <View style={seriesTemplateStyles.totalCredits}>
                <TotalCredits value={Constants.creditsValue} />
              </View>
              {EpisodeDetailsSection(
                selectedSeason,
                selectedEpisode,
                handleView
              )}
            </View>
          </LinearGradient>
        </ImageBackgroundView>

        {SeasonsAndEpisodes(setSeasonPosition, props, onSelectEpisode)}
      </ScrollView>
    </View>
  );
}

function EpisodeDetailsSection(
  season: Season | undefined,
  episode: Episode | undefined,
  handleView: Function
) {
  return (
    <View style={seriesTemplateStyles.seriesMainContent}>
      <View style={seriesTemplateStyles.seriesSection}>
        <View style={seriesTemplateStyles.seriesContent}>
          {SeriesDetailsSection(season, episode, handleView)}
        </View>
      </View>
    </View>
  );
}

function SeriesDetailsSection(
  season: Season | undefined,
  episode: Episode | undefined,
  handleView: Function
) {
  if (season !== undefined && episode !== undefined) {
    let episodeDetailsProps: EpisodeDetailsProps = {
      selectedSeason: season,
      selectedEpisode: episode,
      handleView: handleView,
    };
    return <EpisodeDetailsView {...episodeDetailsProps} />;
  }
}

function SeasonsAndEpisodes(
  setSeasonPosition: Function,
  props: SeriesTemplateProps,
  onSelectEpisode: Function
) {
  return (
    <View
      style={seriesTemplateStyles.seasonFullViewHeight}
      onLayout={(event) => {
        const layout = event.nativeEvent.layout;
        console.log("height:", layout.height);
        console.log("width:", layout.width);
        console.log("x:", layout.x);
        console.log("y:", layout.y);
        setSeasonPosition(layout.y);
      }}
    >
      <SeasonsAndEpisodesTemplate
        headerView={<SeasonsAndEpisodesHeader />}
        bodyView={
          <SeasonsAndEpisodesView
            seriesId={props.seriesId}
            seasons={props.seasonsData}
            onSelectEpisode={onSelectEpisode}
            selectedSeasonId={props.initialSeason?.id ?? ""}
          />
        }
      />
    </View>
  );
}

// move view to top of the page
function moveViewToTop(ref: any) {
  ref.scrollTo({
    x: 0,
    y: 0,
    animated: true,
  });
}

// move specific position to top of the page
function moveSeasonsAndEpisodesToTop(ref: any, seasonPosition: number | null) {
  ref.scrollTo({
    x: 0,
    y: seasonPosition,
    animated: true,
  });
}

function getFirstEpisode(season: Season | undefined): Episode | undefined {
  if (
    season &&
    season.episodes instanceof Array &&
    season.episodes.length > 0
  ) {
    return season.episodes[0];
  }
  return undefined;
}

function background(initialSeason: Season | undefined): string {
  // Set default as ""
  let imageSource = "";
  if (initialSeason && initialSeason.image) {
    imageSource = initialSeason.image;
  }
  return imageSource;
}

export interface SeriesTemplateProps {
  seriesId: string;
  seasonsData: Array<Season> | Failure;
  initialSeason: Season | undefined;
}
