(function() {
	$(document).bind('DOMSubtreeModified',function(){	
		var a = document.getElementsByTagName("a");
		var imageTypes = ['.tif', '.tiff', '.gif', '.jpeg', '.jpg', '.jif', '.jfif', '.png'];
		for(var i = 0; i < a.length; i++) { 
			if(RegExp(imageTypes.join('|')).exec(a[i].href) && a[i].parentNode.innerHTML.indexOf("<img") == -1) { 
				a[i].parentNode.innerHTML = "<a href=" + a[i].href + "><img src=" + a[i].href + " width=200/></a>";
			} 	
		}
	})
}());
