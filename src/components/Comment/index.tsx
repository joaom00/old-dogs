import { Link } from 'react-router-dom';

import { Comment as CommentTypes } from '../../hooks/usePostComments';

import deletedUserImage from '../../assets/login.jpg';

import * as S from './styles';

type CommentProps = {
  comment: CommentTypes;
};

const Comment = ({ comment }: CommentProps) => {
  return (
    <S.Wrapper>
      <Link to="/">
        <img
          src={comment.user ? comment.user.avatarUrl : deletedUserImage}
          alt={comment.user ? `Foto de perfil de ${comment.user.name}` : 'Usuário deletado'}
        />
      </Link>
      <S.Comment>
        <S.Content>
          <S.Username to="/">{comment.user ? comment.user.username : 'Usuário deletado'}</S.Username>
          {comment.comment}
        </S.Content>
        <S.CommentInfo>
          <S.CommentDate>1h</S.CommentDate>
          <S.ReplyComment to="/">{`Responder - ${comment.totalReplys} Respostas`}</S.ReplyComment>
        </S.CommentInfo>
      </S.Comment>
    </S.Wrapper>
  );
};

export default Comment;
