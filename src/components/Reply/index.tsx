import { Link } from 'react-router-dom';
import { parseISO } from 'date-fns';
import { formatDistanceToNow } from 'date-fns/esm';
import ptBR from 'date-fns/locale/pt-BR';

import { Reply as ReplyTypes } from '../../hooks/useCommentReplies';

import deletedUserImage from '../../assets/user.jpg';

import * as S from './styles';

type ReplyProps = {
  reply: ReplyTypes;
};

const Reply = ({ reply }: ReplyProps) => {
  const formatDate = formatDistanceToNow(parseISO(reply.createdAt), {
    locale: ptBR
  });

  return (
    <S.Wrapper>
      <Link to={`/${reply.user.username}`}>
        <img
          src={reply.user ? reply.user.avatarUrl : deletedUserImage}
          alt={
            reply.user
              ? `Foto de perfil de ${reply.user.name}`
              : 'Foto de Perfil de um Usuário deletado'
          }
        />
      </Link>
      <S.Comment>
        <S.Content>
          <S.Username to={`/${reply.user.username}`}>
            {reply.user ? reply.user.username : 'Usuário deletado'}
          </S.Username>
          {reply.reply}
        </S.Content>
        <S.CommentInfo>
          <S.CommentDate>{formatDate}</S.CommentDate>
        </S.CommentInfo>
      </S.Comment>
    </S.Wrapper>
  );
};

export default Reply;
