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
    duration: 3000,

    modes: ['Normal', 'Deslizar', 'Desplazar'],
    index: 1,
    viewDetailImage: false,
    infoDetailImage: ''
  },

  bindPickerChange(e) {
    console.log(e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },

  detail(e) {
    console.log(e);
    this.setData({
      viewDetailImage : e.currentTarget.tagName === 'image' ? true : false,
      infoNameImage: e.target.dataset.name,
      infoPathImage: e.target.dataset.path
    });
  }
});
