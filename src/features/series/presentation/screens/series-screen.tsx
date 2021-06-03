import React from "react";
import SeriesTemplate, { SeriesTemplateProps } from "@series/components/templates/series-template/template";
import { useFetchSeasons } from "@series/hooks/series-hooks";
import Constants from "@constants/Constants";
import Loader from "@series/components/atoms/Loader";

const SeriesScreen = () => {
  let seriesId = Constants.seriesId;
  let seasonPageNumber = Constants.seasonPageNumber;

  let seasonsRes = useFetchSeasons(seriesId, seasonPageNumber);

  let seriesTemplateProps: SeriesTemplateProps = {
    seriesId: seriesId,
    seasonsData: seasonsRes.seasonsData,
    initialSeason: seasonsRes.defaultSeason,
  };

  return seasonsRes.loading ? <Loader size={80}/> : <SeriesTemplate {...seriesTemplateProps} />;
};

export default SeriesScreen;
