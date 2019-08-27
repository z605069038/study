module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport':{
      unitToConvert: 'px',
      viewportWidth: 1242,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['toast-wrapper','qrcode-container','qrcodeforhome'],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 2208
    }
  }
}
