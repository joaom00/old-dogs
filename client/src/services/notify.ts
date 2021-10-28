import { toast } from 'react-toastify'

export const notifyError = (msg = 'Algo deu errado, por favor tente novamente mais tarde') => {
  toast.error(msg, {
    position: toast.POSITION.BOTTOM_CENTER
  })
}

export const notifySuccess = (msg: string) => {
  toast.success(msg, {
    position: toast.POSITION.BOTTOM_CENTER
  })
}
