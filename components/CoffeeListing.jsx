"use client"
import React, { useState, useEffect } from "react";

const CoffeeList = () => {
  const [coffees, setCoffees] = useState(null);

  useEffect(() => {
    fetchCoffees();
  }, []); // Execute only once on component mount

  const fetchCoffees = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
      );
      const data = await response.json();
      setCoffees(data);
    } catch (error) {
      console.error("Error fetching coffee data:", error);
    }
  };

  return (
    <div >
      {coffees ? (
        <div className="md:grid md:grid-cols-2 md:gap-10 xl:grid xl:grid-cols-3">
          {coffees.map((coffee) => (
            <div className="w-[260px] h-[160ox]" key={coffee.id}>
              <img className="rounded-xl" src={coffee.image} alt={coffee.name} />
              {coffee.popular && <div className="bg-[#F6C768] rounded-xl inline-block text-[#111315] text-[0.625rem] font-bold p-1 pl-3 pr-3 absolute mt-[-150px] ml-[10px]">Popular</div>}
               <div className="flex justify-between items-center mt-[15px] mb-[10px]"> 
                  <h3 className="font-semibold">{coffee.name}</h3>
                  <div className="bg-[#BEE3CC] p-1 rounded-md text-[#111315] text-[0.875rem] font-bold pl-2 pr-2">
                    <p>{coffee.price}</p>
                  </div>
                </div>
              {coffee.rating ? (
                <div className="flex justify-between mb-16">
                    <div className="flex space-x-1">
                        <img src="../Star_fill.svg" alt="star"/>
                        <div>{coffee.rating} </div>
                        {coffee.votes ? <div className="text-[#6F757C] font-semibold">({coffee.votes} votes)</div> : null}
                    </div>
                    <div className="text-[#ED735D] float-right">   
                        {coffee.available === false && <div>Sold out</div>}
                    </div>
                </div>
              ) : (
                <div className="text-[#6F757C] flex font-semibold">
                    <img src="../Star.svg" alt="star" className="mr-[10px]"/>
                    <p>No ratings</p>       
                </div>
              )}
              
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoffeeList; 