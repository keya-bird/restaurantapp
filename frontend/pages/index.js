import { useState } from "react";
import RestaurantList from "/components/RestaurantList";
import Head from "next/head";

export default function Home() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Head>
        <title>DishesKeya App!</title>
        <meta name="description" content="Capstone Restaurant Project for MIT xPRO" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/bowlsoup.png" />
      </Head>
      <main className="mx-auto container m-6">
        <div className="mb-6">
          <input
            className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            type="text"
            placeholder="Search restaurants"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <RestaurantList query={query} />
      </main>
    </>
  );
}
