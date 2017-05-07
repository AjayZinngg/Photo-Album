var active=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
var inactive=[23,24,25,26,27,28,29,30];

$(document).ready(function(){
	var i;
	var l=[];
	for(i=1;i<=4;++i){
		l[i]=[];
	}

	for(i=1;i<=4;++i){
		$('#layer1').append('<div style="background-image:url(images/'+i+'.png);"></div>');
		l[1].push(i);
	}
	--i;
	while(i++<9){
		$('#layer2').append('<div style="background-image:url(images/'+i+'.png);"></div>');
		l[2].push(i);
	}
	--i;
	while(i++<15){
		$('#layer3').append('<div style="background-image:url(images/'+i+'.png);"></div>');
		l[3].push(i);
	}
	--i;
	while(i++<22){
		$('#layer4').append('<div style="background-image:url(images/'+i+'.png);"></div>');
		l[4].push(i);
	}

	loop();
});

function loop(){
	$('#layer1').animate({
		'margin-left':	'-33.33vw'
	},7000,function(){
		$('#layer1').css({
			'margin-left':	'0px'
		});
		$('#layer1').append($('#layer1 div:first-child'));
		loop();
	});

	$('#layer2').animate({
		'margin-right':	'-25vw'
	},8000,function(){
		$('#layer2').css({
			'margin-right':	'0px'
		});
		$('#layer2').prepend($('#layer2 div:last-child'));
		loop();
	});

	$('#layer3').animate({
		'margin-left':	'-20vw'
	},9000,function(){
		$('#layer3').css({
			'margin-left':	'0px'
		});
		$('#layer3').append($('#layer3 div:first-child'));
		loop();
	});

	$('#layer4').animate({
		'margin-right':	'-16.67vw'
	},10000,function(){
		$('#layer4').css({
			'margin-right':	'0px'
		});
		$('#layer4').prepend($('#layer4 div:last-child'));
		loop();
	});
}

$('#login').click(function(){
	$('#screen').css('display','block');
	$('#screen').animate({
		'opacity':	'0.5',
	},250);

	$('#modal').css('display','flex');
	$('#modal').animate({
		'margin-top':	'12.5vh',
		'opacity':		1
	},500);
});

$('#close').click(function(){
	$('#modal').animate({
		'margin-top':	'17.5vh',
		'opacity':		0
	},500,function(){
		$('#modal').css('display','none');
	});

	$('#screen').animate({
		'opacity':	'0',
	},250,function(){
		$('#screen').css('display','none');
	});
});

$('#login_').click(function(){
	if($('#username').val()!='Ajay Singh'){
		$('#msg').text('Oops, check the username...');
		$('#msg').css('color','#ff1f00');
	}
	else if($('#password').val()!='singhy'){
		$('#msg').text('Incorrect password...');
		$('#msg').css('color','#ff1f00');
	}
	else{
		location.href='2.html';
	}
});