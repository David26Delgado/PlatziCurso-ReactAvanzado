import React from 'react'

// GraphQL
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

// Components
import { PhotoCard } from '../components/PhotoCard'

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={query} variables={{ id }}>
    {
      ({ loading, error, data }) => {
        if (loading) {
          return <h1 style={{ textAlign: 'center' }}>Loading...</h1>
        }
        const { photo = {} } = data
        return <PhotoCard {...photo} />
      }
    }
  </Query>
)
