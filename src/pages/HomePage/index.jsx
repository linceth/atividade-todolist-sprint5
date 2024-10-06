import { useState, useContext } from "react";
import { FruitForm } from "../../components/FruitForm";
import { FruitList } from "../../components/FruitList";
import { FruitContext } from "../../providers/FruitContext";

export const HomePage = () => {
   
   return (
      <main>
         <FruitForm />
         <FruitList />
      </main>
   );
};
