// rollup.config.js

export default { // can be an array (for multiple inputs)
    // core input options
    external,
    input, // required
    plugins,
  
    // advanced input options
    cache,
    inlineDynamicImports,
    manualChunks,
    onwarn,
    preserveEntrySignatures,
    preserveModules,
    strictDeprecations,
  
    // danger zone
    acorn,
    acornInjectPlugins,
    context,
    moduleContext,
    preserveSymlinks,
    shimMissingExports,
    treeshake,
  
    // experimental
    experimentalCacheExpiry,
    perf,
  
    output: { // required (can be an array, for multiple outputs)
      // core output options
      dir,
      file,
      format, // required
      globals,
      name,
      plugins,
  
      // advanced output options
      assetFileNames,
      banner,
      chunkFileNames,
      compact,
      entryFileNames,
      extend,
      footer,
      hoistTransitiveImports,
      interop,
      intro,
      minifyInternalExports,
      outro,
      paths,
      sourcemap,
      sourcemapExcludeSources,
      sourcemapFile,
      sourcemapPathTransform,
  
      // danger zone
      amd,
      esModule,
      exports,
      externalLiveBindings,
      freeze,
      indent,
      namespaceToStringTag,
      noConflict,
      preferConst,
      strict,
      systemNullSetters
    },
  
    watch: {
      buildDelay,
      chokidar,
      clearScreen,
      skipWrite,
      exclude,
      include
    }
  };