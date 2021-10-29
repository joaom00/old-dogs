import Button from '../Button'

import * as S from './styles'

type DialogProps = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  onConfirm?: () => void
}

const Dialog = ({ onConfirm, isOpen = false, setIsOpen }: DialogProps) => {
  return (
    <S.Wrapper aria-hidden={!isOpen} aria-label="dialog" isOpen={isOpen}>
      <S.DialogWrapper>
        <p>Tem certeza que deseja fazer isso?</p>
        <div>
          <Button variant="secondary" size="small" onClick={() => setIsOpen(false)}>
            Cancelar
          </Button>
          <Button size="small" onClick={onConfirm}>
            Confirmar
          </Button>
        </div>
      </S.DialogWrapper>
    </S.Wrapper>
  )
}

export default Dialog
