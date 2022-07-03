import React from "react";

const Pokemon = ({ pokemon }) => {
  if (!pokemon.name) {
    return null;
  }

  return (
    <div class="flex flex-col justify-center items-center ">
      <div>
        <h1 className="text-gray-900 text-xl font-medium mb-2">
          Pokemon Name: {pokemon.species.name}
        </h1>
      </div>
      <div>
        <img
          className="rounded-t-lg h-60
          w-60 object-cotain"
          src={pokemon.sprites.front_default}
          alt={pokemon.species.name}
        />
      </div>
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          Hit Points:{pokemon.stats[0].base_stat}
        </h5>
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          Attack:{pokemon.stats[1].base_stat}
        </h5>
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          Defense:{pokemon.stats[2].base_stat}
        </h5>
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          Special Attack:{pokemon.stats[3].base_stat}
        </h5>
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          Special Defense:{pokemon.stats[4].base_stat}
        </h5>
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          Speed:{pokemon.stats[5].base_stat}
        </h5>
      </div>
    </div>
  );
};

export default Pokemon;
