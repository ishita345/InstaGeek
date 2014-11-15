function dupAddressInfo()
        {
            if (document.getElementById('check_difAddress').checked)
            {
                document.getElementById('BillTitle').value = document.getElementById('ShipTitle').value;
                document.getElementById('BillFirstName').value = document.getElementById('ShipFirstName').value;
                document.getElementById('BillMI').value = document.getElementById('ShipMI').value;
                document.getElementById('BillLastName').value = document.getElementById('ShipLastName').value;
                document.getElementById('BillCountry').value = document.getElementById('ShipCountry').value;
                document.getElementById('BillAdd1').value = document.getElementById('ShipAddress').value;
                document.getElementById('BillAdd2').value = document.getElementById('ShipAddress2').value;
                document.getElementById('BillApt').value = document.getElementById('ShipApt').value;
                document.getElementById('BillCity').value = document.getElementById('ShipCity').value;
                document.getElementById('BillState').value = document.getElementById('ShipState').value;
                document.getElementById('BillZip').value = document.getElementById('ShipZip').value;

            }
            else if( !document.getElementById('check_difAddress').checked )
            {
                document.getElementById('BillTitle').value = "*";
                document.getElementById('BillFirstName').value = "";
                document.getElementById('BillMI').value = "";
                document.getElementById('BillLastName').value = "";
                document.getElementById('BillCountry').value = "1";
                document.getElementById('BillAdd1').value = "";
                document.getElementById('BillAdd2').value = "";
                document.getElementById('BillApt').value = "";
                document.getElementById('BillCity').value = "";
                document.getElementById('BillState').value = "0";
                document.getElementById('BillZip').value = "";
            }
        }