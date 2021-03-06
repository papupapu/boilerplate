import React from 'react';
import ReactDom from 'react-dom/server';

import HTMLDoc from './HTMLDoc';

const render = (html, preloadedState, helmet) => {
  const htmlBody = `
    <div id="root">${html}</div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    <script src="/build/main.js"></script>
    <script src="/build/vendor.js"></script>
  `;
  const docHthml = ReactDom.renderToStaticMarkup(
    <HTMLDoc
      helmet={helmet}
      bodyHtml={htmlBody}
    />,
  );
  return `<!DOCTYPE html>${docHthml}`;
};

export default render;
