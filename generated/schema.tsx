import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type AgeRating = {
  __typename?: "AgeRating"
  category: Scalars["String"]
  rating: Scalars["String"]
}

export type Cover = {
  __typename?: "Cover"
  image_id: Scalars["String"]
}

export type Game = {
  __typename?: "Game"
  age_ratings?: Maybe<Array<Maybe<AgeRating>>>
  cover: Cover
  first_release_date: Scalars["Int"]
  game_engines?: Maybe<Array<Maybe<GameEngine>>>
  game_modes?: Maybe<Array<Maybe<GameMode>>>
  genres?: Maybe<Array<Maybe<Genre>>>
  id: Scalars["Int"]
  name: Scalars["String"]
  platforms?: Maybe<Array<Maybe<Platform>>>
  rating?: Maybe<Scalars["Float"]>
  rating_count?: Maybe<Scalars["Int"]>
  release_dates?: Maybe<Array<Maybe<ReleaseDate>>>
  total_rating?: Maybe<Scalars["Float"]>
  url?: Maybe<Scalars["String"]>
}

export type GameEngine = {
  __typename?: "GameEngine"
  name: Scalars["String"]
}

export type GameMode = {
  __typename?: "GameMode"
  name: Scalars["String"]
}

export type Genre = {
  __typename?: "Genre"
  id: Scalars["Int"]
  name: Scalars["String"]
}

export type Platform = {
  __typename?: "Platform"
  abbreviation: Scalars["String"]
  id: Scalars["Int"]
}

export type Query = {
  __typename?: "Query"
  game?: Maybe<Game>
  games?: Maybe<Array<Maybe<Game>>>
}

export type QueryGameArgs = {
  id?: InputMaybe<Scalars["Int"]>
}

export type QueryGamesArgs = {
  limit?: InputMaybe<Scalars["Int"]>
  platformId?: InputMaybe<Scalars["Int"]>
  sortDir?: InputMaybe<Scalars["String"]>
  sortField?: InputMaybe<Scalars["String"]>
}

export type ReleaseDate = {
  __typename?: "ReleaseDate"
  date: Scalars["String"]
  platform: Scalars["String"]
}

export type User = {
  __typename?: "User"
  email: Scalars["String"]
  id: Scalars["ID"]
  password: Scalars["String"]
}

export type AllGamesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>
  platformId?: InputMaybe<Scalars["Int"]>
  sortField?: InputMaybe<Scalars["String"]>
  sortDir?: InputMaybe<Scalars["String"]>
}>

export type AllGamesQuery = {
  __typename?: "Query"
  games?:
    | Array<
        | {
            __typename?: "Game"
            id: number
            name: string
            first_release_date: number
            rating?: number | null | undefined
            total_rating?: number | null | undefined
            rating_count?: number | null | undefined
            url?: string | null | undefined
            genres?:
              | Array<
                  | { __typename?: "Genre"; id: number; name: string }
                  | null
                  | undefined
                >
              | null
              | undefined
            cover: { __typename?: "Cover"; image_id: string }
            platforms?:
              | Array<
                  | {
                      __typename?: "Platform"
                      id: number
                      abbreviation: string
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
            age_ratings?:
              | Array<
                  | {
                      __typename?: "AgeRating"
                      category: string
                      rating: string
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
            game_engines?:
              | Array<
                  { __typename?: "GameEngine"; name: string } | null | undefined
                >
              | null
              | undefined
            game_modes?:
              | Array<
                  { __typename?: "GameMode"; name: string } | null | undefined
                >
              | null
              | undefined
            release_dates?:
              | Array<
                  | {
                      __typename?: "ReleaseDate"
                      date: string
                      platform: string
                    }
                  | null
                  | undefined
                >
              | null
              | undefined
          }
        | null
        | undefined
      >
    | null
    | undefined
}

export const AllGamesDocument = gql`
  query AllGames(
    $limit: Int
    $platformId: Int
    $sortField: String
    $sortDir: String
  ) {
    games(
      limit: $limit
      platformId: $platformId
      sortField: $sortField
      sortDir: $sortDir
    ) {
      id
      name
      first_release_date
      genres {
        id
        name
      }
      rating
      total_rating
      rating_count
      url
      cover {
        image_id
      }
      platforms {
        id
        abbreviation
      }
      age_ratings {
        category
        rating
      }
      game_engines {
        name
      }
      game_modes {
        name
      }
      release_dates {
        date
        platform
      }
    }
  }
`

/**
 * __useAllGamesQuery__
 *
 * To run a query within a React component, call `useAllGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllGamesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      platformId: // value for 'platformId'
 *      sortField: // value for 'sortField'
 *      sortDir: // value for 'sortDir'
 *   },
 * });
 */
export function useAllGamesQuery(
  baseOptions?: Apollo.QueryHookOptions<AllGamesQuery, AllGamesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllGamesQuery, AllGamesQueryVariables>(
    AllGamesDocument,
    options
  )
}
export function useAllGamesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllGamesQuery,
    AllGamesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllGamesQuery, AllGamesQueryVariables>(
    AllGamesDocument,
    options
  )
}
export type AllGamesQueryHookResult = ReturnType<typeof useAllGamesQuery>
export type AllGamesLazyQueryHookResult = ReturnType<
  typeof useAllGamesLazyQuery
>
export type AllGamesQueryResult = Apollo.QueryResult<
  AllGamesQuery,
  AllGamesQueryVariables
>
