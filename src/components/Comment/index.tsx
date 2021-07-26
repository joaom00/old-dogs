import { Link } from 'react-router-dom';
import { parseISO } from 'date-fns';
import { formatDistanceToNow } from 'date-fns/esm';
import ptBR from 'date-fns/locale/pt-BR';

import { TUser } from '../../contexts/AuthContext';

import deletedUserImage from '../../assets/user.jpg';

import * as S from './styles';

type CommentProps = {
  comment: string;
  user: TUser | null;
  createdAt: string;
};

const Comment = ({ comment, user, createdAt }: CommentProps) => {
  const formatDate = formatDistanceToNow(parseISO(createdAt), {
    locale: ptBR
  });

  return (
    <S.Wrapper>
      <Link to={`/${user?.username}`}>
        <img
          src={user ? user.avatarUrl : deletedUserImage}
          alt={user ? `Foto de perfil de ${user.name}` : 'Usuário deletado'}
        />
      </Link>
      <S.Comment>
        <S.Content>
          <S.Username to={`/${user?.username}`}>{user ? user.username : 'Usuário deletado'}</S.Username>
          {comment}
        </S.Content>
        <S.CommentInfo>
          <S.CommentDate>{formatDate}</S.CommentDate>
        </S.CommentInfo>
      </S.Comment>
    </S.Wrapper>
  );
};

export default Comment;
