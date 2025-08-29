export function track(event: string, data?: unknown) {
  const id = import.meta.env.VITE_ANALYTICS_ID;
  if (!id) return;
  console.log('track', id, event, data);
}
