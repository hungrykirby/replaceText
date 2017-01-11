var texts = [];
var shaped_text = "";
texts[0] = "RT@kimitetu2000:上り回送のサンライズ大垣に行くかもわからないらい……ちなみに尾張一宮撮影放題です笑https://t.co/MxYxSko5eF";
texts[1] = "【キモいと話題】様々な角度から撮影たJR大分駅のモニュメント『ぶんぶん童子』をご覧下さいhttps://t.co/0zfi0dNHKb これだ。大分駅にはくろちゃんという可愛い子犬キャラいるのに… "
texts[2] = "@saa_mellこれ単に重さ測っカロリー換算するだけのような…(´・ω・`)a";

for(i of texts){
    console.log(i);
    console.log('--');
    shaped_text = i;
    //shaped_text = shaped_text.replace(/RT/, "");
    shaped_text = shaped_text.replace(/https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+/, ""); //url
    shaped_text = shaped_text.replace(/@[a-z0-9_]+/, ""); //リプライを削除
    shaped_text = shaped_text.replace(/RT:/, ""); //RT
    
    //shaped_text = i.replace(/RT.*:/, "");
    console.log(shaped_text);
    console.log('-------')
}

