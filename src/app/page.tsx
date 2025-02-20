"use client";
import { useData } from "@/components/DaraProvider";
import { ShowData } from "@/components/UI/ShowData";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const { data, loading, error } = useData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const trendingData = data.filter((item) => item.sellerTag === "trending").slice(0, 10);
  const topratedData = data.filter((item) => item.sellerTag === "top rated").slice(0, 10);
  const newarrivalData = data.filter((item) => item.sellerTag === "new arrival").slice(0, 10);
  const bestsellerData = data.filter((item) => item.sellerTag === "best seller").slice(0, 10);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="px-3">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Trending</h1>
        </div>
        {/* Move Slider here to wrap all products */}
        <Slider {...settings}>
          {trendingData.length > 0 ? (
            trendingData.map((item) => <ShowData key={item._id} item={item} />)
          ) : (
            <p>No Trending Data found.</p>
          )}
        </Slider>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Top Rated</h1>
        </div>
        {/* Move Slider here to wrap all products */}
        <Slider {...settings}>
          {topratedData.length > 0 ? (
            topratedData.map((item) => <ShowData key={item._id} item={item} />)
          ) : (
            <p>No Top Rated Data found.</p>
          )}
        </Slider>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">New Arrival</h1>
        </div>
        {/* Move Slider here to wrap all products */}
        <Slider {...settings}>
          {newarrivalData.length > 0 ? (
            newarrivalData.map((item) => <ShowData key={item._id} item={item} />)
          ) : (
            <p>No New Arrival Data found </p>
          )}
        </Slider>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Best Seller</h1>
        </div>
        {/* Move Slider here to wrap all products */}
        <Slider {...settings}>
          {bestsellerData.length > 0 ? (
            bestsellerData.map((item) => <ShowData key={item._id} item={item} />)
          ) : (
            <p>No Best Seller Data found.</p>
          )}
        </Slider>
      </div>
    </div>
  );
}
