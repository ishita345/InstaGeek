function checkFormOneTime(theForm){
      var reason = "";
      var error_found = false;
      reason = validateAmtOneTime(document.onetime, 'radAmount');
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

function validateAmtOneTime(frm, btnName)
{
    var btn = frm[btnName]
    var valid
    for (var x = 0;x < btn.length; x++)
    {
        valid = btn[x].checked
        test=btn[x].value;
        if (test=="radAmount2")
        {
            var number_validation = document.onetime.radAmount2.value;
            var number_validation2 = isNaN(number_validation);
            if(number_validation != "")
            {
              if (number_validation2 == false && number_validation >= 5)
              {
                document.getElementById('onetime_radAmountERROR2').style.display = "none";
                return true;
              }
              else
              {
                document.getElementById('onetime_radAmountERROR2').style.display = "block";
                return false;
              }
            }
           else
           {
            document.getElementById('onetime_radAmountERROR').style.display = "block";
            return false;
           }
        }
        if (valid) {break}
    }
    if(!valid)
    {
        document.getElementById('onetime_radAmountERROR').style.display = "block";
        return false;
    }
    else
    {
        document.getElementById('onetime_radAmountERROR').style.display = "none";
        return true;
    }
}