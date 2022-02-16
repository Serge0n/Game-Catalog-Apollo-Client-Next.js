import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AgeRating = {
  __typename?: 'AgeRating';
  category: Scalars['String'];
  rating: Scalars['String'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type Cover = {
  __typename?: 'Cover';
  image_id: Scalars['String'];
};

export type Game = IGame & {
  __typename?: 'Game';
  id: Scalars['Int'];
  name: Scalars['String'];
  screenshots: Array<Maybe<Screenshot>>;
  storyline: Scalars['String'];
  summary: Scalars['String'];
};

export type GameEngine = {
  __typename?: 'GameEngine';
  name: Scalars['String'];
};

export type GameListItem = IGame & {
  __typename?: 'GameListItem';
  cover: Cover;
  first_release_date: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  total_rating?: Maybe<Scalars['Float']>;
};

export type GameMode = {
  __typename?: 'GameMode';
  name: Scalars['String'];
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type IGame = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<AuthPayload>;
  signup?: Maybe<AuthPayload>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type Platform = {
  __typename?: 'Platform';
  abbreviation: Scalars['String'];
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  game?: Maybe<Game>;
  games?: Maybe<Array<Maybe<GameListItem>>>;
  user?: Maybe<User>;
};


export type QueryGameArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryGamesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  platformId?: InputMaybe<Scalars['Int']>;
  sortDir?: InputMaybe<Scalars['String']>;
  sortField?: InputMaybe<Scalars['String']>;
};

export type ReleaseDate = {
  __typename?: 'ReleaseDate';
  date: Scalars['String'];
  platform: Scalars['String'];
};

export type Screenshot = {
  __typename?: 'Screenshot';
  image_id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserSignupMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserSignupMutation = { __typename?: 'Mutation', signup?: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', id: string } } | null | undefined };

export type AllGamesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  platformId?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortDir?: InputMaybe<Scalars['String']>;
}>;


export type AllGamesQuery = { __typename?: 'Query', games?: Array<{ __typename?: 'GameListItem', id: number, name: string, slug: string, first_release_date: number, total_rating?: number | null | undefined, cover: { __typename?: 'Cover', image_id: string } } | null | undefined> | null | undefined };

export type GameQueryVariables = Exact<{
  gameId?: InputMaybe<Scalars['Int']>;
}>;


export type GameQuery = { __typename?: 'Query', game?: { __typename?: 'Game', id: number, name: string, storyline: string, summary: string, screenshots: Array<{ __typename?: 'Screenshot', image_id: string } | null | undefined> } | null | undefined };


export const UserSignupDocument = gql`
    mutation UserSignup($name: String!, $email: String!, $password: String!) {
  signup(name: $name, email: $email, password: $password) {
    token
    user {
      id
    }
  }
}
    `;
export type UserSignupMutationFn = Apollo.MutationFunction<UserSignupMutation, UserSignupMutationVariables>;

/**
 * __useUserSignupMutation__
 *
 * To run a mutation, you first call `useUserSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignupMutation, { data, loading, error }] = useUserSignupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUserSignupMutation(baseOptions?: Apollo.MutationHookOptions<UserSignupMutation, UserSignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UserSignupMutation, UserSignupMutationVariables>(UserSignupDocument, options);
      }
export type UserSignupMutationHookResult = ReturnType<typeof useUserSignupMutation>;
export type UserSignupMutationResult = Apollo.MutationResult<UserSignupMutation>;
export type UserSignupMutationOptions = Apollo.BaseMutationOptions<UserSignupMutation, UserSignupMutationVariables>;
export const AllGamesDocument = gql`
    query AllGames($limit: Int, $platformId: Int, $sortField: String, $sortDir: String) {
  games(
    limit: $limit
    platformId: $platformId
    sortField: $sortField
    sortDir: $sortDir
  ) {
    id
    name
    slug
    first_release_date
    total_rating
    cover {
      image_id
    }
  }
}
    `;

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
export function useAllGamesQuery(baseOptions?: Apollo.QueryHookOptions<AllGamesQuery, AllGamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllGamesQuery, AllGamesQueryVariables>(AllGamesDocument, options);
      }
export function useAllGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllGamesQuery, AllGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllGamesQuery, AllGamesQueryVariables>(AllGamesDocument, options);
        }
export type AllGamesQueryHookResult = ReturnType<typeof useAllGamesQuery>;
export type AllGamesLazyQueryHookResult = ReturnType<typeof useAllGamesLazyQuery>;
export type AllGamesQueryResult = Apollo.QueryResult<AllGamesQuery, AllGamesQueryVariables>;
export const GameDocument = gql`
    query Game($gameId: Int) {
  game(id: $gameId) {
    id
    name
    storyline
    summary
    screenshots {
      image_id
    }
  }
}
    `;

/**
 * __useGameQuery__
 *
 * To run a query within a React component, call `useGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameQuery({
 *   variables: {
 *      gameId: // value for 'gameId'
 *   },
 * });
 */
export function useGameQuery(baseOptions?: Apollo.QueryHookOptions<GameQuery, GameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GameQuery, GameQueryVariables>(GameDocument, options);
      }
export function useGameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GameQuery, GameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GameQuery, GameQueryVariables>(GameDocument, options);
        }
export type GameQueryHookResult = ReturnType<typeof useGameQuery>;
export type GameLazyQueryHookResult = ReturnType<typeof useGameLazyQuery>;
export type GameQueryResult = Apollo.QueryResult<GameQuery, GameQueryVariables>;