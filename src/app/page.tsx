import * as Sentry from "@sentry/nextjs";


export default function Home() {

  const heavyComputation = async () => {
    'use server'
    Sentry.startSpan({name: 'heavy computation'}, () => {
      let result = 0;
      for (let i = 0; i < 1000000000; i++) {
        result += i;
      }
      console.log("Computation result:", result);
    })
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        
      <h1 className="text-4xl font-bold tracking-tighter">
        Next.js App Router Template
      </h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={heavyComputation}
      >
        Perform Heavy Computation
      </button>
      <footer className="text-sm text-gray-500">
        Powered by Next.js & Tailwind CSS
      </footer>

    </div>
  );
}
