import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useRouter } from 'next/dist/client/router'
import { format } from "date-fns";
import InfoCard from "../Components/InfoCard";

function Search({ searchResults }) {
    const router = useRouter()
    const { location, startDate, endDate, noOfGuests } = router.query
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndtDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndtDate}`
    return (
        <div>
            <Header placeholder={`${location}`} />
            <main>
                <section className="flex-frow pt-14 px-6">
                    <p className="text-xs ">400+ stays {range}  for {noOfGuests} guestes</p>
                    <h1 className="text-xl font-semibold mb-6 ">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">
                            Cancelation Flexiblity
                        </p>
                        <p className="button">
                            Types of Places
                        </p>
                        <p className="button">
                            Price
                        </p>
                        <p className="button">
                            Rooms and beds
                        </p>
                        <p className="button">
                            More filters
                        </p>
                    </div>
                    <div className="flex flex-col">
                        {searchResults.map((item) =>(
                            <InfoCard
                            key = {item.key}
                            img = {item.img}
                            location = {item.location}
                            price = {item.price}
                            star = {item.star}
                            description = {item.description}
                            title = {item.title}
                            total = {item.total}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch("https://jsonkeeper.com/b/KEA5").then((res) => res.json())

    return {
        props: {
            searchResults,
        }
    }
}