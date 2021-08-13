import Head from 'next/head'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import LargeCard from '../Components/LargeCard'
import MediumCard from '../Components/MediumCard'
import SmallCards from '../Components/SmallCards'
import ThreeCard from '../Components/ThreeCard'

export default function Home({ exploreData , cardData}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <main className = "max-w-7xl mx-auto px-8 sm:px-16">
        <section className = "py-6">
          <h2 className = "text-4xl font-semibold">Explore nearby</h2>
          <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData.map(item => (
            <SmallCards key ={item.img}  img ={item.img} distance = {item.distance} location = {item.location}/>
          ) )}
          </div>
        </section>
        <section>
          <h2 className = "text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className = "flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">

          {cardData.map(item =>(
            <MediumCard key = {item.img} img = {item.img} title = {item.title}/>
          ))}
          </div>
        </section>
        <LargeCard img = "https://links.papareact.com/4cj" title = "The greatest Outdoors" description = "Wishlists curated by airbnb" buttonText = "Learn more"/>
          <section>
            <h2 className = "text-4xl font-semibold py-8">Discover Experiences</h2>
            <h3 className = "text-3xl ">Unique activities with local experts–in person or online.</h3>
        <ThreeCard />
          </section>
      </main>


      <Footer/>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://api.jsonbin.io/b/61139c18d5667e403a3fbfd4').then(res => res.json())
  const cardData = await fetch('https://jsonkeeper.com/b/77IW').then(res=>res.json())

  return{
    props :{
      // key: value
      exploreData : exploreData,
      cardData:cardData
    }
  }
}
