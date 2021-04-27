"use strict";

/*CHECK IF ON PHONE*/
let regex1 = new RegExp(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i);
let regex2 = new RegExp(/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i);
let useragent = navigator.userAgent || navigator.vendor || window.opera;

var phone = false;
if (regex1.test(useragent) || regex2.test(useragent.substr(0,4))) {phone = true;}

/*CSS: STATIC*/
set_appearance();

/*CSS: CHANGE ON CLICK*/
$('body').click(
	function(e) {
		let target = $(e.target)[0];

		click_hamburger(target);

		let header = [$('#don_head')[0], $('#don_head h1')[0],
			$('#don_head img')[0]];
		if (is_in(target, header)) {click_aside();}
	}
);

/*CSS: CHANGE ON RESIZE*/
$(window).resize(function() {set_appearance();});

/*FUNCTIONS*/

/*wrapper: set CSS values depending on win width.*/
function set_appearance() {
	let winsize = $(window).width();

	/*small, viewport-dep body margins*/
	if (phone) {$('body').css('margin', '1vmin 4vmin');}

	set_hamburger(winsize);
	set_aside(winsize);
}

/*hamburger button (dropdown menu)*/

function click_hamburger(target) {
	let hamburger = $('#hamburger')[0];
	if (target === hamburger) {$('#dropdown').toggle();}
		else {$('#dropdown').hide();}
}

function set_hamburger(winsize) {
	if (winsize > 650) {$('#dropdown').hide();}
}

/*side box for donations*/

function click_aside() {
	if (!phone && $(window).width() > 650) {return;}

	if ($('#don_body').css('display') === 'none') {
		$('aside').css('width', '90%');
		$('#don_body').show();
	} else {
		$('aside').css('width', '35%');
		$('#don_body').hide();
	}
}

function set_aside(winsize) {
	$('aside').css('width', '35%');
	
	if (!phone && winsize > 650) {
		$('#don_head').css('cursor', 'auto');
		$('#don_head h1').css('display', 'block');
		$('#don_head img').hide();
		$('#don_body').show();
	} else {
		$('#don_head').css('cursor', 'pointer');
		$('#don_head h1').css('display', 'inline');
		$('#don_head img').show();
		$('#don_body').hide();
	}
}

/*find if element is in array*/
function is_in(e, arr) {
	let tot = arr.length;
	for(let i = 0; i < tot; i++) {
		if(arr[i] === e) {return true;}
	}
	return false;
}
