// set = new Array();

// flag = 0;

// function f_start() {
// 	if (flag == 0) {
// 		//初期値
// 		set[0] = document.flash.set1.value;
// 		set[1] = document.flash.set2.value;
// 		set[2] = document.flash.set3.value;
// 		//タイマー起動
// 		timerID = setInterval('f_count()',set[2]*1000);
// 		count = 0;
// 		document.flash.b_start.disabled = true;
// 		kotae = 0;
// 	} else {
// 		f_kotae();
// 	}
// }

// function f_count() {
// 	count++;
// 	if (set[1] < count) {
// 		f_clear();
// 	} else {
// 		//乱数の生成
// 		var r = Math.random();
// 		r = Math.floor(r * Math.pow(10,set[0]));
// 		//数値の表示
// 		document.flash.number.value = r;
// 		kotae += r;
// 	}
// }

// function f_clear() {
// 	clearInterval(timerID);
// 	document.flash.number.value = "";
// 	document.flash.b_start.disabled = false;
// 	document.flash.b_start.value = "解答表示";
// }

// function f_kotae() {
// 	var s = document.flash.number.value;
// 	if (s != "") {
// 		//答え合わせ
// 		if (s == kotae) {
// 			alert("正解です！！");
// 		} else {
// 			alert("答えは" + kotae + "でした。");
// 		}
// 	} else {
// 		//入力なし
// 		alert("答えは" + kotae + "です。");
// 	}
// 	//初期化
// 	document.flash.b_start.value = "スタート";
// 	flag = 0;
// 	document.flash.number.value = "";
// }
// }