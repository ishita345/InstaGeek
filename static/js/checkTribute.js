function checkTrib(theForm)
{
        var reason = "";
        var error_found = false;
        reason = validateAmt(document.tribute, 'radAmount');
        if (reason != true)
       {
          error_found = true;
       }


    if (document.tribute.ackType[0].checked)
    {
          if (document.tribute.ifCompany.checked==true)
              {
                  reason = validateInput(document.tribute.company_name,'company_name','company_nameERROR');
                  if (reason != true)
                   {
                      error_found = true;
                   }
                }

          reason = validateSelect(document.tribute.trb_title1,'XX','trb_title1','trb_title1ERROR' );
          if (reason != true)
               {
                  error_found = true;
               }


          reason = validateInput(document.tribute.trb_FName1,'trb_FName1','trb_FName1ERROR');
          if (reason != true)
               {
                  error_found = true;
               }
          reason = validateInput(document.tribute.trb_LName1,'trb_LName1','trb_LName1ERROR');
          if (reason != true)
               {
                  error_found = true;
               }

          // Validating is if this gift is being made by more than one person.
          if (document.tribute.ifDonor2.checked==true)
            {
                  reason = validateSelect(document.tribute.trb_title2,'XX','trb_title2','trb_title2ERROR' );
                  if (reason != true)
                       {
                          error_found = true;
                       }
                  reason = validateInput(document.tribute.trb_FName2,'trb_FName2','trb_FName2ERROR');
                  if (reason != true)
                   {
                      error_found = true;
                   }
                  reason = validateInput(document.tribute.trb_LName2,'trb_LName2','trb_LName2ERROR');
                  if (reason != true)
                   {
                      error_found = true;
                   }
            }

          reason = validateEmail(document.tribute.trb_emailEcd,'trb_emailEcd','trb_emailEcdERROR');
              if (reason != true)
               {
                  error_found = true;
               }

          //
          reason = validateInput(document.tribute.trb_HonEcd,'trb_HonEcd','trb_HonEcdERROR');
              if (reason != true)
                   {
                      error_found = true;
                   }

           reason = validateSelect(document.tribute.trb_titleRecp,'XX','trb_titleRecp','trb_titleRecpERROR' );
              if (reason != true)
                   {
                      error_found = true;
                   }
           reason = validateInput(document.tribute.Recp_FNameEcd,'Recp_FNameEcd','Recp_FNameEcdERROR');
              if (reason != true)
               {
                  error_found = true;
               }
           reason = validateInput(document.tribute.Recp_LNameEcd,'Recp_LNameEcd','Recp_LNameEcdERROR');
              if (reason != true)
               {
                  error_found = true;
               }

           reason = validateEmail(document.tribute.Recp_emailEcd,'Recp_emailEcd','Recp_emailEcdERROR');
              if (reason != true)
               {
                  error_found = true;
               }


            //
            //var hours = currentTime.getHours()
            //var minutes = currentTime.getMinutes()

            var fromDate = document.tribute.send_date.value;

            var CurrentDate = new Date();
            var SendDate= new Date(fromDate);

            reason = validateDate(SendDate,CurrentDate,'datex','Send_DateEcdERROR');
              if (reason != true)
               {
                  error_found = true;
               }

          //reason += validateInput(document.tribute.Recp_emailEcd,'Recp_emailEcd','Recp_emailEcdERROR');
         // reason += validateInput(document.tribute.Send_emailEcd,'Send_emailEcd','Send_emailEcdERROR');
          //reason += validateRadio(document.tribute,'ecard','ecardERROR');

        if (reason != "") {
            return false;
        }
    }

    else if(document.tribute.ackType[1].checked)
    {
          alert("here2");
          //reason += validateInput(document.tribute.trb_SendPst,'trb_SendPst','trb_SendPstERROR');
          //reason += validateInput(document.tribute.trb_HonFPst,'trb_HonFPst','trb_HonFPstERROR');
          //reason += validateInput(document.tribute.trb_HonLPst,'trb_HonLPst','trb_HonLPstERROR');
          //reason += validateSelect(document.tribute.trb_titleRecpP,'XX','trb_titleRecpP','trb_titleRecpPERROR');
          //reason += validateInput(document.tribute.Recp_FNamePst,'Recp_FNamePst','Recp_FNamePstERROR');
          //reason += validateInput(document.tribute.Recp_LNamePst,'Recp_LNamePst','Recp_LNamePstERROR');
          //reason += validateInput(document.tribute.trb_streetAddressPst,'trb_streetAddressPst','trb_streetAddressPstERROR');
          //reason += validateInput(document.tribute.trb_cityPst,'trb_cityPst','trb_cityPstERROR');
          //reason += validateSelect(document.tribute.trb_statePst,'0','trb_statePst','trb_statePstERROR');
          //reason += validateInput(document.tribute.trb_zipPst,'trb_zipPst','trb_zipPstERROR');

        if (reason != "") {
            return false;
        }
    }

    else if(document.tribute.ackType[2].checked)
    {
       reason = validateInput(document.tribute.trb_HonAck, 'trb_HonAck', 'trb_HonAckERROR');
       if (reason != true)
        {
            error_found = true;
        }
    }

    if (error_found == true)
    {
        return false;
    }
}

