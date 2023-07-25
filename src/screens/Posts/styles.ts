import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`

export const ContentThumb = styled.View`
  flex: 1;
  margin: 0 ${({ theme }) => theme.size.md}px;
`