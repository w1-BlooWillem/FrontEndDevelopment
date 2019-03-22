var prevScrollpos = window.pageYOffset;
var header = document.getElementsByTagName("header")[0];

$(document).scroll(function() {
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos > header.offsetHeight){
        header.style.position = "absolute";
        header.style.top = header.offsetHeight;
    } else {
       
    }
    prevScrollpos = currentScrollPos;
    
});

var winkelwagen = document.getElementById("winkelwagenitems");
    var winkelwagenprice = document.getElementById("winkelwagenprice");
    function initwinkelwagen(){
        
        var winkelitems = winkelwagen.getElementsByClassName("winkelitem");
        
        for(var a = 0;a < winkelitems.length;a++){
            
            var c = a;
            
      
            var winkelitem = winkelitems[c];
            inititem(winkelitem);
            
            
            
        }
    };
    initwinkelwagen();
    
    function inititem(winkelitem){
        var winkeladd = winkelitem.getElementsByClassName("winkeladd")[0];
        var winkelremove = winkelitem.getElementsByClassName("winkelremove")[0];
         var winkelamount = winkelitem.getElementsByClassName("winkelamount")[0];
        var price = winkelitem.getElementsByClassName("price")[0];
        var flatprice = parseFloat(price.innerHTML.replace(",", "."));
        winkeladd.onclick = function() {
           
                var amount = winkelamount.innerHTML;
             if(amount == 10){
                return;
            }
            
                amount++;  winkelamount.innerHTML = amount;
        
        
         
                addwinkelwagenprice(flatprice);
       
        };
            
        winkelremove.onclick = function() {
                
                
                var amount = winkelamount.innerHTML;
            if(amount == 0){
                return;
            }
                amount--;  winkelamount.innerHTML = amount;
               
            removewinkelwagenprice(flatprice);
        };
    }
    
    function addwinkelwagenprice(amount){
        var text = (parseFloat(winkelwagenprice.innerHTML.replace(",", ".")) + amount).toFixed(2);
        winkelwagenprice.innerHTML = text.replace(".", ",");
    }
    
    function removewinkelwagenprice(amount){
        var text = (parseFloat(winkelwagenprice.innerHTML.replace(",", ".")) - amount).toFixed(2);
        winkelwagenprice.innerHTML = text.replace(".", ",");
    }