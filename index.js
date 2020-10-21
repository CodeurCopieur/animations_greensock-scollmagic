//Controller
var controller = new ScrollMagic.Controller();

//Tween

  //from l'endroit ou sa demare 
var tween = TweenMax.from("#maillotD", 1, {left: -600, ease: Power2.easeInOut})
  //fromtTo l'endroit ou sa demare et aller
var tween2 = TweenMax.fromTo("#maillotE", 1, 
  {opacity: 0},
  {opacity: 1, ease: Power2.easeInOut}
);

var tweenLi = TweenMax.staggerFromTo(".listInfo-1 .list-group-item", 0.75,
  {opacity: 0, y: -100, ease: Power4.easeIn},
  {opacity: 1, y: 0, ease: Power4.easeIn}, .1);

  var tweenBtn = TweenMax.staggerFromTo(".wrapperBtn-1 .btn", 0.75,
  {opacity: 0, x: -100, ease: Power4.easeIn},
  {opacity: 1, x: 0, ease: Power4.easeIn}, .1);

//Scene ScrollMagic
var scene = new ScrollMagic.Scene({
  //container parent
  triggerElement: ".box-1",
  //200px au dessus ".box-1"
  offset: -200

})
//40% de l'écran
.triggerHook(.4)
.addIndicators({
  name: "Maillot Domicile",
  colorTrigger: "red"
})
.setTween(tween)
.reverse(false)
.addTo(controller);


//Scene ScrollMagic
var scene2 = new ScrollMagic.Scene({
  //container parent
  triggerElement: ".box-2",
  //200px au dessus ".box-1"
  offset: -200

})
//40% de l'écran
.triggerHook(.6)
.addIndicators({
  name: "Maillot Extérieur",
  colorTrigger: "blue"
})
.setTween(tween2)
.addTo(controller);

//Scene ScrollMagic
var scene3 = new ScrollMagic.Scene({
  //container parent
  triggerElement: ".box-1",
  //200px au dessus ".box-1"
  offset: -10

})
//40% de l'écran
.triggerHook(.7)
.addIndicators({
  name: "Li Domicile",
  colorTrigger: "red"
})
.setTween(tweenLi)
.addTo(controller);

//Scene ScrollMagic
var scene4 = new ScrollMagic.Scene({
  //container parent
  triggerElement: ".box-1 .listInfo-1",
  //200px au dessus ".box-1 listInfo-1"
  offset: 50

})
//40% de l'écran
.triggerHook(.45)
.addIndicators({
  name: "Btn Domicile",
  colorTrigger: "purple"
})
.setTween(tweenBtn)
.addTo(controller);