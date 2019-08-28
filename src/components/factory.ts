// components parser
import AxisParser from './axis/parser';
import GuideLine from './guideLine';
import LabelParser from './label/parser';

// components state methods
import tooltipState from './tooltip/state';

const COMPONENT_MAPPER = {
  axis: AxisParser,
  label: LabelParser,
  guideLine: GuideLine,
};

const STATE_MAPPER = {
  tooltip: tooltipState,
};

export function getComponent(name, cfg) {
  const Components = COMPONENT_MAPPER[name];
  return new Components(cfg).config;
}

export function getComponentStateMethod(name, type) {
  return STATE_MAPPER[name][type];
}
