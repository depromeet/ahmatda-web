export const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

export const mixpanelTrack = (eventName: string, props: any) => {
  try {
    if ((window as any).mixpanel) {
      (window as any).mixpanel.track(eventName, props);
    }
  } catch (e) {
    console.error(e);
  }
};
