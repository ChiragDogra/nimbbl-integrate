import type { NextPage } from 'next'
import Head from 'next/head'
import logo from '../assets/nimbbl_logo.png'
import Image from 'next/image'
import Check from '../components/check'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href={'/favicon.ico'} />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nimbbl.biz/">
            nimbbl.
          </a>
        </h1>

        <div className="my-20">
          <Check />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://nimbbl.biz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src={logo} alt="Vercel Logo" width={72} height={72} />
        </a>
      </footer>
    </div>
  )
}

export default Home
