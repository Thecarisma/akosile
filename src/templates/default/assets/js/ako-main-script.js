function run() {
	var text = document.getElementById('content').innerHTML.replace(/&gt;/g, ">")  , converter = new showdown.Converter();
	//converter.setOption('simpleLineBreaks', 'true'); 
    document.getElementById('content').innerHTML = converter.makeHtml(text);
	console.log(converter.makeHtml(text));
}
run();