$('#ecomm-prev').on('click', function() {
	$('#ecomm-cards').animate({
	  scrollLeft: '-=500'
	}, 500, 'swing');
  });
  
  $('#ecomm-next').on('click', function() {
	$('#ecomm-cards').animate({
	  scrollLeft: '+=500'
	}, 500, 'swing');
  });
let ecommlist=document.querySelectorAll('.img-ecomm-ecommlist');
console.log(ecommlist);
let index=0;
console.log(ecommlist[parseInt(index)].style);
let bgimages=['./sm1.png','./sm2.png','./sm3.png','./sm4.png','./sm5.png'];
for (let i = 0; i < bgimages.length; i++) {
    if (ecommlist[i]) {
        ecommlist[i].style.backgroundImage = `url(${bgimages[i]})`;
    }
}