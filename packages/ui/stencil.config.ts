import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'support-library-ui',
  srcDir: 'src/components',
  outputTargets: [
    // 1) "dist" clássico (não gera .d.ts)
    {
      type: 'dist',
      esmLoaderPath: 'loader',
      collectionDir: 'collection',
    },
    // 2) "dist-custom-elements" gera Web Components + .d.ts
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
      generateTypeDeclarations: true,
    },
    // 3) Docs
    {
      type: 'docs-readme',
    },
    // 4) React Output
    reactOutputTarget({
      componentCorePackage: '@support-library/ui',
      proxiesFile: './src/react/components.ts',
      includeImportCustomElements: true,
      includeDefineCustomElements: true,
    } as any),
  ],
};
