import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
// import { angularOutputTarget } from '@stencil/angular-output-target'; // desativado por ora

export const config: Config = {
  namespace: 'support-library-ui',
  srcDir: 'src/components',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      collectionDir: 'collection',
    },
    {
      type: 'dist-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    reactOutputTarget({
      componentCorePackage: '@support-library/ui',
      proxiesFile: './src/react/components.ts',
      includeImportCustomElements: true,
      includeDefineCustomElements: true,
      customElementsDir: './dist/components',
    } as any),

    // Angular output desativado temporariamente para evitar erro de constructor
    // angularOutputTarget({
    //   componentCorePackage: '@support-library/ui',
    //   directivesProxyFile: './src/angular/directives/proxies.ts',
    //   directivesArrayFile: './src/angular/directives/index.ts',
    //   directivesUtilsFile: './src/angular/directives/utils.ts',
    //   outputDir: './src/angular',
    //   componentProviders: true,
    // }),
  ],
};
