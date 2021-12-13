import Head from 'next/head'
import Layout, { siteTitle } from './components/layout'
import utilStyles from './styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Full stack software engineer with a passion for web design and functionality. With extensive experience in the service industry, I prioritize efficiency under pressure and bring a constant commitment to customer satisfaction in both individual and team roles. Skilled in several frontend and backend technologies, and always eager to expand expertise.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}