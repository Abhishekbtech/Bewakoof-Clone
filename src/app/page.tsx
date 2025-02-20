"use client";
import { useData } from "@/components/DaraProvider";

export default function Home() {
  const { data, loading, error } = useData();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div >
      <h1>HEloo</h1>
      {data.map((item) => (
        <li key={item._id}>{item.name}</li>
      ))}
    </div>
  );
}
