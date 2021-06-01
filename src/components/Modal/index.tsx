import photo from '../../assets/login.jpg';
import { FiX } from 'react-icons/fi';

import * as S from './styles';
import { Link } from 'react-router-dom';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: () => void;
};

const Modal = ({ setIsOpen, isOpen }: ModalProps) => {
  return (
    <S.Wrapper aria-hidden={!isOpen} aria-label="modal" isOpen={isOpen}>
      <S.Close role="button" aria-label="fechar modal" onClick={setIsOpen}>
        <FiX size={32} />
      </S.Close>
      <S.Modal>
        <img src={photo} width="600px" height="600px" alt="Foto de fulano" />
        <S.PostContentWrapper>
          <S.PostHeader>
            <Link to="/">
              <img src={photo} alt="Foto de perfil de fulano" />
            </Link>
            <p>dog</p>
          </S.PostHeader>
          <S.CommentsWrapper>
            <S.PostDescriptions>
              Hello chums 👋 <br />
              We are back with a fresh challenge for this month, this time we
              teamed up with our good friends from @odamastudio (must follow
              them) with some really cool prize for the winners!
            </S.PostDescriptions>
            <S.CommentWrapper>
              <Link to="/">
                <img src={photo} alt="Foto de perfil de fulano" />
              </Link>
              <S.Comment>
                <S.Content>
                  <S.Username to="/">odmastudio</S.Username>
                  Lets rock guys! 🔥🔥
                </S.Content>
                <S.CommentInfo>
                  <S.CommentDate>1h</S.CommentDate>
                  <S.ReplyComment to="/">
                    Responder - 10 Respostas
                  </S.ReplyComment>
                </S.CommentInfo>
              </S.Comment>
            </S.CommentWrapper>

            <S.CommentWrapper>
              <img src={photo} />
              <S.Comment>
                <S.Content>
                  <S.Username to="/">odmastudio</S.Username>
                  Lets rock guys! 🔥🔥
                </S.Content>
                <S.CommentInfo>
                  <S.CommentDate>1h</S.CommentDate>
                  <S.ReplyComment to="/">
                    Responder - 10 Respostas
                  </S.ReplyComment>
                </S.CommentInfo>
              </S.Comment>
            </S.CommentWrapper>

            <S.CommentWrapper>
              <img src={photo} />
              <S.Comment>
                <S.Content>
                  <S.Username to="/">odmastudio</S.Username>
                  Lets rock guys! 🔥🔥
                </S.Content>
                <S.CommentInfo>
                  <S.CommentDate>1h</S.CommentDate>
                  <S.ReplyComment to="/">
                    Responder - 10 Respostas
                  </S.ReplyComment>
                </S.CommentInfo>
              </S.Comment>
            </S.CommentWrapper>

            <S.CommentWrapper>
              <img src={photo} />
              <S.Comment>
                <S.Content>
                  <S.Username to="/">odmastudio</S.Username>
                  Lets rock guys! 🔥🔥
                </S.Content>
                <S.CommentInfo>
                  <S.CommentDate>1h</S.CommentDate>
                  <S.ReplyComment to="/">
                    Responder - 10 Respostas
                  </S.ReplyComment>
                </S.CommentInfo>
              </S.Comment>
            </S.CommentWrapper>

            <S.CommentWrapper>
              <img src={photo} />
              <S.Comment>
                <S.Content>
                  <S.Username to="/">odmastudio</S.Username>
                  Lets rock guys! 🔥🔥
                </S.Content>
                <S.CommentInfo>
                  <S.CommentDate>1h</S.CommentDate>
                  <S.ReplyComment to="/">
                    Responder - 10 Respostas
                  </S.ReplyComment>
                </S.CommentInfo>
              </S.Comment>
            </S.CommentWrapper>

            <S.CommentWrapper>
              <img src={photo} />
              <S.Comment>
                <S.Content>
                  <S.Username to="/">odmastudio</S.Username>
                  Lets rock guys! 🔥🔥
                </S.Content>
                <S.CommentInfo>
                  <S.CommentDate>1h</S.CommentDate>
                  <S.ReplyComment to="/">
                    Responder - 10 Respostas
                  </S.ReplyComment>
                </S.CommentInfo>
              </S.Comment>
            </S.CommentWrapper>
          </S.CommentsWrapper>

          <S.NewCommentInputWrapper>
            <S.NewCommentInput placeholder="Adicionar comentário" />
            <S.NewCommentButton>enviar</S.NewCommentButton>
          </S.NewCommentInputWrapper>
        </S.PostContentWrapper>
      </S.Modal>
    </S.Wrapper>
  );
};

export default Modal;
