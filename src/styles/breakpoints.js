export const breakpoints = {
  phone: 320,
  phoneMd: 576,
  tablet: 768,
  desktop: 1024,
  desktopMd: 1200,
  desktopLaptop: 1366,
}

const customMediaQuery = maxWidth => `@media (min-width: ${maxWidth}px)`

export const media = {
  phone: customMediaQuery(breakpoints.phone),
  phoneMd: customMediaQuery(breakpoints.phoneMd),
  tablet: customMediaQuery(breakpoints.tablet),
  desktop: customMediaQuery(breakpoints.desktop),
  desktopMd: customMediaQuery(breakpoints.desktopMd),
  desktopLaptop: customMediaQuery(breakpoints.desktopLaptop),
  custom: customMediaQuery,
}
