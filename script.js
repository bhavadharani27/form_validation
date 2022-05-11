<script type="text/javascript">
        function validate() {

            if (document.myForm.First_Name.value == "") {

                alert("Please provide First Name !");
                document.myForm.First_Name.focus();
                return false;
            }

            if (document.myForm.Last_Name.value == "") {

                alert("Please provide Last Name !");
                document.myForm.Last_Name.focus();
                return false;
            }
            if(document.myForm.DOB.value=="") {
                alert("Please provite DOB!");
                document.myForm.DOB.focus();
                return false;
            }

            if (document.myForm.Mobile.value == "") {

                alert("Please provide mobile number !!");
                document.myForm.Mobile.focus();
                return false;
            }

            if (document.myForm.Email.value == "") {

                alert("Please provide valid Email !!");
                document.myForm.Email.focus();
                return false;
            }

            if (document.myForm.Password.value == "") {

                alert("Please Enter Password !!");
                document.myForm.Password.focus();
                return false;
            }

            if (document.myForm.city.value == "") {

                alert("Please provide city");
                document.myForm.city.focus();
                return false;
            }

            if (document.myForm.pincode.value == "") {

                alert("Please Enter pincode !!");
                document.myForm.pincode.focus();
                return false;
            }
            function newFunction(){ 
                document.myForm("newForm").clear();
            }
            function confirmPassword(){
                var Password=document.myForm("Password").value;
                var confirmPassword=document.myForm.("confirmPassword").value;
                if(Password==confirmPassword)
                {return true;
                }
                else
                alert("incorrect"); 
            }    

            return (true);

        }
    </script>