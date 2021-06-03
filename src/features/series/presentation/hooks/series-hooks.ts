import { useEffect, useState } from "react";
import diContainer from "@di/di-config";
import { SERIES_DI_TYPES } from "@series/di/series-di-types";
import { GetEpisodes, EpisodeRequestParams } from "@series/domain/use-cases/get-episodes";
import { GetSeasons, SeasonRequestParams } from "@series/domain/use-cases/get-seasons";
import { Season } from "@series/domain/entities/season";
import { Episode } from "@series/domain/entities/episode";
import { Failure, ServerFailure } from "@core/api/failure";

export function useFetchSeasons(seriesId: string, pageNumber: number) {
  const [seasonsData, setSeasonsData] = useState<any>(null)
  const [defaultSeason, setDefaultSeason] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  // GetSeasons use case instance from DI container
  let getSeasonsInstance = diContainer.get<GetSeasons>(SERIES_DI_TYPES.GetSeasons)

  let fetchData = async () => {
    let seasonsRes = await getSeasonsInstance.execute(new SeasonRequestParams(seriesId, pageNumber))
    console.log("seasonsRes===>", seasonsRes);
    let firstSeason = getFirstSeason(seasonsRes);
    console.log("firstSeason===>", firstSeason);
    if (firstSeason) {
      // Fetch initial page of episodes list for first season
      firstSeason.episodes = await getEpisodes(seriesId, firstSeason, 1)
      console.log("firstSeason.episodes===>", firstSeason.episodes);

    }
    setDefaultSeason(firstSeason);
    setSeasonsData(seasonsRes);
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [seriesId, pageNumber])

  // Return the fetched seasons
  return {
    seasonsData, defaultSeason, loading
  }
}

export function useFetchEpisode(seriesId: string, season: Season | undefined, pageNumber: number) {
  const [episodes, setEpisodes] = useState({})

  useEffect(() => {
    getEpisodes(seriesId, season, pageNumber).then(data => setEpisodes(data))
  }, [season?.id, pageNumber])

  console.log(episodes)
  // Return the fetched seasons
  return episodes
}

async function getEpisodes(seriesId: string, season: Season | undefined, pageNumber: number): Promise<Array<Episode> | Failure> {
  if (season?.episodes && season?.episodes instanceof Array && season?.episodes?.length > 0) {
    return season?.episodes;
  } else {
    // GetEpisode use case instance from DI container
    let getEpisodesInstance = diContainer.get<GetEpisodes>(
      SERIES_DI_TYPES.GetEpisodes
    );
    if (season && season.id) {
      let episodes = await getEpisodesInstance.execute(
        new EpisodeRequestParams(seriesId, season.id, pageNumber)
      );
      return episodes;
    }
    // Return server failure if season id undefined
    return new ServerFailure();
  }
}

function getFirstSeason(seasons: Array<Season> | Failure): Season | undefined {
  if (seasons
    && seasons instanceof Array
    && seasons.length > 0) {
    return seasons[0]
  }

  // Return null if season is empty
  return undefined
}