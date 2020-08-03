<?php include("header.php"); ?>


<main>

<section class="contacts above-top-page">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="top-page">
				<h2><img src="img/icon1.svg" alt=""> <span>About us</span> <img src="img/icon2.svg" alt=""></h2>
				<h1>Contacts & Bank information</h1>
			</div>
			</div>
		</div>
		<div class="above-inner">
			<div class="row">
				<div class="col-lg-12">
					<div id="map" class="map"></div>
				</div>
			</div>
			<div class="mob-row">
				<div class="row">
					<div class="col-lg-12">
						<div class="text-inner">
							<h3>General office</h3>
							<div class="contact-divider">
								<img src="img/team-divider.svg" alt="">
							</div>
							<h6>AzFinance Investment company" CJSC</h6>
							<h6>Address: <span>Bakı şəhəri, Nəriman Nərimanov küçəsi, 206, blok 466. Az1065.</span></h6>
							<h6>Phone: <a href="tel:+994123103330"><span>+(99 412) 310 33 30</span></a></h6>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="bank text-inner">
							<h3>Bank məlumatları</h3>
							<div class="contact-divider">
								<img src="img/team-divider.svg" alt="">
							</div>  
							<h6>AzFinance Investment company" CJSC</h6>  
							<h6>TIN: <span>1303538081</span></h6>  
							<h6>Account No for AZN: <span>AZ90AZFI00000100000425190002</span></h6>
							<h6>Account No for EUR: <span>AZ36AZFI00000100000425190004</span></h6>
							<h6>Account No for USD: <span>AZ63AZFI00000100000425190003</span></h6>
							<h6>Account No for GBP: <span>AZ09AZFI00000100000425190005</span></h6>
							<h6>Bank: OJSC "AFB Bank"</h6>
							<h6>TIN of Bank: <span>1301703781</span></h6>
							<h6>Code: <span>503217</span></h6>
							<h6>Corr. account: <span>AZ81NABZ01350100000000091944</span></h6>
							<h6>SWIFT Bik: <span>AZFIAZ22</span></h6>
						</div>
					</div>
				</div>
			</div>
			<div class="mob-row">
				<div class="row">
					<div class="col-lg-12">
						<div class="breadcrums">
							<ul>
								<li><a href="">Home</a></li>
								<li>/</li>
								<li>Full path</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>  

</main>

<script>
  function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: {lat: 41.7234198, lng: 46.4139318}, 
  });

  var image = 'img/marker.svg';
  var beachMarker = new google.maps.Marker({
    position: {lat: 41.7234198, lng: 46.4139318}, 
    map: map,
    icon: image
  });
  }

</script>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUUMpytkjaccb_tAOF9uxOirXTNevcAtA&callback=initMap"></script> 



<?php include("footer.php"); ?>