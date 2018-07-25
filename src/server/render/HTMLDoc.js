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
      <link rel="stylesheet" href="/assets/style/reset.css" type="text/css" />
      <link rel="stylesheet" href="/build/style.css" type="text/css" />
      {helmet.title.toComponent()}
      {helmet.meta.toComponent()}
      {helmet.link.toComponent()}
    </head>
    <body dangerouslySetInnerHTML={{ __html: bodyHtml }} />
  </html>
);

HTMLDoc.propTypes = propTypes;
HTMLDoc.defaultProps = defaultProps;
export default HTMLDoc;
