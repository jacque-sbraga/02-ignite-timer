import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Button } from './components/example/Button'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button color="primary" />
      <Button color="secondary" />
      <Button color="danger" />
      <Button color="success" />
    </ThemeProvider>
  )
}
