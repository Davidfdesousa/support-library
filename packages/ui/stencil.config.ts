import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'support-library-ui',
  srcDir: 'src/components',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: 'loader',
      collectionDir: 'collection',
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
      generateTypeDeclarations: true,
    },
    {
      type: 'docs-readme',
    },
    reactOutputTarget({
      componentCorePackage: '@support-library/ui',
      proxiesFile: './src/react/components.ts',
      includeImportCustomElements: true,
      includeDefineCustomElements: true,
    } as any),
  ],
};
