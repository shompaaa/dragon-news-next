const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  return data.data;
};
export default async function Home() {
  const categories = await getCategories();
  return (
    <div className="grid grid-cols-12 gap-4 mt-6">
      <div className="col-span-3">
        <h2 className="font-bold text-md">All Categories</h2>
        <ul className="flex flex-col gap-3 mt-6">
          {categories.news_category.map((category) => {

           return <li key={category.category_id} className="bg-slate-100 p-2 rounded-md font-bold text-center text-sm">{category.category_name}</li>
          }
          )}
        </ul>
      </div>
      <div className="col-span-6">
        <h2>All News</h2>
      </div>
      <div className="col-span-3">
        <h2>Social Icons</h2>
      </div>
    </div>
  );
}
