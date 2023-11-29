import { Component, ErrorInfo, ReactNode } from 'react'

type PropsType = {
  children: ReactNode
}

type StateType = {
  hasError: boolean
}

export default class ErrorBoundary extends Component<PropsType, StateType> {
  public state: StateType = {
    hasError: false,
  }

  public static getDerivedStateFromError(): StateType {
    // Обновляем состояние для отображения резервного контента при следующем рендеринге
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught Error: ', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так. Обратитесь в службу поддержки</h1>
    }

    return this.props.children
  }
}