function validateInput(fld,fldName,fldERROR)
{
    if (fld.value == "")
    {
        document.getElementById(fldName).style.borderColor = 'red';
        document.getElementById(fldERROR).style.display = "block";
        return false;
    }
    else
    {
        document.getElementById(fldName).style.borderColor = '#adadad';
        document.getElementById(fldERROR).style.display = "none";
        return true;
    }
}

function validateSelect(drop,val,selName,ERROR){
    if (drop.value == val)
    {
        document.getElementById(selName).style.borderColor = 'red';
        document.getElementById(ERROR).style.display = "block";
        return false;
    }
    else
    {
        document.getElementById(selName).style.borderColor = '#adadad';
        document.getElementById(ERROR).style.display = "none";
        return true;
    }
}

function validateAmt(frm, btnName)
{
    var btn = frm[btnName]
    var valid
    for (var x = 0;x < btn.length; x++)
    {
        valid = btn[x].checked
        if (valid) {break}
    }
    if(!valid)
    {
        var number_validation = document.tribute.radAmount2.value;
        var number_validation2 = isNaN(number_validation);
        if(number_validation != "")
        {
          if (number_validation2 == false && number_validation > 9.99)
          {
            document.getElementById('trb_amtERROR').style.display = "none";
            return true;
          }
          else
          {
            document.getElementById('trb_amtERROR').style.display = "block";
            return false;
          }
        }
       else
       {
        document.getElementById('trb_amtERROR').style.display = "block";
        return false;
       }
    }
    else
    {
        document.getElementById('trb_amtERROR').style.display = "none";
        return true;
    }
}

function validateEmail(fld,fldName,fldERROR)
{
    if (fld.value == "")
    {

        document.getElementById(fldName).style.borderColor = 'red';
        document.getElementById(fldERROR).style.display = "block";
        return false;
    }
    else
    {
        email = fld.value
        if(!validateEmailv2(email))
        {
            //alert("Please enter a valid email");
            //document.user.user_email.focus();
            document.getElementById(fldName).style.borderColor = 'red';
            document.getElementById(fldERROR).style.display = "block";
            return false;
         }
        else
        {
            document.getElementById(fldName).style.borderColor = '#adadad';
            document.getElementById(fldERROR).style.display = "none";
            return true;
        }
    }
}

function validateDate(sendDate,currectDate,fldName,fldERROR)
{
    if (currectDate > sendDate)
    {
        document.getElementById(fldName).style.borderColor = 'red';
        document.getElementById(fldERROR).style.display = "block";
        return false;
    }
    else
    {
        document.getElementById(fldName).style.borderColor = '#adadad';
        document.getElementById(fldERROR).style.display = "none";
        return true;
    }
}

/*
var fromDate = document.forms['recentUpdates'].elements['fromDate'].value;

var toDate = document.forms['recentUpdates'].elements['toDate'].value;

var alertReason1 = 'To Date must be greater than or equal to From Date.'

var endDate = new Date(toDate);

var startDate= new Date(fromDate);

if(fromDate == '' && toDate == '')

{

alert("Please enter From and To Dates");

return false;

}

else if(fromDate == '')

{

alert("Please enter From Date ");

return false;

}

else if(toDate == '')

{

alert("Please enter To Date ");

return false;

}

else if (fromDate !='' && toDate != '' && startDate > endDate)

{

alert(alertReason1);

return false;

}

}

}

*/