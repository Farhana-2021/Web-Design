function formSubmit()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var creditCardNo = document.getElementById("creditCardNo").value;
    var creditCardExpM = document.getElementById("ccExpMM").value;
    var creditCardExpY = document.getElementById("ccExpYY").value;
    var photoFr = document.getElementById("Photo_Frame");
    let price_PhotoFr = 12;
    var photoFrQty = Number(document.getElementById("photo_frames_qty").value);
    var lamp = document.getElementById("Lamps");
    let price_lamp = 25;
    var lampQty = Number(document.getElementById("lamps_qty").value);
    var flowerBq = document.getElementById("Flower_bouquet");
    let price_flowerBq= 18;
    var flowerBqQty = Number(document.getElementById("flower_bouquet_qty").value);
    var flowerV = document.getElementById("Flower_Vase");
    let price_flowerV = 30;
    var flowerVQty = Number(document.getElementById("flower_vase_qty").value);
    var dgtWallClock = document.getElementById("Digital_Wall_Clocks");
    let price_dgtWallClock = 60;
    var dgtWallClockQty = Number(document.getElementById("digital_wall_clock_qty").value); 
    
    
    var errors = '';
    let photoFrTotal=0; let lampTotal=0;  let flowerBqTotal=0; let flowerVTotal=0; let dgtWallClockTotal=0; let subTotal=0;
 
    var creditCardNoRegx = /^[\d]{4}[\-][\d]{4}[\-][\d]{4}[\-][\d]{4}$/;
    if (creditCardNoRegx.test(creditCardNo)) 
    {
        errors += "";
    }
    else
    {
        errors += 'Credit card number is not in correct format <br>';  
    }

    var creditCardExpMRegx = /^[A-Z][A-Z][A-Z]$/;
    if (creditCardExpMRegx.test(creditCardExpM)) 
    {
        errors += "";
    }
    else
    {
        errors += 'Month in expiry date of the credit card number is not in correct format <br>';
    }

    var creditCardExpYRegx = /^[0-9][0-9][0-9][0-9]$/;
    if (creditCardExpYRegx.test(creditCardExpY)) 
    {
        errors += "";
    }
    else 
    {
        errors += 'Year in expiry date of the credit card number is not in correct format <br>';
    }
    
    if (errors.trim() != '') 
    {
        document.getElementById('errors').innerHTML = errors + '-- Please fix the above errors --';
        document.getElementById('errors').style.border = '2px dashed white';
    }
    else 
    {
        var lastFourDigits = creditCardNo.substr(-4);
        var  customerInfo = `Name: ${name} <br> 
                             Email: ${email} <br>
                             Credit Card Number: XXXX-XXXX-XXXX-${lastFourDigits}<br>
                             Credit Card Expiry: ${creditCardExpM} ${creditCardExpY}`;
                            
         document.getElementById("custInfo_output").innerHTML = customerInfo;          
      

    var table_output = document.getElementById("tableData");
    let row_index = 0; 
    
   if(photoFr.checked==true)
    {
        photoFrTotal = price_PhotoFr*photoFrQty;
        //document.getElementById("row1").innerHTML = photoFrTotal;
        var row = table_output.insertRow(row_index); 
        var cell = row.insertCell(0);
        cell.innerHTML="Photo Frame";
        cell = row.insertCell(1);
        cell.innerHTML=price_PhotoFr;
        cell = row.insertCell(2);
        cell.innerHTML=photoFrQty; 
        cell = row.insertCell(3);
        cell.innerHTML=photoFrTotal; 
        
        row_index+=1;
    }
    
    if(lamp.checked==true)
    {
        lampTotal = price_lamp*lampQty;
        //document.getElementById("row2").innerHTML = lampTotal;
        var row = table_output.insertRow(row_index); 
        var cell = row.insertCell(0);
        cell.innerHTML="Lamp";
        cell = row.insertCell(1);
        cell.innerHTML=price_lamp;
        cell = row.insertCell(2);
        cell.innerHTML=lampQty; 
        cell = row.insertCell(3);
        cell.innerHTML=lampTotal; 
        
        row_index+=1;
    }

    if(flowerBq.checked==true)
    {
        flowerBqTotal = price_flowerBq*flowerBqQty;
        //document.getElementById("row3").innerHTML = flowerBqTotal;
        var row = table_output.insertRow(row_index); 
        var cell = row.insertCell(0);
        cell.innerHTML="Flower Bouquet";
        cell = row.insertCell(1);
        cell.innerHTML=price_flowerBq;
        cell = row.insertCell(2);
        cell.innerHTML=flowerBqQty; 
        cell = row.insertCell(3);
        cell.innerHTML=flowerBqTotal; 
        
        row_index+=1;
    }
    
    if(flowerV.checked==true)
    {
        flowerVTotal = price_flowerV*flowerVQty;
        //document.getElementById("row4").innerHTML = flowerVTotal;
        var row = table_output.insertRow(row_index); 
        var cell = row.insertCell(0);
        cell.innerHTML="Flower Vase";
        cell = row.insertCell(1);
        cell.innerHTML=price_flowerV;
        cell = row.insertCell(2);
        cell.innerHTML=flowerVQty; 
        cell = row.insertCell(3);
        cell.innerHTML=flowerVTotal; 
        
        row_index+=1;
    }

    if(dgtWallClock.checked==true)
    {
        dgtWallClockTotal = price_dgtWallClock*dgtWallClockQty;
        //document.getElementById("row5").innerHTML = dgtWallClockTotal;
        var row = table_output.insertRow(row_index); 
        var cell = row.insertCell(0);
        cell.innerHTML="Digital Wall Clock";
        cell = row.insertCell(1);
        cell.innerHTML=price_dgtWallClock;
        cell = row.insertCell(2);
        cell.innerHTML=dgtWallClockQty; 
        cell = row.insertCell(3);
        cell.innerHTML=dgtWallClockTotal; 
        
        row_index+=1;
    }
        let subTotal = 0;
        subTotal=photoFrTotal+ lampTotal+flowerBqTotal+flowerVTotal+dgtWallClockTotal;

        let donation=0; 
        let minLimit_donation = 10;

        if(subTotal > minLimit_donation)
        {
            donation=0.10*subTotal;
        }
        else
        {
            donation=minLimit_donation;
        }
        
        let total=subTotal+donation;
        
        document.getElementById("Total").innerHTML = `Sub-total: $${subTotal.toFixed(2)}<br>Donation: $${donation.toFixed(2)}<br>Total Amount to Pay: $${total.toFixed(2)}`;
    }
    return false;
    
}
