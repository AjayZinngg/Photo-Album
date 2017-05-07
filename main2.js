$(document).ready(function(){
	var i;
	for(i=1;i<=22;++i){
		$('#wall').append('<div style="background-image:url(photos/'+i+'.jpg);"></div>');
	}
})

var left;
var top;
$('#wall').on('click','div',function(){
	$(this).attr('id','active');
	left=$('#active').position().left;
	top=$('#active').position().top;

	$('#active').css({
		'position':			'absolute',
		'left':				left,
		'top':				top,
		'z-index':			'100',
		'cursor':			'auto',
		'pointer-events':	'none'
	});
	$('#screen').css('display','block');
	$('<div id="gap"></div>').insertAfter($('#active'));

	$('#active').animate({
		left:	'0px',
		top:	'0px',
		width:	'90vw',
		height:	'90vh',
		margin:	'5vh 5vw'
	},250);

	$('#screen').animate({
		opacity:	'0.5'
	},250);
});

$('#screen').click(function(){
	$('#screen').animate({
		opacity:	'0',
	},250,function(){
		$('#screen').css('display','none');
	});

	$('#active').animate({
		left:	left,
		top:	top,
		width:	'17.5vw',
		height:	'17.5vh',
		margin:	'1vh 1vw'
	},250,function(){
		$('#active').css({
			'position':			'relative',
			'left':				'0px',
			'top':				'0px',
			'z-index':			'0',
			'cursor':			'pointer',
			'pointer-events':	'all'
		});
		$('#active').removeAttr('id');
		$('#gap').remove();
	});

});

$('#login_').click(function(){
	location.href='1.html';
});