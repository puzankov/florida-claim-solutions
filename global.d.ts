declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      eventParams?: Record<string, unknown>
    ) => void;
  }
}

export {};
