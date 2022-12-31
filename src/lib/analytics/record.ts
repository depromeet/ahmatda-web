import { gaEvent } from './gtag';
import { mixpanelTrack } from './mixpanel';

import { isProd } from '@/utils/utils';

const recordEvent = ({ action, category, label, value }: Parameters<typeof gaEvent>[0]) => {
  if (isProd(process.env.NODE_ENV)) return;

  gaEvent({ action, category, label, value });
  mixpanelTrack(action, { category, label, value });
};

export default recordEvent;
