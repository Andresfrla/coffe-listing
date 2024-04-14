import CoffeeList from "@/components/CoffeeListing";

export default function Home() {

  return (
    <main className="bg-[url('../public/bg-cafe.jpg')] bg-cover w-full h-[300px] bg-[#111315]">
      <div className="absolute bg-[url('../public/vector.svg')] bg-no-repeat bg-[right_top_4rem] bg-[#1B1D1F] mt-[160px] ml-[120px] mr-[120px] pl-8 pr-8 md:pl-[120px] md:pr-[120px] rounded-xl flex flex-col items-center">
        
        <h1 className="mt-[110px] text-[#FEF7EE] text-[2rem]">Our Collection</h1>
        <p className="text-center text-[#6F757C] text-[1rem] mt-[20px] xl:pl-[160px] xl:pr-[160px] xl:text-center">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        
        <div className="mt-[25px] text-[#FEF7EE] flex space-x-8 text-[0.875rem]">
          <button className="bg-[#6F757C] rounded-md p-2 pl-3 pr-3">All Products</button>
          <button>Available Now</button>
        </div>

        <div className="mt-[40px]">
          <CoffeeList />
        </div>
      </div>
    </main>
  );
}
