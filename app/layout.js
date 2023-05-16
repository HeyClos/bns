import './globals.css'

export const metadata = {
  title: 'Beef Noodle Soup App',
  description: 'Re-imagining how recipes should be followed on a phone.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <div className='flex justify-center text-sm text-white opacity-50 bottom-8'>
          © 2023 BNS. All rights reserved.
        {/* <p>
          Made with
        </p>
        <span class="w-5 h-5 ml-1 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://img.icons8.com/fluency/512/hearts.png)]"></span>
        by
        <div>
          <a class="mx-2 text-blue-600 hover:underline dark:text-gray-200" href="https://www.instagram.com/whatchaocooking/"> @whatchaocooking</a> 
        </div> */}
      </div>
      </body>
    </html>
  )
}
