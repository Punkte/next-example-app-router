import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://d634c250fde114003ec01f279f42a7b8@o4509286556499968.ingest.de.sentry.io/4509286560825424",

  integrations: [
    Sentry.replayIntegration(),
    Sentry.browserTracingIntegration(),
    Sentry.browserProfilingIntegration()
  ],
  // Session Replay
  replaysSessionSampleRate: 1.0, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  tracePropagationTargets: ["localhost", /^https:\/\/next-example-app-router.vercel.app/],
});