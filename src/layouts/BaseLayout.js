import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"
import variables from "src/styles/variables"
import fonts from "src/styles/fonts"
import StylesReset from "src/styles/reset"
import StylesBase from "src/styles/base"

const StyledPageWrapper = styled.div``

const StyledMain = styled.main``

const BaseLayout = function () {
  return (
    <ThemeProvider theme={variables}>
      <React.Fragment>
        <Helmet defer={false}>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
          <style>{fonts}</style>
        </Helmet>
        <StylesReset />
        <StylesBase />
        <StyledPageWrapper>
          <StyledMain>{this.props.children}</StyledMain>
        </StyledPageWrapper>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default BaseLayout

