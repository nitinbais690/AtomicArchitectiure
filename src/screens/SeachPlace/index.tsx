import React from 'react';

// container/component
import SearchPlaceContainer from '@app/containers/SearchPlace';

const SearchPlaceScreen = (props: any) => {
  return <SearchPlaceContainer navigation={props.navigation} />;
};

export default SearchPlaceScreen;
