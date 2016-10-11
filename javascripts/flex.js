$(function(){
	var dishNums = parseInt($('.dish-item .nums').html());
	dishNumsCheck();
	function dishNumsCheck(){
		if (dishNums) {
		// $('.reduce-btn,.nums').animate({transform:'translate(0px)'},0);
	}else{
		$('.reduce-btn,.nums').animate({transform:'translate(160px)'},0);
	}
	}
	

	$('.dish-item').on('click','.add-btn',fun1);
	$('.dish-item').on('click','.reduce-btn',fun2);
	
	var toggleButton=false;
	function fun1() {
		if(toggleButton){
			return;
		}else{
			toggleButton = true;
			var Nums = parseInt($(this).siblings('.dish-item .nums').html());
			Nums++;
			if(Nums == 1){
				$(this).siblings('.reduce-btn,.nums').animate({transform:'translate(0px)'},800,'ease-in-out',function(){
					toggleButton = false;
				});
				$(this).siblings('.nums').html(Nums);
			}else{
				$(this).siblings('.nums').html(Nums);
				toggleButton=false;
			}
		}	
		}

	function fun2() {
			if(toggleButton){
				return;
			}else{
				toggleButton=true;
				var Nums = parseInt($(this).siblings('.dish-item .nums').html());
			Nums--;
			if(Nums == 0){
				$(this).animate({transform:'translate(160px)'},800,'ease-in-out',function(){
					toggleButton = false;
				}).siblings('.nums').animate({transform:'translate(160px)'},800,'ease-in-out');
				$(this).siblings('.nums').html(Nums);
			}else{
				$(this).siblings('.nums').html(Nums);
				toggleButton=false;
			}
			}
			
	}

});