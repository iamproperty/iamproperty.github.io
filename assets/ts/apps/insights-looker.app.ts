import { insightsLookerVisualization } from '../../looker/one_hub_prod.js';

declare const looker: {
  plugins: { visualizations: { add(definition: typeof insightsLookerVisualization): void } };
};

// Production Looker entry: register the optimised definition directly, without
// Chrome overrides, global feature flags, or the compatibility registration hook.
looker.plugins.visualizations.add(insightsLookerVisualization);
