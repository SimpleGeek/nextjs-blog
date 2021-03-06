import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>SimpleGeek, learning about NextJS</p>
        <p>
          (This is a sample website - you can build a site like this on{' '}
          <a href="https://nextjs.org/learn">the Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
