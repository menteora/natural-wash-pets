import type React from 'react';

export type PageContext = {
  Page: React.ComponentType<any>;
  pageProps?: Record<string, unknown>;
  exports?: {
    Head?: React.ComponentType;
  };
  isHydration?: boolean;
};
