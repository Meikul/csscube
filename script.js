$(document).ready(function(){
  $(document).on('mousemove', function(e){
    const x = toThou(2 * (e.pageX / window.innerWidth) - 1);
    const y = toThou(2 * (e.pageY / window.innerHeight) - 1);

    const radius = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    const degree = toThou(radius * 360);


    $('.cube').css({transform: `translate(-50%, -50%) rotate3d(${y}, ${-x}, 0, ${-degree}deg)`});
  });
});

function toThou(val){
  return Math.round(val * 1000) / 1000;
}
