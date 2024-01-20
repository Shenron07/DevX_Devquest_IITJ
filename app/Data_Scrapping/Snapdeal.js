// snapdeal.js
import { SearchQuery } from "../Components/Search";
import { Squery } from "../work";
async function getSnapdealData() {
  const res = await fetch(
    `/api/scrape(snapdeal)?q=${Squery}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  try {
    return await res.json();
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
    throw new Error("Failed to parse JSON data");
  }
}

export default async function ActSnapdeal() {
  try {
    const data = await getSnapdealData();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Propagate the error if necessary
  }
}
