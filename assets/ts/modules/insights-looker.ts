import { insightsLookerVisualization } from './insights-payload.js';

export interface InsightsVisualization {
  id?: string;
  updateAsync?: (...args: unknown[]) => unknown;
}
export interface InsightsVisualizationRegistry {
  add: (definition: InsightsVisualization, ...args: unknown[]) => unknown;
}

const patched = new WeakSet<InsightsVisualizationRegistry>();

// Fingerprint the exact served updateAsync inspected in the performance trace.
// This is a compatibility check, not a security boundary. Changed upstream code
// must keep its own behaviour until the replacement has been reviewed again.
export const insightsUpdateSignature = (update: (...args: unknown[]) => unknown): string => {
  const source = Function.prototype.toString.call(update).replace(/\r\n/g, '\n');
  let hash = 2166136261;
  for (let index = 0; index < source.length; index++) hash = Math.imul(hash ^ source.charCodeAt(index), 16777619);
  return `${source.length}:${(hash >>> 0).toString(16)}`;
};

export const patchInsightsRegistration = (registry: InsightsVisualizationRegistry): void => {
  if (patched.has(registry)) return;
  patched.add(registry);
  const add = registry.add;
  registry.add = function (definition, ...args): unknown {
    if (definition.id === 'one_hub_prod' && typeof definition.updateAsync === 'function') {
      if (insightsUpdateSignature(definition.updateAsync) === '10343:4ef2c65d') {
        definition.updateAsync = insightsLookerVisualization.updateAsync;
        console.info('[iam Insights payload optimisation] Installed compatible HTML builder');
      } else {
        console.warn(
          '[iam Insights payload optimisation] Upstream updateAsync changed; retaining the original builder'
        );
      }
    }
    return Reflect.apply(add, this, [definition, ...args]);
  };
};

// The signed project-resource URL changes between loads. Hook the stable loader
// before the sandbox's customVisualizationFrameReady event loads that script.
export const installInsightsPayloadOptimisation = (): void => {
  const frame = window as Window & {
    __iamInsightsOptimisePayload?: boolean;
    looker?: { plugins?: { visualizations?: InsightsVisualizationRegistry } };
  };
  if (frame.__iamInsightsOptimisePayload !== true) return;
  const install = (): void => {
    const registry = frame.looker?.plugins?.visualizations;
    if (registry && typeof registry.add === 'function') patchInsightsRegistration(registry);
  };
  install();
  document.addEventListener('customVisualizationFrameReady', install, { once: true });
  document.addEventListener('DOMContentLoaded', install, { once: true });
};
