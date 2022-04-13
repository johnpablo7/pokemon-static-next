import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";
import axios from "axios";

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response?.data);
    }

    return null;
  }
};
