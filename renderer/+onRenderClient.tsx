import './styles/vike.css';
import { createRoot, hydrateRoot, type Root } from 'react-dom/client';
import { PageShell } from './PageShell';
import type { PageContext } from './types';

let root: Root | null = null;

export const onRenderClient = async (pageContext: PageContext) => {
  const { Page, pageProps } = pageContext;
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  const container = document.getElementById('page-view');
  if (!container) {
    throw new Error('Could not find root element to mount to');
  }

  const shouldHydrate = pageContext.isHydration ?? root === null;

  if (shouldHydrate) {
    root = hydrateRoot(container, page);
    return;
  }

  if (!root) root = createRoot(container);
  root.render(page);
};
