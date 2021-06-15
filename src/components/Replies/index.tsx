import React, { useState } from 'react';

import Reply from '../Reply';

import useCommentReplies from '../../hooks/useCommentReplies';

import * as S from './styles';

type ReplysProps = {
  commentId: number;
  totalReplies: number;
};

const Replies = ({ commentId, totalReplies }: ReplysProps) => {
  const [remainingReplies, setRemainingReplies] = useState(totalReplies);
  const [commentIdState, setCommentIdState] = useState(0);
  const [showReplies, setShowReplies] = useState(true);
  const groupQuery = useCommentReplies(commentIdState);

  function handleClick() {
    setCommentIdState(commentId);
    setRemainingReplies((remainingReplies - 3) % totalReplies);
  }

  return (
    <>
      {remainingReplies ? (
        <S.ShowRepliesButton onClick={handleClick}>
          Ver respostas ({remainingReplies})
        </S.ShowRepliesButton>
      ) : showReplies ? (
        <S.ShowRepliesButton onClick={() => setShowReplies(false)}>
          Ocultar respostas
        </S.ShowRepliesButton>
      ) : (
        <S.ShowRepliesButton onClick={() => setShowReplies(true)}>
          Ver respostas ({totalReplies})
        </S.ShowRepliesButton>
      )}

      {showReplies &&
        groupQuery.data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.replies.map((reply) => (
              <Reply key={reply.id} reply={reply} />
            ))}
          </React.Fragment>
        ))}
    </>
  );
};

export default Replies;
