const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { PHASE_PRODUCTION_BUILD } = require('next/constants');
const { development, staging, production } = require('./enviroments');
module.exports = phase => {
  const isProductionBuild =
    phase === PHASE_PRODUCTION_BUILD && process.env.NODE_ENV === 'production';
  const isProd = isProductionBuild && process.env.STAGING !== '1';
  const isStaging = isProductionBuild && process.env.STAGING === '1';

  const env = isStaging ? staging : isProd ? production : development;

  return withBundleAnalyzer(
    withImages({
      distDir: './build',
      env,
    })
  );
};
