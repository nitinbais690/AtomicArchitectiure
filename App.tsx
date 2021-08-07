import React from 'react';
import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src';

export default function App() {
  useCachedResources();
  return <Navigation />;
}
