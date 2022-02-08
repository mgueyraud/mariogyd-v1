// log the pageview with their URL
export const pageview = (url: URL) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string, {
        page_path: url
    });
}
  
type GTagEvent = {
    action: string;
    category: string;
    label: string;
    value: number;
  };
  
  // https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};