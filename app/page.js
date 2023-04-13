import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-end font-mono text-sm lg:flex">
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-white-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> */}
        {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-white-300 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4">
          Share your recipes!
        </p> */}
        <div className=" left-0 flex justify-center static h-auto w-auto bg-none">
            Made with <span class="w-5 h-5 ml-1 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://img.icons8.com/fluency/512/hearts.png)]"></span>
            by
            <a class="mx-2 text-blue-600 hover:underline dark:text-gray-200" href="https://www.instagram.com/whatchaocooking/"> @whatchaocooking</a> 
        </div>
      </div>
      <div className="relative flex place-items-center justify-between">
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"> */}
        <a className="mx-5" href='https://play.google.com/store/apps/details?id=com.kinpo.bns&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
          <Image
            className="relative "
            src="/google-play-badge.svg"
            // src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.eps'
            alt="Get it on Google Play."
            width={180}
            height={37}
            priority
          />
        </a>
        <a className="mx-5" href='https://apps.apple.com/us/app/beef-noodle-soup-bns/id1672179708'>
          <Image
            className="relative "
            src="/app_store.svg"
            alt="Now available on the app store."
            width={180}
            height={37}
            priority
          />
        </a>
      </div>
      <div className=" text-white mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:flex lg:justify-center lg:text-left lg:content-end">
        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:shadow-indigo-500/40 hover:bg-blue-700/20 hover:dark:shadow-neutral-700/20 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            How to use{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Check out our in-depth walkthrough.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:shadow-indigo-500/40 hover:bg-blue-700/20 hover:dark:shadow-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Our Story{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Learn about our journey and how the BNS app came to be.
          </p>
        </a> 
      </div>
    </main>
  )
}
