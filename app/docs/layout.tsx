//import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

import Image from 'next/image';
import DT from '@/app/public/docs/DT.svg';
import UL from '@/app/public/docs/UL.svg';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout tabMode="navbar" tree={source.pageTree} {...baseOptions} 
    nav={{ ...baseOptions.nav, mode: 'top' }}
    sidebar={{
      
      tabs: true,
      
    }}>
      {children}
    </DocsLayout>
  );
}
