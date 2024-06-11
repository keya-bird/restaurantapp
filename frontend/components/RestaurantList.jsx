import { gql, useQuery } from "@apollo/client";
import Link from "next/link"; 
import Loader from "./Loader";
import Image from "next/image";
const DEFAULT_IMAGE = "/placeholder.png"; // Replace with your desired placeholder path

const QUERY = gql`
  query GetRestaurants {
    restaurants {
      data {
        id
        attributes {
          name
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

function RestaurantCard({ data }) {
 

  
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="h-full bg-yellow-100 rounded-2xl">
      <Image
  className="w-full rounded-2xl"
  height={300}
  width={300}
  src={`${process.env.NEXT_PUBLIC_API_URL || "https://restaurantapp-jqhf.onrender.com"}${
    data.attributes && data.attributes.image && data.attributes.image.data
      ? data.attributes.image.data.attributes.url
      : "/placeholder.png" // Replace with your placeholder image path
  }`}
  alt="Restaurant Placeholder Image"
  unoptimized={true} // Remove in production for optimization
/>



        <div className="p-8">
          <h3 className="mb-3 font-heading text-xl text-gray-900 hover:text-gray-700 group-hover:underline font-black">
            {data.attributes.name}
          </h3>
          <p className="text-sm text-gray-500 font-bold">
            {data.attributes.description}
          </p>
          <div className="flex flex-wrap md:justify-center -m-2">
            <div className="w-full md:w-auto p-2 my-6">
              <Link
                className="block w-full px-12 py-3.5 text-lg text-center text-white font-bold bg-rose-950 hover:bg-lime-400 focus:ring-4 focus:ring-gray-600 rounded-full"
                href={`/restaurant/${data.id}`}
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RestaurantList(props) {
  const { loading, error, data } = useQuery(QUERY);

  if (error) return "Error loading restaurants";
  if (loading) return <Loader />;

  if (data.restaurants.data && data.restaurants.data.length) {
    const searchQuery = data.restaurants.data.filter((query) =>
      query.attributes.name.toLowerCase().includes(props.query.toLowerCase())
    );

    if (searchQuery.length != 0) {
      return (
        <div className="py-16 px-8 bg-white rounded-3xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap -m-4 mb-6">
              {searchQuery.map((res) => {
                return <RestaurantCard key={res.id} data={res} />;
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>No Restaurants Found</h1>;
    }
  }
  return <h5>Add Restaurants</h5>;
}

export default RestaurantList;
