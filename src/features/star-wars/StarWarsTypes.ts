export interface Planet {
  name: string,
  diameter: string,
  rotationPeriod: string,
  population: string,
  climate: string,
  terrain: string,
}

export interface StarWarsState {
  planets: Planet[],
  errorMessage: string,
}

export interface StarWarsStore extends StarWarsState {
  getPlanets: () => void;
  setPlanets: (planets: Planet[]) => void;
  setError: (message: string) => void;
  removeError: () => void;
}
