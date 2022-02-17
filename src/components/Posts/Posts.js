import React from 'react'

import { Post } from '..'
import { NEWS } from '../constants/constants'

export const Posts = () => (
  <ul className='newsList'>
    {NEWS.map(
      ({ author, created_at, num_comments, objectID, title, points, url }) => (
        <Post
          key={objectID}
          author={author}
          created_at={created_at}
          num_comments={num_comments}
          title={title}
          points={points}
          url={url}
        />
      )
    )}
  </ul>
)
