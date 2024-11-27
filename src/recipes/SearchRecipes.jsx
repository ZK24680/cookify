import { useEffect, useState } from "react";
import Search from "../components/Search";
import Recipes from "./Recipes";
import useRecipes from "./useRecipes";
import Message from "../components/Message";
import Spinner from "../components/Spinner";
import useUrlSearch from "../hooks/useUrlSearch";
import { useAuth } from "../contexts/AuthContext";

function SearchRecipes() {
  const search = useUrlSearch();
  const { fullName } = useAuth();
  const { data, error, isLoading, refetch } = useRecipes();

  useEffect(
    function () {
      if (search === null) return;
      refetch();
    },
    [search, refetch],
  );

  return (
    <div className="h-full w-full">
      <Search isLoading={isLoading} />

      {isLoading && <Spinner />}

      {data === null && (
        <Message message={`😔 Oops! We couldn’t find any recipes for that!`} />
      )}

      {data === undefined && !isLoading && (
        <Message
          message={`🧑‍🍳 Hello ${fullName.split(" ").at(0)}! Start your cooking journey by searching for delicious meals 🍴`}
        />
      )}

      {data && <Recipes recipes={data} />}
    </div>
  );
}

export default SearchRecipes;
