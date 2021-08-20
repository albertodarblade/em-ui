const MOBILE_WIDTH = 479
const TABLET_WIDTH = 768
export default {
  isMobile: function () {
    return (
      window.screen.width <= MOBILE_WIDTH ||
      window.screen.height <= MOBILE_WIDTH
    )
  },
  isTablet: function () {
    return (
      window.screen.width <= TABLET_WIDTH && window.screen.width > MOBILE_WIDTH
    )
  }
}
