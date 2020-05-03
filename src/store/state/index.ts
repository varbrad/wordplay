// Primitive types
export type Id = string | number

export interface Identifiable {
  id: Id
}

export enum TileType {
  STANDARD,
  WILDCARD,
}

export interface StandardTile extends Identifiable {
  type: 'standard'
  letter: string
  value: number
}

export interface WildcardTile extends Identifiable {
  type: 'wildcard'
  letter?: string
}

// State types
export type Tile = StandardTile | WildcardTile

export interface Rack {
  id: Id
  tiles: Tile[]
}

export interface StoreState {
  racks: Rack[]
}

export const createInitialState = (
  initialState?: Partial<StoreState>,
): StoreState => ({
  racks: [],
  ...initialState,
})
