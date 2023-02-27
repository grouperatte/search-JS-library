import UnbxdSearch from "../../src/index";
// import UnbxdSearch from "@unbxd-ui/vanilla-search-library";

let routeTemplate = `
<div class="UNX-header">
        <div class="UNX-header-inner">
            <div class="UNX-logo">
                UNBXD
            </div>
            <div class="UNX-input-wrapper">
            <form action="javascript:void(0);">
                <input id="unbxdInput" class="UNX-input" />
                <button id="searchBtn" class="fa fa-search UNX-search-btn"></button>
                </form>
            </div>
        </div>
        <nav id="categoryLinks" class="UNX-naviagtion-wrap">
            <button data-id="itemGroupIds:185" class="nav-links" data-path="/sectionals">Sectionals</a>
            <button data-id="itemGroupIds:1800" class="nav-links" data-path="/beds">Beds</button>
        </nav>
    </div>

    <div class="UNX-results-container">
        <div class="UNX-head-wrapper">
            <div class="UNX-selected-actions">
                <div class="UNX-bread-wrapper" id="breadcrumpContainer"></div>
                <div class="UNX-selected-facet-wrapper" id="selectedFacetWrapper"></div>
            </div>
            <div class="UNX-product-type-block" id="productViewTypeContainer"></div>
        </div>
        <div class="UNX-product-results">
            <div class="UNX-facet-wrapper">
                <h2 class="UNX-filter-header">Filter By</h2>
                <div class="UNX-fxd-facet">
                    <div class="UNX-selected-facet-wrapper UNX-selected-f-m" id="selectedMFacetWrapper"></div>
                    <div class="UNX-multilevel-block" id="bucketedFacetWrapper"></div>
                    <div class="UNX-text-facet-block" id="facetsWrapper"></div>
                    <div class="UNX-range-block" id="rangeFacetWrapper"></div>
                    <div class="UNX-m-facet-row">
                        <button data-action="applyFacets" class="UNX-primary-btn UNX-facet-trigger">Apply</button>
                        <button data-action="clearFacets" class="UNX-default-btn UNX-facet-trigger">Clear</button>
                    </div>

                </div>
                <div class="UNX-m-facet-row">
                    <button class="UNX-m-facet-btn UNX-facet-trigger fa fa-filter"></button>
                </div>
            </div>
            <div class="UNX-product-list">
                <div class="UNX-result-header">
                    <div id="didYouMeanWrapper"></div>
                    <div class="UNX-result-right">
                        <div class="UNX-change-products" id="changeNoOfProducts"></div>
                        <div class="UNX-sort-wrapper" id="sortWrapper"></div>
                        <div class="UNX-change-pagination-wrap" id="paginationContainer"></div>
                        <div id="" class="UNX-change-pagination-wrap unxPagination"></div>
                    </div>
                </div>
                <div id="bannerContainer"></div>
                <div class="UNX-product-wrapper" id="searchResultsWrapper"></div>
                <div id="" class="UNX-change-pagination-wrap UNX-m-page unxPagination"></div>
            </div>
        </div>
        <div class="UNX-loader-container" id="loaderEl"></div>
        <div id="noResultWrapper"></div>
        <div id="clickScrollContainer">
        </div>
        <footer id="page-footer" class="page-footer">
  <div class="container">
    <a id="back2Top" title="Back to top" href="#">➤</a>

<!--     <div class="back-to-top-row align-centre">
      <a class="hash-link" href="#page-wrap-content"><span class="beside-svg">Back to the top</span> <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg></a>
    </div>        -->
   
    
    <div class="footer-block-contianer">
      
      	<div class="million-img">
          <img src="//cdn.shopify.com/s/files/1/0057/6657/8279/files/trust_statement_1.png?v=1614316375" alt="">
      	</div>  
      	
      <div class="footer-top-block">
      
      <span class="footer-logo footer-block">
        
        <a href="https://www.bevilles.com.au" title=""><img src="//cdn.shopify.com/s/files/1/0057/6657/8279/files/white_logo_240x80.png?v=1613774868" alt=""></a>
        
      </span>
      
      
      <div class="footer-block column third second-block">
        <div class="rte">
          <p>For over 85 years we have been bringing you a fabulous range of jewellery and watches to make every customer feel fabulous.</p>
        </div>        
      </div>
        <div class="footer-block column third third-block">        
        <div class="social-column">
          <span class="follow-text">Follow us</span>
<ul class="social-links plain">
    
    
    <li><a title="Facebook" class="facebook" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bevilles/"><img src="https://cdn.shopify.com/s/files/1/0057/6657/8279/files/facebook-icon.svg?v=1597112418" alt=""></a></li>
    
    
    <li><a title="Pinterest" class="pinterest" target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com.au/bevilles/"><img src="https://cdn.shopify.com/s/files/1/0057/6657/8279/files/pinterest-icon.svg?v=1597112407" alt=""></a></li>
    
    
    
    
    <li><a title="Instagram" class="instagram" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bevilles/"><img src="https://cdn.shopify.com/s/files/1/0057/6657/8279/files/instagram-icon.svg?v=1597112399" alt=""></a></li>
    

    
</ul>
        </div>
      </div>
        </div>
      
      <div class="notification-footer">
      <ul>
        
          
      	
          
      	
          
      	
          
      	
          
      	
          
      	
          
      	
          
      	
          
      	
          
      	
          
      	
          
            <li>
              
                
                
                    <span>Eternity Club Membership</span>
                
              
            </li>
          
      	
          
            <li>
              
              	<a href="/pages/care-plan">
              
                
                
                    <span>Care Plan</span>
                
              
              </a>
              
            </li>
          
      	
          
            <li>
              
              	<a href="/blogs/news">
              
                
                
                    <span>Blog</span>
                
              
              </a>
              
            </li>
          
      	
          
      	
      </ul>
    </div> 
      
      <div class="footer-nav footer-block column full">
        
        
        
        
        
        	
              <div class="footer-nav-block fifth column  ">
                <h5 style="height: 18px;">The Bevilles Promise</h5>
                
                
                <ul class="plain list-divide" role="navigation" aria-label="Footer navigation">
                  
                  <li><a href="/pages/warranty" title="">365 Day Warranty</a></li>
                  
                  <li><a href="/pages/fast-and-secure-payment" title="">Fast &amp; Secure Payment</a></li>
                  
                  <li><a href="/pages/payright" title="">Payright - Do It Now, Pay Later</a></li>
                  
                  <li><a href="/pages/zippay" title="">Zip - Own it now, pay later</a></li>
                  
                  <li><a href="/pages/afterpay" title="">Afterpay - Shop now, Pay later</a></li>
                  
                  <li><a href="/pages/humm-little-things" title="">humm – Live Interest Free Forever</a></li>
                  
                  <li><a href="/pages/payment-plans" title="">In Store Payment Plans</a></li>
                  
                </ul>
              </div>
        	
        
        	
              <div class="footer-nav-block fifth column  ">
                <h5 style="height: 18px;">Customer Service</h5>
                
                
                <ul class="plain list-divide" role="navigation" aria-label="Secondary footer navigation">
                  
                  <li><a href="/pages/contact" title="">Contact Us</a></li>
                  
                  <li><a href="https://www.bevilles.com.au/pages/christmas-delivery-cut-off-dates" title="">Christmas Delivery</a></li>
                  
                  <li><a href="/pages/shipping-options" title="">Delivery Options</a></li>
                  
                  <li><a href="/pages/click-collect" title="">Click &amp; Collect</a></li>
                  
                  <li><a href="/pages/customer-faqs" title="">FAQs</a></li>
                  
                  <li><a href="/pages/returns-and-refunds" title="">Exchange &amp; Refund Policy</a></li>
                  
                  <li><a href="/pages/repairs-and-servicing" title="">Repair &amp; Servicing</a></li>
                  
                  <li><a href="/pages/watch-repairs" title="">Watch Repairs</a></li>
                  
                </ul>
              </div>
        	
        
        	
              <div class="footer-nav-block fifth column  ">
                <h5 style="height: 18px;">About Bevilles</h5>
                
                
                <ul class="plain list-divide" role="navigation" aria-label="Tertiary footer navigation">
                  
                  <li><a href="/pages/bevilles-family-history" title="">Company Information</a></li>
                  
                  <li><a href="/pages/eternityclub" title="">Eternity Club Membership</a></li>
                  
                  <li><a href="/pages/careers" title="">Careers</a></li>
                  
                  <li><a href="/pages/terms-and-conditions" title="">Terms and Conditions</a></li>
                  
                  <li><a href="/pages/policy-privacy" title="">Privacy</a></li>
                  
                </ul>
              </div>
        	
        
        	
              <div class="footer-nav-block fifth column  ">
                <h5 style="height: 18px;">Product Information</h5>
                
                
                <ul class="plain list-divide" role="navigation" aria-label="translation missing: en.layout.footer.menu_4_aria_label">
                  
                  <li><a href="/pages/guide-collection" title="">Jewellery Guides</a></li>
                  
                  <li><a href="/pages/jewellery-care" title="">Jewellery Care</a></li>
                  
                  <li><a href="/pages/ethical-sourcing-of-diamonds" title="">Ethical sourcing of Diamonds</a></li>
                  
                  <li><a href="/pages/ring-size-guide" title="">Ring Sizing</a></li>
                  
                  <li><a href="/blogs/news" title="">Blog</a></li>
                  
                  <li><a href="/pages/care-plan-landing" title="">Care Plan</a></li>
                  
                </ul>
              </div>
        	
        
        	
              <div class="footer-nav-block fifth column   hide_on_desktop ">
                <h5 style="height: 18px;">Covid-19 Update</h5>
                
                
                <ul class="plain list-divide" role="navigation" aria-label="translation missing: en.layout.footer.menu_5_aria_label">
                  
                  <li><a href="/pages/covid-19-update" title="">COVID-19 Update</a></li>
                  
                </ul>
              </div>
        	
        
        	
        
        	
        
        	
        
        	
        
        	
        
        	
        
        	
        
        	
        
        	
        
        	
              <div class="footer-nav-block fifth column   hide_on_desktop ">
                <h5 style="height: 18px;">Repair &amp; Servicing</h5>
                
                
                <ul class="plain list-divide" role="navigation" aria-label="translation missing: en.layout.footer.menu_15_aria_label">
                  
                  <li><a href="/pages/repairs-and-servicing" title="">Repair &amp; Servicing</a></li>
                  
                </ul>
              </div>
        	
        
        
      </div>
    </div>
    
    <div class="notification-footer">
      <ul>
        
          
      	
          
      	
          
      	
          
      	
          
      	
          
            <li>
              
                  <i class="icon"><img src="//cdn.shopify.com/s/files/1/0057/6657/8279/files/shipping-icon-white.png?v=1614316368" alt=""></i>
              
              
                  <span>Free Shipping over $100</span>
              
            </li>
          
      	
          
            <li>
              
                  <i class="icon"><img src="//cdn.shopify.com/s/files/1/0057/6657/8279/files/exchange-white.png?v=1614316368" alt=""></i>
              
              
                  <span>90-Day Exchanges</span>
              
            </li>
          
      	
          
            <li>
              
                  <i class="icon"><img src="//cdn.shopify.com/s/files/1/0057/6657/8279/files/secure-white.png?v=1614316368" alt=""></i>
              
              
                  <span>Secure Payment Methods</span>
              
            </li>
          
      	
          
            <li>
              
                  <i class="icon"><img src="//cdn.shopify.com/s/files/1/0057/6657/8279/files/secure-payment-white.png?v=1614316368" alt=""></i>
              
              
                  <span>Secure &amp; Safe Delivery</span>
              
            </li>
          
      	
          
            <li>
              
                  <i class="icon"><img src="//cdn.shopify.com/s/files/1/0057/6657/8279/files/headphone-white.png?v=1614316368" alt=""></i>
              
              
                  <span><u>Melbourne Customer Service</u></span>
              
            </li>
          
      	
          
            <li>
              
                  <i class="icon"><img src="//cdn.shopify.com/s/files/1/0057/6657/8279/files/icon-clock-white.png?v=1614316368" alt=""></i>
              
              
                  <span>Monday-Friday : 9:00 AM-4:00 PM</span>
              
            </li>
          
      	
          
      	
          
      	
          
      	
          
      	
      </ul>
    </div>  
     <div class="row section padless-top signup-row">
      <div class="extra-column column">
        
          
            <div class="rte lightly-spaced-row"><p><strong>JOIN OUR ETERNITY CLUB</strong></p><p>Subscribe to our newsletter to be the first to hear about our new stock landing, promotion, exclusive offers and more. We promise to only send you the good things.</p></div>
          
          <div id="mailing-list">
    <form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8" class="contact-form"><input type="hidden" name="form_type" value="customer"><input type="hidden" name="utf8" value="✓">
      
        <input type="hidden" id="contact_tags" name="contact[tags]" value="prospect,newsletter">
    	<div class="input-row inline-input-button">
          <input type="email" placeholder="Enter Email Address" class="required" value="" id="mailinglist_email" name="contact[email]" required="">
          <input type="submit" value="Subscribe">
        </div>
        
      
    </form>
</div>
        
      </div>
    </div>
    
    
    <script src="https://widget.reviews.io/rich-snippet-reviews-widgets/dist.js" type="text/javascript"></script>
    <div id="text-banner-widget"><iframe name="text-banner-widget_frame" id="text-banner-widget_frame" frameborder="0" width="1720px" scrolling="no" height="61" title="Reviews Widget" src="https://widget.reviews.io/rich-snippet-reviews-widgets/widget?version=13b&amp;store=bevilles.com.au&amp;starsClr=%23ffe234&amp;textClr=%23ffffff&amp;logoClr=white&amp;min_rating=3&amp;widgetName=text-banner&amp;css=.TextBanner%20.TextBanner__text--outof%7Bdisplay%3Anone%3B%7D&amp;elementId=text-banner-widget&amp;origin=https%3A%2F%2Fwww.bevilles.com.au%2Fsearch%3Fq%3Dring%26rows%3D36%26start%3D1044"></iframe></div>

    <script>
            richSnippetReviewsWidgets("text-banner-widget", {
                store: "bevilles.com.au",
                starsClr: "#ffe234",
                textClr: "#ffffff",
                logoClr: "white",
              	min_rating: 3,
                widgetName: "text-banner",
              css:".TextBanner .TextBanner__text--outof{display:none;}"
            });
    </script>
    
    </div>
    
    <div class="footer-lower inline-row spaced">
      <div class="container">
      	<div class="inline-item left">
        <div class="copy">Copyright © 2023 <a href="/" title="">Bevilles Jewellers</a>.</div>
      </div>
      	<div class="inline-item right last payment-methods" id="footerpayment_methods">
        
          <svg class="payment-icon" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-american_express"><title id="pi-american_express">American Express</title><g fill="none"><path fill="#000" d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z" opacity=".07"></path><path fill="#006FCF" d="M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1"></path><path fill="#FFF" d="M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z"></path></g></svg>

        
          <svg class="payment-icon" version="1.1" xmlns="http://www.w3.org/2000/svg" role="img" x="0" y="0" width="38" height="24" viewBox="0 0 165.521 105.965" xml:space="preserve" aria-labelledby="pi-apple_pay"><title id="pi-apple_pay">Apple Pay</title><path fill="#000" d="M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z"></path><path fill="#FFF" d="M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875"></path><g><g><path fill="#000" d="M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858"></path><path fill="#000" d="M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048"></path></g><g><path fill="#000" d="M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z"></path><path fill="#000" d="M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z"></path><path fill="#000" d="M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z"></path></g></g></svg>

        
          <svg class="payment-icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="pi-generic" width="38" height="24" role="img"><title id="pi-generic">Generic</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#999" d="M0 5h38v4H0V5z"></path><path opacity=".15" d="M5 17h10v2H5v-2zm24 0h4v2h-4v-2z"></path></svg>
        
          <svg class="payment-icon" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-google_pay"><title id="pi-google_pay">Google Pay</title><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000" opacity=".07"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#FFF"></path><path d="M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z" fill="#5F6368"></path><path d="M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z" fill="#4285F4"></path><path d="M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z" fill="#34A853"></path><path d="M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z" fill="#FBBC04"></path><path d="M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z" fill="#EA4335"></path></svg>

        
          <svg class="payment-icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
        
          <svg class="payment-icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-paypal"><title id="pi-paypal">PayPal</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"></path><path fill="#3086C8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"></path><path fill="#012169" d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"></path></svg>
        
          <svg class="payment-icon" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="38" height="24" aria-labelledby="pi-shopify_pay"><title id="pi-shopify_pay">Shop Pay</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#000"></path><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z" fill="#5A31F4"></path><path d="M21.382 9.713c0 1.668-1.177 2.858-2.821 2.858h-1.549a.133.133 0 00-.12.08.127.127 0 00-.01.049v2.192a.129.129 0 01-.13.129h-1.084a.13.13 0 01-.13-.13V6.986a.127.127 0 01.08-.12.129.129 0 01.05-.01h2.9c1.637 0 2.814 1.19 2.814 2.858v-.001zm-1.352 0c0-.958-.658-1.658-1.55-1.658h-1.468a.13.13 0 00-.13.13v3.05a.127.127 0 00.038.092.129.129 0 00.092.038h1.468c.892.005 1.55-.695 1.55-1.652zm1.674 3.791a1.527 1.527 0 01.647-1.317c.423-.316 1.084-.48 2.055-.514l1.033-.036v-.303c0-.607-.41-.863-1.068-.863-.658 0-1.075.231-1.17.61a.127.127 0 01-.125.09h-1.022a.13.13 0 01-.126-.092.125.125 0 01-.004-.055c.152-.898.904-1.58 2.494-1.58 1.692 0 2.303.783 2.303 2.276v3.172a.13.13 0 01-.132.129h-1.03a.13.13 0 01-.13-.13v-.236a.096.096 0 00-.061-.091.1.1 0 00-.107.022c-.31.334-.808.575-1.607.575-1.175 0-1.95-.607-1.95-1.657zm3.735-.687v-.246l-1.339.07c-.705.036-1.115.326-1.115.816 0 .444.376.69 1.034.69.893 0 1.42-.48 1.42-1.33zm2.316 4.6v-.919a.13.13 0 01.049-.1.132.132 0 01.108-.027c.158.029.318.044.479.044a1.229 1.229 0 001.245-.876l.067-.211a.133.133 0 000-.088l-2.145-5.471a.13.13 0 01.06-.165.13.13 0 01.062-.015h1.04a.132.132 0 01.123.085l1.456 3.859a.131.131 0 00.125.088.133.133 0 00.125-.088l1.265-3.848a.13.13 0 01.126-.09h1.076a.134.134 0 01.132.116.134.134 0 01-.008.063l-2.295 6.076c-.528 1.413-1.433 1.773-2.43 1.773a1.959 1.959 0 01-.561-.066.132.132 0 01-.1-.14h.001zM8.57 6.4a5.363 5.363 0 00-3.683 1.427.231.231 0 00-.029.31l.618.839a.236.236 0 00.362.028 3.823 3.823 0 012.738-1.11c2.12 0 3.227 1.584 3.227 3.15 0 1.7-1.163 2.898-2.835 2.921-1.292 0-2.266-.85-2.266-1.974a1.908 1.908 0 01.713-1.48.231.231 0 00.033-.324l-.65-.815a.236.236 0 00-.339-.034 3.43 3.43 0 00-.942 1.183 3.39 3.39 0 00-.337 1.47c0 1.935 1.655 3.452 3.775 3.464h.03c2.517-.032 4.337-1.884 4.337-4.415 0-2.247-1.667-4.64-4.752-4.64z" fill="#fff"></path></svg>
        
          <svg class="payment-icon" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>
          
        
        
        <span class="payment-icon img"><img src="https://static.afterpay.com/integration/product-page/logo-afterpay-colour.png" alt="Afterpay"></span>  
        
        
        <span class="payment-icon img"><img src="//cdn.shopify.com/s/files/1/0057/6657/8279/files/Zip_logo_rgb_light_150x.png?v=1629767624" alt="Zip Pay"></span>  
        
        
        <span class="payment-icon img"><img src="//cdn.shopify.com/s/files/1/0057/6657/8279/t/436/assets/humm-pay2.png?v=162554783110858293631669095088" alt="Humm Pay"></span>  
        
      </div>
      </div>
    </div>  
</footer>
    </div>
`;

