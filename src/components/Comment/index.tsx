import { Link } from 'react-router-dom';
import { parseISO } from 'date-fns';
import { formatDistanceToNow } from 'date-fns/esm';
import ptBR from 'date-fns/locale/pt-BR';

import Replies from '../Replies';

import { Comment as CommentTypes } from '../../hooks/usePostComments';

import deletedUserImage from '../../assets/user.jpg';

import * as S from './styles';

type CommentProps = {
  comment: CommentTypes;
};

const Comment = ({ comment }: CommentProps) => {
  const formatDate = formatDistanceToNow(parseISO(comment.createdAt), {
    locale: ptBR
  });

  return (
    <S.Wrapper>
      <Link to={`/${comment.user?.username}`}>
        <img
          src={comment.user ? comment.user.avatarUrl : deletedUserImage}
          alt={
            comment.user
              ? `Foto de perfil de ${comment.user.name}`
              : 'Usuário deletado'
          }
        />
      </Link>
      <S.Comment>
        <S.Content>
          <S.Username to={`/${comment.user?.username}`}>
            {comment.user ? comment.user.username : 'Usuário deletado'}
          </S.Username>
          {comment.comment}
        </S.Content>
        <S.CommentInfo>
          <S.CommentDate>{formatDate}</S.CommentDate>
          <S.ReplyCommentButton to="/">Responder</S.ReplyCommentButton>
          {!!comment.totalReplies && (
            <Replies
              commentId={comment.id}
              totalReplies={comment.totalReplies}
            />
          )}
        </S.CommentInfo>
      </S.Comment>
    </S.Wrapper>
  );
};

export default Comment;
