(function() {
	$(document).bind('DOMSubtreeModified',function(){	
		var a = document.getElementsByTagName("a");
		for(var i = 0; i < a.length; i++) { 
			if((a[i].href).match(/\.(tif|tiff|jif|jfif|jpeg|jpg|gif|png)$/) && a[i].parentNode.innerHTML.indexOf("<img") == -1) { 
				a[i].parentNode.innerHTML = "<a href=" + a[i].href + "><img src=" + a[i].href + " width=200/></a>";
			} 	
		}
	})
}());
