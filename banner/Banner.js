   //JavaScript code for the slideshow (banner)
   let banners = document.getElementsByClassName("banner");
   let accordionButtons = document.getElementsByClassName("accordion");

   // Set the first banner to active
   // Set the first accordion to active
   let currentBanner = 0;
   let currentAccordion = 0;

   // Show the first banner
   // Show the first accordion
   // Hide the rest of the banners
   // Hide the rest of the accordions
   // n is the index of the banner that was clicked
   function showBanner(n) {
   banners[currentBanner].classList.remove("active");
   banners[n].classList.add("active");
   currentBanner = n;
}

   // n is the index of the accordion button that was clicked
   // the function will toggle the accordion content
   // and change the active accordion button
   function toggleAccordion(n) {
   let accordionContent = accordionButtons[n].nextElementSibling;
   accordionContent.style.display = accordionContent.style.display === "block" ? "none" : "block";

   accordionButtons[currentAccordion].classList.remove("active-accordion");
   accordionButtons[n].classList.add("active-accordion");
   currentAccordion = n;
}

   // explain what this does
   // this will show the next banner
   // after 5 seconds(5000 is in milliseconds)
   setInterval(function() {
   let nextBanner = (currentBanner + 1) % banners.length;
   showBanner(nextBanner);
}, 5000);
   // Add event listeners to the accordion buttons
   // When clicked, the accordion will open/close
for (let i = 0; i < accordionButtons.length; i++) {
 accordionButtons[i].addEventListener("click", function() {
     toggleAccordion(i);
       });
   }
