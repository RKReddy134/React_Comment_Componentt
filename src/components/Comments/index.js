import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')

  const [commentText, setCommentText] = useState('')

  const [commentList, setCommentTextList] = useState([])

  const onChangeName = event => setName(event.target.value)

  const onChangeComment = event => setCommentText(event.target.value)

  const onAddComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setName('')
    setCommentText('')
    setCommentTextList(prevCommentList => [...prevCommentList, newComment])
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment} value={commentList}>
        <NameInput
          type="text"
          placeholder="Your name"
          onChange={onChangeName}
          value={name}
        />
        <CommentTextInput
          onChange={onChangeComment}
          value={commentText}
          placeholder="Your comment"
          rows="6"
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentList.map(eachComment => (
          <CommentItem commentDetails={eachComment} key={commentList.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments