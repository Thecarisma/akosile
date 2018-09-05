
function akoOpenCloseSidebar() {
	var sideBar = document.getElementById("ako-sidebar");
	var mainSideBar = document.getElementById("main-ako-sidebar");
	var mainContent = document.getElementById("ako-main-content");
	if (sideBar.style.display == "block" || sideBar.style.display == "") {
		mainContent.style.marginLeft = "3%";
		mainSideBar.style.width = "1%";
		sideBar.style.display = "none";
	} else {
		mainContent.style.marginLeft = "15%";
		mainSideBar.style.width = "14%";
		mainSideBar.style.display = "block";
		sideBar.style.display = "block";
	}
}

$(function() {
  /* loadSyntaxEditors(); */ //for using ace editor
});

function loadSyntaxEditors() {
	var editors = document.getElementsByClassName("ako-text-editor");
	for(var i = 0; i < editors.length; i++)
	{
		var editorId = editors.item(i).id ;
		var editor = ace.edit(editorId);
		editor.setTheme("ace/theme/monokai");
		editor.session.setMode("ace/mode/"+"java");
		editor.getSession().setTabSize(4);
		editor.setHighlightActiveLine(true);
		editor.session.setUseWorker(false);
		editor.textInput.getElement().disabled=true;
		editor.commands.commmandKeyBinding={};
	}
	
}