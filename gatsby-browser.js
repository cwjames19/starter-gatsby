/*
  API for conditionally performing some action when an element enters the viewport/view
*/

export const onClientEntry = async () => {
  // Intersection observer polyfill
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`)
  }
}