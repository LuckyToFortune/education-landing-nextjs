import Head from 'next/head'
import Navbar from '../components/Navbar/index'
import Banner from '../components/Banner/Banner'
import Companies from '../components/Companies/Companies'
import Tabs from '../components/Courses/Courses'
import Mentor from '../components/Mentor/Mentor'
import Students from '../components/Students/Students'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'


export default function Home() {
  return (
    <>
      <Head>
        <title>Courses</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Banner />
        <Companies />
        <Tabs />
        <Mentor />
        <Students />
        <Newsletter />
        <Footer />
      </main>
    </>
  )
}
