function updatecities()
{
    if((document.tribute.trb_countryPst.options[document.tribute.trb_countryPst.selectedIndex].value=="1") || (document.tribute.trb_countryPst.options[document.tribute.trb_countryPst.selectedIndex].value=="37"))
        {

            document.getElementById('trb_itemState').style.display = "block";
            document.getElementById('trb_StateClear').style.display = "block";
            document.getElementById('trb_StateLabel').style.display = "block";
            document.getElementById('trb_statePst').style.display = "block";
        }
    else
        {
            document.getElementById('trb_itemState').style.display = "none";
            //document.getElementById('trb_StateClear').style.display = "none";
            //document.getElementById('trb_StateLabel').style.display = "none";
            //document.getElementById('trb_statePst').style.display = "none";
        }
}


function checkFormTribute(theForm){
      var reason = "";
      var error_found = false;
      var rad_val = "";
      var ecard_val = "";
      reason = validateAmtTribute(document.tribute, 'radAmount');
      if (reason != true)
           {
              error_found = true;
           }

      reason = validateTypeTribute(document.tribute,'trb_type');
      if (reason != true)
           {
              error_found = true;
           }

       reason = validateaAkTypeTribute(document.tribute,'ackType');
       if (reason != true)
           {
              error_found = true;
           }


       for (var i=0; i < document.tribute.ackType.length; i++)
           {
           if (document.tribute.ackType[i].checked)
              {
                rad_val = document.tribute.ackType[i].value;
              }
           }

       if (rad_val=="5") //No acknowledgement
           {
            reason = validateInput(document.tribute.trb_HonFAck,'trb_HonFAck','trb_HonFAckERROR');
            //alert(document.tribute.trb_HonFAck.value);
            if (reason != true)
                {
                 error_found = true;
                }

            reason = validateInput(document.tribute.trb_HonLAck,'trb_HonLAck','trb_HonLAckERROR');
            if (reason != true)
                {
                 error_found = true;
                }
           }
       if (rad_val=="4") //START POSTAL CARD SECTION
           {
            reason = validateInput(document.tribute.trb_SendPst,'trb_SendPst','trb_SendPstERROR');
            //alert(document.tribute.trb_HonFAck.value);
            if (reason != true)
                {
                 error_found = true;
                }

            reason = validateInput(document.tribute.trb_HonFPst,'trb_HonFPst','trb_HonFPstERROR');
            if (reason != true)
                {
                 error_found = true;
                }

            reason = validateInput(document.tribute.trb_HonLPst,'trb_HonLPst','trb_HonLPstERROR');
            if (reason != true)
                {
                 error_found = true;
                }

            // 2nd Honoree
            if (document.tribute.chkBoxHonor2Pst.checked)
              {
                    reason = validateInput(document.tribute.trb_Hon2FPst,'trb_Hon2FPst','trb_Hon2FPstERROR');
                    if (reason != true)
                        {
                         error_found = true;
                        }

                    reason = validateInput(document.tribute.trb_Hon2LPst,'trb_Hon2LPst','trb_Hon2LPstERROR');
                    if (reason != true)
                        {
                         error_found = true;
                        }
              }


            reason = validateSelect(document.tribute.trb_titleRecpID,'XX','trb_titleRecpID','trb_titleRecpPERROR' );
            if (reason != true)
                 {
                    error_found = true;
                 }

            reason = validateInput(document.tribute.Recp_FNamePst,'Recp_FNamePst','Recp_FNamePstERROR');
            if (reason != true)
                {
                 error_found = true;
                }
            reason = validateInput(document.tribute.Recp_LNamePst,'Recp_FNamePst','Recp_LNamePstERROR');
            if (reason != true)
                {
                 error_found = true;
                }

            // 2nd Addresse
            /*if (document.tribute.chkBoxHonor2Pst.checked)
              {
                    reason = validateSelect(document.tribute.trb_titleRecpID2,'XX','trb_titleRecpID2','trb_titleRecpPERROR2' );
                    if (reason != true)
                         {
                            error_found = true;
                         }

                    reason = validateInput(document.tribute.trb_Hon2FPst,'trb_Hon2FPst','Recp_FNamePstERROR2');
                    if (reason != true)
                        {
                         error_found = true;
                        }

                    reason = validateInput(document.tribute.Recp_LNamePst2,'Recp_LNamePst2','Recp_LNamePstERROR2');
                    if (reason != true)
                        {
                         error_found = true;
                        }
              }

        */

           reason = validateInput(document.tribute.trb_streetAddressPst,'trb_streetAddressPst','trb_streetAddressPstERROR');
            if (reason != true)
                {
                 error_found = true;
                }
           reason = validateInput(document.tribute.trb_cityPst,'trb_cityPst','trb_cityPstERROR');
            if (reason != true)
                {
                 error_found = true;
                }

           /*
           if((document.tribute.trb_countryPst.options[document.tribute.trb_countryPst.selectedIndex].value="1") || (document.tribute.trb_countryPst.options[document.tribute.trb_countryPst.selectedIndex].value=="37"))
           {
                reason = validateSelect(document.tribute.trb_statePst,'0','trb_statePst','trb_statePstERROR' );
                if (reason != true)
                   {
                      error_found = true;
                   }
           }
          */
          reason = validateInput(document.tribute.trb_zipPst,'trb_zipPst','trb_zipPstERROR');
            if (reason != true)
                {
                 error_found = true;
                }
           }
      //alert(rad_val);

      if (rad_val=="3") //Ecard
           {
            reason = validateInput(document.tribute.trb_SendEcd,'trb_SendEcd','trb_SndNameERROR');
            if (reason != true)
                {
                 error_found = true;
                }

            reason = validateEmail(document.tribute.trb_SndEmailEcd,'trb_SndEmailEcd','trb_SndEmailEcdERROR');
              if (reason != true)
               {
                  error_found = true;
               }

            // 2nd Honoree
            if (document.tribute.chkBoxHonor2.checked)
              {
                    reason = validateInput(document.tribute.trb_Hon2FEcd,'trb_Hon2FEcd','trb_Hon2FEcdERROR');
                    if (reason != true)
                        {
                         error_found = true;
                        }

                    reason = validateInput(document.tribute.trb_Hon2LEcd,'trb_Hon2LEcd','trb_Hon2LEcdERROR');
                    if (reason != true)
                        {
                         error_found = true;
                        }
              }

            reason = validateInput(document.tribute.trb_HonFEcd,'trb_HonFEcd','trb_HonFEcdERROR');
            if (reason != true)
                {
                 error_found = true;
                }

            reason = validateInput(document.tribute.trb_HonLEcd,'trb_HonLEcd','trb_HonLEcdERROR');
            if (reason != true)
                {
                 error_found = true;
                }

            reason = validateSelect(document.tribute.trb_titleRecpEcdID,'XX','trb_titleRecpEcdID','trb_titleRecpEcdERROR' );
            if (reason != true)
                 {
                    error_found = true;
                 }

           reason = validateInput(document.tribute.trb_RecpFNameEcd,'trb_RecpFNameEcd','trb_RecpFNameEcdERROR');
            if (reason != true)
                {
                 error_found = true;
                }
           reason = validateInput(document.tribute.trb_RecpLNameEcd,'trb_RecpLNameEcd','trb_RecpLNameEcdERROR');
            if (reason != true)
                {
                 error_found = true;
                }

            reason = validateEmail(document.tribute.trb_RecpEmailEcd,'trb_RecpEmailEcd','trb_RecpEmailEcdError');
              if (reason != true)
               {
                  error_found = true;
               }

            for (var i=0; i < document.tribute.ecardID.length; i++)
                   {
                       if (document.tribute.ecardID[i].checked)
                          {
                            ecard_val = document.tribute.ecardID[i].value;
                          }
                   }

           if (ecard_val == "")
                  {
                     document.getElementById('trb_ecardERROR').style.display = "block";
                     error_found = true;
                  }
                  else
                  {
                    document.getElementById('trb_ecardERROR').style.display = "none";
                  }
           }



    if (error_found == true)
    {
        return false;
    }

}

