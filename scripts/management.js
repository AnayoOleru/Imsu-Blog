<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="styles/index.css">
	<link rel="icon" type="image/ico" href="images/Schoologo.png"/>
	<script type="text/javascript" src="scripts/index.js"></script>
	<title> IMSU AMEBO | students blog</title>
</head>
<body>

<!-- Sidebar/menu -->
<nav class="w3-sidebar w3-bar-block w3-green w3-collapse w3-top" style="z-index:3;width:250px" id="mySidebar">
  <div class="w3-container w3-display-container w3-padding-16">
    <i onclick="w3_close()" class="fa fa-remove w3-hide-large w3-button w3-display-topright"></i>
    <h3 class="w3-wide"><b>IMSU AMEBO</b></h3>
  </div>
  <div class="w3-padding-64 w3-large w3-text-white" style="font-weight:bold">
    <a href="markups/globalAmebo.html" class="w3-bar-item w3-button">Global Amebo</a>
    <a href="markups/bishopcourt.html" class="w3-bar-item w3-button">Bishop Court Amebo</a>
    <a href="markups/frontgate.html" class="w3-bar-item w3-button">Front Gate Amebo</a>
    <a href="markups/okwuratta.html" class="w3-bar-item w3-button">Okwuratta Amebo</a>
    <a href="markups/lovegarden.html" class="w3-bar-item w3-button">Love Garden Amebo</a>
    <a onclick="myAccFunc()" href="javascript:void(0)" class="w3-button w3-block w3-green w3-left-align" id="myBtn">
      Others <i class="fa fa-caret-down"></i>
    </a>
    <div id="demoAcc" class="w3-bar-block w3-hide w3-padding-large w3-medium">
      <a href="markups/admission.html" class="w3-bar-item w3-button w3-light-green"><i class="fa fa-caret-right w3-margin-right"></i>Admission</a>
      <a href="markups/contribute.html" class="w3-bar-item w3-button">Contribute</a>
      <!-- <a href="#" class="w3-bar-item w3-button">Bootcut</a>
      <a href="#" class="w3-bar-item w3-button">Straight</a> -->
    </div>
   <!--  <a href="#" class="w3-bar-item w3-button">About Imsu Amebo</a>
    <a href="#" class="w3-bar-item w3-button">Contact us</a>
    <a href="#" class="w3-bar-item w3-button">Advertize</a>
    <a href="#" class="w3-bar-item w3-button">Admin</a> -->
  </div>
  <a href="markups/about.html" class="w3-bar-item w3-button w3-padding">About</a>
  <a href="markups/contact.html" class="w3-bar-item w3-button w3-padding">Contact</a>
  <a href="markups/advertise.html" class="w3-bar-item w3-button w3-padding">Advertise</a>  
  <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding" onclick="document.getElementById('newsletter').style.display='block'">Subscribe</a> 
  <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding" onclick="document.getElementById('admin').style.display='block'">Admin</a>  
  <!-- <a href="#footer"  class="w3-bar-item w3-button w3-padding">Subscribe</a> -->
</nav>



<!-- responsive side -->
<!-- Top menu on small screens -->
<header class="w3-bar w3-top w3-hide-large w3-green w3-xlarge">

<!-- Navigation bar with social media icons -->
<div class="w3-bar w3-green w3-center">
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-facebook-official"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-instagram"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-snapchat"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-flickr"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-twitter"></i></a>
  <a href="#" class="w3-bar-item w3-button"><i class="fa fa-linkedin"></i></a>
</div>

  <div class="w3-bar-item w3-padding-24 w3-wide"><img src="images/Schoologo.png" style="height: 50px; width: 50px"><span class="bold"><span class="bold">IMSU</span> AMEBO</div>
  <a href="javascript:void(0)" class="w3-bar-item w3-button w3-padding-24 w3-right" onclick="w3_open()"><i class="fa fa-bars"></i></a>
</header>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:260px">

  <!-- Push down content on small screens -->
  <div class="w3-hide-large" style="margin-top:150px"></div>



<!-- admin login form -->
<div id="admin" class="w3-modal">
  <div class="w3-modal-content w3-animate-zoom" style="padding:32px">
    <div class="w3-container w3-white w3-center">
      <i onclick="document.getElementById('admin').style.display='none'" class="fa fa-remove w3-right w3-button w3-transparent w3-xxlarge"></i>
      <h2 class="w3-wide">Are you Admin?</h2>
      <p>Sign in.</p>
      <p><input class="w3-input w3-border" type="text" placeholder="Enter FullName" required=""></p>
      <p><input class="w3-input w3-border" type="e-mail" placeholder="Enter e-mail" required=""></p>
      <p><input class="w3-input w3-border" type="passsword" placeholder="Enter passsword" required=""></p>
      <button type="button" class="w3-button w3-padding-large w3-green w3-margin-bottom" onclick="document.getElementById('admin').style.display='none'">Subscribe</button>
    </div>
  </div>
</div>

</body>
</html>