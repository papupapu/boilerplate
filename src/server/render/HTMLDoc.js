/* eslint react/no-danger: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  helmet: PropTypes.instanceOf(Object),
  bodyHtml: PropTypes.string,
};

const defaultProps = {
  helmet: {},
  bodyHtml: '',
};

const HTMLDoc = ({
  helmet,
  bodyHtml,
}) => (
  <html lang="it">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      {helmet && 'meta' in helmet ? helmet.meta.toComponent() : null}

      {helmet && 'title' in helmet ? helmet.title.toComponent() : null}

      {helmet && 'link' in helmet ? helmet.link.toComponent() : null}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Racing+Sans+One|Roboto:300,400" type="text/css" />
      <link rel="stylesheet" href="/build/style.css" type="text/css" />
    </head>
    <body dangerouslySetInnerHTML={{ __html: bodyHtml }} />
  </html>
);

HTMLDoc.propTypes = propTypes;
HTMLDoc.defaultProps = defaultProps;
export default HTMLDoc;
