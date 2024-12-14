Page({
  data: {
    images: [
      { 
        path: '../../images/complete.jpg', 
        text: 'Complete',
        cordX: 0,
        cordY: 0
      },
      { 
        path: '../../images/elefante.jpg', 
        text: 'Elefante', 
        cordX: 10,
        cordY: 10 
      },
      { 
        path: '../../images/leon.jpg', 
        text: 'Leon',
        cordX: 20,
        cordY: 20
      },
      { 
        path: '../../images/mono.jpg', 
        text: 'Mono',
        cordX: 30,
        cordY: 30
      },
      { 
        path: '../../images/pez.jpg', 
        text: 'Pez',
        cordX: 40,
        cordY: 40
      },
      { 
        path: '../../images/pulpo.jpg', 
        text: 'Pulpo' ,
        cordX: 50,
        cordY: 50
      },
      { 
        path: '../../images/tortuga.jpg', 
        text: 'Tortuga',
        cordX: 60,
        cordY: 60 
      },
    ],
    indicatorDots: true,
    autoplay: true,
    vertical: false,
    interval: 1000,
    circular: false,
    duration: 5000,

    modes: ['Normal', 'Deslizar', 'Desplazar'],
    arrIndex: 0,
    index: 0
  },
  onLoad() {
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots,
    });
  },
  changeVertical() {
    this.setData({
      vertical: !this.data.vertical,
    });
  },
  changeCircular(e) {
    this.setData({
      circular: !this.data.circular,
    });
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay,
    });
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value,
    });
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value,
    });
  },
  bindPickerChange(e) {
    console.log(e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
});
