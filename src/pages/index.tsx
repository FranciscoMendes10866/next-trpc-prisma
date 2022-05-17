import type { NextPage } from 'next'
import Head from 'next/head'
import { trpc } from '@/utils/trpc'

const Home: NextPage = () => {
  const { data } = trpc.useQuery(['findMemes']);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {data && <p>{JSON.stringify(data, null, 2)}</p>}
      </main>
    </div>
  )
}

export default Home