const routes = {
    '/search': routeTemplate,
    '/sectionals': routeTemplate,
    '/beds': routeTemplate,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const setCategory = function (e) {
    const el = e.target;
    const {
        dataset
    } = el;
    if (dataset && dataset.id) {
        window.history.pushState(null, null, dataset.path);
        // rootDiv.innerHTML = routes[el.pathname];
        window.UnbxdAnalyticsConf = {
            page: dataset.id
        };
        window.unbxdSearch.getCategoryPage();
    }

};

const navElem = document.getElementById("categoryLinks");
navElem.addEventListener("click", setCategory);


const checkRangeTemplate = function (range, selectedRange, facet) {
    const {
        displayName,
        facetName,
        values,
        gap
    } = range;
    let valueUI = ``;
    const {
        facetClass,
        selectedFacetClass,
        applyMultipleFilters,
        applyButtonText,
        clearButtonText,
    } = facet;
    const selected = selectedRange.length > 0 ? true : false;
    values.forEach(item => {
        const {
            from,
            end
        } = item;
        const isSelected = this.isSelectedRange(facetName, item);
        const btnCss = (isSelected) ? `UNX-selected-facet-btn ${facetClass} ${selectedFacetClass}` : `${facetClass}`;
        valueUI += [`<button class="${btnCss} UNX-range-facet UNX-change-facet" data-action="setRange" data-facet-name="${facetName}" data-start="${from.dataId}" data-end="${end.dataId}" >`,
        `<span class="UNX-facet-text">${from.name}  -  ${end.name}</span>`,
        `<span class="UNX-facet-count">(${from.count})</span>`,
            `</button>`
        ].join('');
    });
    let clearBtn = ``;
    let applyBtn = ``;
    if (selected) {
        if (applyMultipleFilters) {
            applyBtn = `<button class="UNX-default-btn ${facetClass} UNX-facet-primary" data-action="applyRange"> ${applyButtonText}</button>`;
        }
        clearBtn = `<button class="UNX-default-btn UNX-facet-clear  ${facetClass}" data-action="clearRangeFacets">${clearButtonText}</button>`;
    }
    return [`<div class="UNX-range-wrapper">`,
        valueUI,
        `<div class="UNX-price-action-row">`,
        applyBtn, clearBtn,
        `<div>`,
        `</div>`
    ].join('')
}

const unbxdCallbackEcma = function (instance, type, data) {
    console.log(type, data, 'type,data');
    if(type === "AFTER_RENDER") {
        if(localStorage.getItem('unx_product_clicked') && document.getElementById(localStorage.getItem('unx_product_clicked'))){
            document.getElementById(localStorage.getItem('unx_product_clicked')).scrollIntoView()
            localStorage.removeItem('unx_product_clicked');
        } else {
            document.getElementById('searchResultsWrapper').scrollIntoView()
        }
    }
}

let showFacet = false;
window.resizeTimer = null;

const facetBlock = document.querySelector(".UNX-fxd-facet");

const checkMobile = () => {
    const w = window.innerWidth;
    if (w < 980) {
        return true;
    }
    return false;
};

const toggleMobileFacets = (e) => {
    showFacet = !showFacet;
    const {
        action
    } = e.target.dataset;
    if (action === "applyFacets") {
        window.unbxdSearch.setPageStart(0);
        window.unbxdSearch.getResults();
    }
    if (action === "clearFacets") {
        window.unbxdSearch.clearAllFacets();
        window.unbxdSearch.setPageStart(0);
        window.unbxdSearch.getResults();
    }
    if (showFacet) {
        facetBlock.classList.add("UNX-show-facets")
    } else {
        facetBlock.classList.remove("UNX-show-facets")
    }
}

const btnEls = document.querySelectorAll(".UNX-facet-trigger");
btnEls.forEach(item => {
    item.addEventListener("click", toggleMobileFacets)
});

let performRouteActions = () => {
    if (location.pathname === "/sectionals") {
        window.UnbxdAnalyticsConf = {
            page: "itemGroupIds:185"
        };
        unbxdSearch.options.productType = "CATEGORY";
    } else if (location.pathname === "/beds") {
        window.UnbxdAnalyticsConf = {
            page: "itemGroupIds:1800"
        };
        unbxdSearch.options.productType = "CATEGORY";
    } else {
        window.UnbxdAnalyticsConf = {};
        unbxdSearch.options.productType = "SEARCH";
    }
}

window.addEventListener('popstate', () => {
    performRouteActions();
});

let searchButtonEl = document.getElementById("searchBtn");
let searchBoxEl = document.getElementById("unbxdInput");

searchButtonEl.addEventListener("click", () => {
    if (unbxdSearch.options.productType !== 'SEARCH') {
        window.UnbxdAnalyticsConf = {};
        unbxdSearch.options.productType = 'SEARCH';
        window.history.pushState({
                replace: true
            },"","/search?abc=true")
    }
});

searchBoxEl.addEventListener("keydown", (e) => {
    const val = e.target.value;
    if (e.key === "Enter") { 
        if(val !== ""){
            if (unbxdSearch.options.productType !== 'SEARCH') {
                window.UnbxdAnalyticsConf = {};
                unbxdSearch.options.productType = 'SEARCH';
                window.history.pushState({
                        replace: true
                    },"","/search?abc=true")
            }
        }
    }
});

let productType = "";

if (location.pathname === "/sectionals") {
    window.UnbxdAnalyticsConf = {
        page: "itemGroupIds:185"
    };
    productType = "CATEGORY";
} else if (location.pathname === "/beds") {
    window.UnbxdAnalyticsConf = {
        page: "itemGroupIds:1800"
    };
    productType = "CATEGORY";
} else {
    window.UnbxdAnalyticsConf = {};
    productType = "SEARCH";
}

window.unbxdSearch = new UnbxdSearch({
    // siteKey: "ss-unbxd-priyal-dev-2022812041656321154",
    // apiKey: "74346ae3ffdcc7cd664f6ce8a18e4c7d",
  // searchEndPoint: "https://wingman-argocd.unbxd.io/",
    siteKey: "ss-unbxd-prod-bevilles-com-au13551623906010",
    apiKey: "d59fddd93d4e871798731a7d2374ca13",
    updateUrls: true,
    hashMode: false,
    searchBoxEl: document.getElementById("unbxdInput"),
    searchTrigger: "click",
    searchButtonEl: document.getElementById("searchBtn"),
    products: {
        productType: productType,
    },
    unbxdAnalytics: true,
    pagination: {
        type: 'INFINITE_SCROLL',
        infiniteScrollTriggerEl: document.getElementById('searchResultsWrapper'),
        // el: document.querySelector("#clickScrollContainer"),
        onPaginate: function (data) { console.log(data, "data") }
    },
    allowExternalUrlParams: true
});

window.unbxdSearch.updateConfig({
    products: {
        el: document.getElementById("searchResultsWrapper"),
        productType: productType,
        onProductClick: function (product, e) {
            localStorage.setItem('unx_product_clicked', product.uniqueId);
            window.location.href ='https://www.google.com';
        }
    },
    spellCheck: {
        enabled: true,
        el: document.getElementById("didYouMeanWrapper")
    },
    noResults: {
        el: document.getElementById("noResultWrapper")
    },
    selectedFacets: {
        el: document.getElementById("selectedFacetWrapper")
    },
    facet: {
        facetsEl: document.getElementById("facetsWrapper"),
        applyMultipleFilters: false,
        defaultOpen: "FIRST",
        onFacetLoad: function (facets) {
            const self = this;
            const {
                facet
            } = this.options;
            const {
                rangeWidgetConfig
            } = facet;
            facets.forEach(facetItem => {
                const {
                    facetType,
                    facetName,
                    gap
                } = facetItem;
                const {
                    prefix
                } = rangeWidgetConfig;

                if (facetType === "range") {
                    const rangeId = `${facetName}_slider`;
                    const sliderElem = document.getElementById(rangeId);
                    let {
                        end,
                        gap,
                        max,
                        min,
                        start
                    } = facetItem;
                    const selectedValues = sliderElem.dataset;
                    if (selectedValues) {
                        start = Number(selectedValues.x),
                            end = Number(selectedValues.y)
                    }
                    this[rangeId] = noUiSlider.create(sliderElem, {
                        start: [start, end],
                        tooltips: [{
                            to: function (value) {
                                return `${prefix} ${Math.round(value)}`;
                            }
                        },
                        {
                            to: function (value) {
                                return `${prefix} ${Math.round(value)}`;
                            }
                        }
                        ],
                        connect: true,
                        range: {
                            'min': 0,
                            'max': max
                        },
                        format: {
                            to: function (value) {
                                return Math.round(value);
                            },
                            from: function (value) {
                                return Math.round(value);
                            }
                        },
                        padding: 0,
                        margin: 0,
                    });
                    this[rangeId].on("set", function (data) {
                        const newData = {
                            start: data[0],
                            end: data[1],
                            facetName,
                            gap
                        };
                        self.setRangeSlider(newData);
                    });

                }

            });
        },
        isCollapsible: true,
        isSearchable: true,
        enableViewMore: false,
        rangeTemplate: function (range, selectedRange, facet) {
            const {
                facetName,
                start,
                end
            } = range;
            let min = start;
            let max = end;
            if (selectedRange.length > 0) {
                const sel = selectedRange[0].replace(/[^\w\s]/gi, '').split(" TO ");
                min = sel[0];
                max = sel[1];
            }
            const rangId = `${facetName}_slider`;
            return [`<div id="${facetName}"  data-id="${facetName}" class=" UNX-range-slider-wrap">`,
                `<div class="UNX-value-container UNX-range-value-block" ></div>`,
            `<div id="${rangId}" data-x="${min}" data-y="${max}" class="UNX-range-slider-wrapper"></div>`,
                `</div>`,
                `<div>`,
                `</div>`
            ].join('')
        }
    },
    pagination: {
        type: 'INFINITE_SCROLL',
        heightDiffToTriggerNextPage: 100,
        infiniteScrollTriggerEl: document.getElementById('searchResultsWrapper'),
        onPaginate: function(data) {console.log(data,"data")}
    },
    breadcrumb: {
        el: document.getElementById("breadcrumpContainer")
    },
    pagesize: {
        el: document.getElementById("changeNoOfProducts")
    },

    sort: {
        el: document.getElementById("sortWrapper"),
        options: [{
            value: "price desc",
            text: "Price High to Low"
        },
        {
            value: "price asc",
            text: " Price Low to High"
        }
        ]
    },
    loader: {
        el: document.getElementById("loaderEl")
    },
    productView: {
        el: document.getElementById("productViewTypeContainer"),
        defaultViewType: "GRID"
    },
    banner: {
        el: document.getElementById("bannerContainer"),
        count: 1
    },
    swatches: {
        enabled: true,
        attributesMap: {
            swatchList: "color",
            swatchImgs: "unbxd_color_mapping",
            swatchColors: "color"
        }
    },
    onAction: function (e, ctx) { },
    onEvent: unbxdCallbackEcma
});






