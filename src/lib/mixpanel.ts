export const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

export const mixpanelTrack = (eventName: string, ...props: unknown[]) => {
  try {
    if (window.mixpanel) {
      window.mixpanel.track(eventName, props);
    }
  } catch (e) {
    console.error(e);
  }
};
