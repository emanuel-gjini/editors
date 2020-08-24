import React, { lazy, Suspense } from 'react';

const LazyTextEditor = lazy(() => import('./TextEditor'));

const TextEditor = props => (
  <Suspense fallback={null}>
    <LazyTextEditor {...props} />
  </Suspense>
);

export default TextEditor;