//Functions start

function validateAmtTribute(frm, btnName)
{
    var btn = frm[btnName]
    var valid
    for (var x = 0;x < btn.length; x++)
    {
        valid = btn[x].checked
        test=btn[x].value;
        if (test=="radAmount2")
        {
            var number_validation = document.tribute.radAmount2.value;
            var number_validation2 = isNaN(number_validation);
            if(number_validation != "")
            {
              if (number_validation2 == false && number_validation >= 5.0)
              {
                document.getElementById('trb_radAmountERROR2').style.display = "none";
                return true;
              }
              else
              {
                document.getElementById('trb_radAmountERROR2').style.display = "block";
                return false;
              }
            }
           else
           {
            document.getElementById('trb_radAmountERROR').style.display = "block";
            return false;
           }
        }
        if (valid) {break}
    }
    if(!valid)
    {
        document.getElementById('trb_radAmountERROR').style.display = "block";
        return false;
    }
    else
    {
        document.getElementById('trb_radAmountERROR').style.display = "none";
        return true;
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


function validateTypeTribute(frm, btnName)
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

        document.getElementById('trb_typeERROR').style.display = "block";
        return false;
    }
    else
    {
        document.getElementById('trb_typeERROR').style.display = "none";
        return true;
    }
}

function validateaAkTypeTribute(frm, btnName)
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

        document.getElementById('ackTypeERROR').style.display = "block";
        return false;
    }
    else
    {
        document.getElementById('ackTypeERROR').style.display = "none";
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

function validateEmailv2(email)
    {
        if(email.length <= 0)
        {
          return true;
        }
        var splitted = email.match("^(.+)@(.+)$");
        if(splitted == null) return false;
        if(splitted[1] != null )
        {
          var regexp_user=/^\"?[\w-_\.]*\"?$/;
          if(splitted[1].match(regexp_user) == null) return false;
        }
        if(splitted[2] != null)
        {
          var regexp_domain=/^[\w-\.]*\.[A-Za-z]{2,4}$/;
          if(splitted[2].match(regexp_domain) == null)
          {
            var regexp_ip =/^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/;
            if(splitted[2].match(regexp_ip) == null) return false;
          }// if
          return true;
        }
    return false;
    }

