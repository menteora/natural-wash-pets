import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';
import { PageShell } from './PageShell';
import type { PageContext } from './types';

export const onRenderHtml = async (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext;

  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const Head = pageContext.exports?.Head;
  const headHtml = typeof Head === 'function' ? renderToStaticMarkup(<Head />) : '';

  return escapeInject`<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap" rel="stylesheet" />
    ${dangerouslySkipEscape(headHtml)}
  </head>
  <body class="bg-natural-50 text-natural-900 selection:bg-natural-200">
    <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
  </body>
</html>`;
};
