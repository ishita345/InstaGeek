function getLastRadio (frmName, rbGroupName) {
 var radios = document[frmName].elements[rbGroupName];
 for (var i=0; i <radios.length; i++) {
  if (radios[i].checked) {
   return true;
  }
 }
 return false;
}

function checkFormMonthly(theForm)
{
      var reason = "";
      var error_found = false;

      reason = validateAmtMonthly(document.monthly, 'radAmount');
      //alert(reason)
      if (reason != true)
       {
          error_found = true;
       }


    if (error_found == true)
    {
        return false;
    }

}

//Functions start

function validateAmtMonthly(frm, btnName)
{
    var btn = frm[btnName]
    var valid
    for (var x = 0;x < btn.length; x++)
    {
        valid = btn[x].checked
        test=btn[x].value;
        if (test=="radAmount2")
        {
            var number_validation = document.monthly.radAmount2.value;
            var number_validation2 = isNaN(number_validation);
            if(number_validation != "")
            {
              if (number_validation2 == false && number_validation >= 7.50)
              {
                document.getElementById('monthly_radAmountERROR2').style.display = "none";
                return true;
              }
              else
              {
                document.getElementById('monthly_radAmountERROR2').style.display = "block";
                return false;
              }
            }
           else
           {
            document.getElementById('monthly_radAmountERROR').style.display = "block";
            return false;
           }
        }
        if (valid) {break}
    }
    if(!valid)
    {
        document.getElementById('monthly_radAmountERROR').style.display = "block";
        return false;
    }
    else
    {
        document.getElementById('monthly_radAmountERROR').style.display = "none";
        return true;
    }
}
