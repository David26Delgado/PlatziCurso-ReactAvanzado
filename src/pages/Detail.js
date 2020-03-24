import React from 'react'

// Containers
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'

export const Detail = ({ detailId }) => (
  <PhotoCardWithQuery id={detailId} />
)
