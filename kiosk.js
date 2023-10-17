    let p_vanilla= 1.25; let qty_vanilla =0; let total_vanilla=0;
    let p_choco= 1.50; let qty_choco =0; let total_choco=0;
    let p_coconut= 1.95; let qty_coconut =0; let total_coconut=0;
    let p_strawberry= 1.75; let qty_strawberry =0; let total_strawberry=0;
    let p_banana= 1.75; let qty_banana =0; let total_banana=0;
    let p_mango= 2.25; let qty_mango =0; let total_mango=0;
    
    function vanilla_calc()
       { 
        qty_vanilla = parseInt(prompt('Enter the Quantity of Vanilla flavored cone: '));
        while(isNaN(qty_vanilla)||qty_vanilla<=0)
        {
            alert("Please enter a positive number");
            qty_vanilla = parseInt(prompt('Enter the Quantity of Vanilla flavored cone: '));
        }
        total_vanilla = qty_vanilla * p_vanilla;
       }  
    
    function choco_calc()
       { 
        qty_choco = parseInt(prompt('Enter the Quantity of Chocolate flavored cone: '));
        while(isNaN(qty_choco)||qty_choco<=0)
        {
            alert("Please enter a positive number");
            qty_choco = parseInt(prompt('Enter the Quantity of Chocolate flavored cone: '));
        }
        total_choco = qty_choco * p_choco;
       }  

    function coconut_calc()
       { 
        qty_coconut = parseInt(prompt('Enter the Quantity of Coconut flavored cone: '));
        while(isNaN(qty_coconut)||qty_coconut<=0)
        {
            alert("Please enter a positive number");
            qty_coconut = parseInt(prompt('Enter the Quantity of Coconut flavored cone: '));
        }
        total_coconut = qty_coconut * p_coconut;
       }  

    function strawberry_calc()
       { 
        qty_strawberry = parseInt(prompt('Enter the Quantity of Strawberry flavored cone: '));
        while(isNaN(qty_strawberry)||qty_strawberry<=0) 
        {
            alert("Please enter a positive number");
            qty_strawberry = parseInt(prompt('Enter the Quantity of Strawberry flavored cone: '));
        }
        total_strawberry = qty_strawberry * p_strawberry;
       }  

    function banana_calc()
       { 
        qty_banana = parseInt(prompt('Enter the Quantity of Banana flavored cone: '));
        while(isNaN(qty_banana)||qty_banana<=0)
        {
            alert("Please enter a positive number");
            qty_banana = parseInt(prompt('Enter the Quantity of Banana flavored cone: '));
        }
        total_banana = qty_banana * p_banana;
       }  

    function mango_calc()
       { 
        qty_mango = parseInt(prompt('Enter the Quantity of Mango flavored cone: '));
        while(isNaN(qty_mango)||qty_mango<=0)
        {
            alert("Please enter a positive number");
            qty_mango = parseInt(prompt('Enter the Quantity of Mango flavored cone: '));
        }
        total_mango = qty_mango * p_mango;
       }  
       
    function checkout()
       {
        let fl_name1 = document.getElementById('btn_vanilla').value;
        let fl_name2 = document.getElementById('btn_choco').value;
        let fl_name3 = document.getElementById('btn_coconut').value;
        let fl_name4 = document.getElementById('btn_strawberry').value;
        let fl_name5 = document.getElementById('btn_banana').value;
        let fl_name6 = document.getElementById('btn_mango').value;

            var nameCustomer = prompt("Please enter your name: ");
            document.write(`<b>Receipt for customer: ${nameCustomer}<b>`);

            document.write (`<br><br><table width="50%" align="left" border="2">`);
            document.write(`<tr><th>Flavor Name</th><th>Unit Price</th><th>Quantity</th><th>Flavor Total</th></tr>`);

            if(qty_vanilla>0)
            {
             document.write(`<tr><td>${fl_name1}</td><td>$${p_vanilla.toFixed(2)}</td><td>${qty_vanilla}</td><td>$${total_vanilla.toFixed(2)}</td></tr>`);
            }
            if(qty_choco>0)
            {
                document.write(`<tr><td>${fl_name2}</td><td>$${p_choco.toFixed(2)}</td><td>${qty_choco}</td><td>$${total_choco.toFixed(2)}</td></tr>`);
            }
            if(qty_coconut>0)
            {
                document.write(`<tr><td>${fl_name3}</td><td>$${p_coconut.toFixed(2)}</td><td>${qty_coconut}</td><td>$${total_coconut.toFixed(2)}</td></tr>`);
            }
            if(qty_strawberry>0)
            {
                document.write(`<tr><td>${fl_name4}</td><td>$${p_strawberry.toFixed(2)}</td><td>${qty_strawberry}</td><td>$${total_strawberry.toFixed(2)}</td></tr>`);
            }
            if(qty_banana>0)
            {
                document.write(`<tr><td>${fl_name5}</td><td>$${p_banana.toFixed(2)}</td><td>${qty_banana}</td><td>$${total_banana.toFixed(2)}</td></tr>`);
            }
            if(qty_mango>0)
            {
                document.write(`<tr><td>${fl_name6}</td><td>$${p_mango.toFixed(2)}</td><td>${qty_mango}</td><td>$${total_mango.toFixed(2)}</td></tr>`);
            }
            
            let subTotal=total_vanilla+ total_choco+total_coconut+total_strawberry+total_banana+total_mango;
            let gst=subTotal*0.13;
            let total=subTotal+gst;

            document.write(`<tr><td><b>SUBTOTAL<b></td><td></td><td></td><td><b>$${subTotal.toFixed(2)}<b></td></tr>`);
            document.write(`<tr><td><b>GST @13%<b></td><td></td><td></td><td><b>$${gst.toFixed(2)}<b></td></tr>`);
            document.write(`<tr><td><b>TOTAL<b></td><td></td><td></td><td><b>$${total.toFixed(2)}<b></td></tr>`);
            document.write(`</table>`);
            document.write(`<br><br><br><br><br><br><br><br><br><br><br><br>THANK YOU!`);
        }