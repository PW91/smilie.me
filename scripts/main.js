document.addEventListener('DOMContentLoaded', function () {

  var myObject = {

    init: function () {

      this.playButton = document.querySelector('.play-button-wrapper');
      this.videoCurtain = document.querySelector('.video-curtain');
      this.videoCloseButton = this.videoCurtain.querySelector('.close-button-wrapper');
      this.iframe = this.videoCurtain.querySelector('iframe');
      this.questionMarkButton = document.querySelector('.header .question-mark-wrapper');
      this.aboutCurtain = document.querySelector('.about-curtain');
      this.aboutCloseButton = this.aboutCurtain.querySelector('.close-button-wrapper');
      this.footer = document.querySelector('.footer');

      if (this.playButton && this.videoCloseButton && this.videoCurtain) {
        this.videoFeatures();
      }

      if (this.questionMarkButton && this.aboutCurtain && this.aboutCloseButton && this.footer) {
        this.aboutFeatures();
      }
    },

    videoFeatures: function () {

      this.playButton.addEventListener('click', function () {
        this.videoCurtain.classList.add('visible');
      }.bind(this));

      this.videoCloseButton.addEventListener('click', function () {
        this.videoCurtain.classList.remove('visible');
      }.bind(this));
    },

    aboutFeatures: function () {

      this.questionMarkButton.addEventListener('click', function () {
        this.aboutCurtain.classList.add('visible');

        var footerPosition = this.footer.offsetTop;
        if (window.innerWidth < 1030) {
          this.aboutCurtain.style.height = '70vh';
        } else {
          this.aboutCurtain.style.height = '77vh';
        }
      }.bind(this));

      this.aboutCloseButton.addEventListener('click', function () {
        this.aboutCurtain.classList.remove('visible');
      }.bind(this));
    }
  };

  myObject.init();
});
//# sourceMappingURL=main.js.map
