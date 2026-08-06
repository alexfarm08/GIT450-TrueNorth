//***************************************
//variables for button and modal
//***************************************

const openButton = document.querySelector("#open-ar-modal");
const closeButton = document.querySelector("#close-ar-modal");
const modal = document.querySelector("#ar-modal");

//***************************************
//Functions to open modal and close modal
//***************************************

function openModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  closeButton.focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  openButton.focus();
}

/* ===========================
   PRODUCT DETAILS TABS
=========================== */

const detailTabs = document.querySelectorAll(".details-tab");
const detailsContent = document.querySelector("#details-content");


/* ===========================
   TAB CONTENT
=========================== */

const tabContent = {
  description: `
  <div class="details-description-layout">

      <!-- Left column -->
      <section class="details-about">
          <h2>About</h2>

          <h3>Mount Washington Wilderness, Oregon</h3>

          <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed aliquam accumsan eros, nec pulvinar neque sagittis tempor.
              Vestibulum varius dictum condimentum. Sed convallis auctor
              urna, ut semper ligula consectetur quis. Duis auctor eget odio
              ac malesuada. Nullam mattis risus sit amet leo lacinia, nec
              fermentum libero commodo. Quisque vel consequat erat. Donec
              eu posuere justo. In facilisis, felis id ultricies euismod,
              neque sem eleifend neque, et feugiat neque justo vitae risus.
              Sed aliquet mi a blandit fringilla. Nunc vitae mi eu elit
              consequat condimentum. Nulla facilisi. Nullam in sagittis
              risus, vitae dictum neque. Quisque vulputate ultricies est
              sed tempor. Fusce sit amet scelerisque mi. Morbi eleifend
              ornare arcu. Vestibulum cursus dapibus arcu, ac facilisis
              metus maximus vulputate.
          </p>

          <p>
              Curabitur auctor enim vitae pellentesque fermentum. Sed
              ultricies tellus a justo vulputate, nec vestibulum ante
              lobortis. Curabitur maximus elementum ante, nec mollis metus
              placerat quis. Phasellus porttitor dui odio, mattis ultrices
              ligula tincidunt vitae. Mauris ornare, leo non pulvinar
              rutrum, quam mi posuere sapien, vitae egestas ipsum risus nec
              justo. Nulla non sapien mauris. Maecenas sit amet ipsum eget
              erat luctus hendrerit. Aenean turpis ex, vulputate vel
              fringilla at, ullamcorper non quam. In pretium augue vel
              metus porta dictum. Aliquam erat volutpat. Curabitur sed
              lectus consectetur, feugiat est a, hendrerit erat. Proin
              condimentum lorem id eros tempor consectetur. Cras id quam
              tempus, porta nisi a, efficitur orci. Sed placerat diam ac
              purus ornare eleifend. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae;
              Phasellus orci quam, cursus vitae viverra et, pellentesque
              eu dui.
          </p>
      </section>


      <!-- Right column -->
      <div class="details-description-secondary">

          <section class="details-content-block">
              <h2>Crafted To Order</h2>

              <p>
                  Every piece in the True North collection is produced to
                  order. Nothing is pre-made and nothing is pulled from
                  inventory. When you select an image, choose your size,
                  and configure your frame and liner, we start crafting
                  your print by hand. The result is a piece made
                  specifically for you, your walls, and your space, the
                  way it should be.
              </p>

              <p>
                  Select your size, frame, and liner from the available
                  options. If you would like guidance on what works best
                  for a specific room or wall,
                  <a href="#">contact an art specialist</a>
                  and to help you find the right fit.
              </p>
          </section>


          <section class="details-content-block">
              <h2>About Editions</h2>

              <p>
                  Every photograph in the True North collection is
                  produced in a strict edition of 50 prints, total, across
                  all available sizes. A smaller format and a large-scale
                  statement piece of the same image draw from the same
                  pool of 50. The edition does not reset by size. When an
                  edition reaches 50, it closes permanently. That image
                  will not be printed again, at any size, for any reason.
              </p>
          </section>


          <section class="details-content-block">
              <h2>Anti-AI</h2>

              <p>
                  Every image in the True North collection is a
                  <em>real</em> photograph. It was taken in the field, at a
                  real place, by Becca Lakin. No artificial intelligence
                  was used to generate, composite, or manipulate any
                  element of our images.
              </p>
          </section>

      </div>

  </div>
`,

  dimensions: `
    <div class="details-dimensions-layout">

        <section class="dimension-group">
            <h2>Studio</h2>

            <p>Float Mount: 12in × 9in (30.48cm × 22.86cm)</p>
            <p>Charcoal Black: 19in × 16in (48.26cm × 40.64cm)</p>
            <p>Charcoal Black + Liner: 23in × 20in (58.42cm × 50.8cm)</p>
            <p>Soft Gray no Liner: 19in × 16in (48.26cm × 40.64cm)</p>
            <p>Soft Gray + Liner: 23in × 20in (58.42cm × 50.8cm)</p>
            <p>Tobacco Leaf no Liner: 20in × 17in (50.8cm × 43.18cm)</p>
            <p>Tobacco Leaf + Liner: 24in × 21in (60.96cm × 53.34cm)</p>
            <p>Cigar Leaf no Liner: 20in × 17in (50.8cm × 43.18cm)</p>
            <p>Cigar Leaf + Liner: 24in × 21in (60.96cm × 53.34cm)</p>
            <p>Dark Ash no Liner: 20in × 17in (50.8cm × 43.18cm)</p>
            <p>Dark Ash + Liner: 24in × 21in (60.96cm × 53.34cm)</p>
        </section>


        <section class="dimension-group">
            <h2>Statement</h2>

            <p>Float Mount: 36in × 27in (91.44cm × 68.58cm)</p>
            <p>Charcoal Black no Liner: 43in × 34in (109.22cm × 86.36cm)</p>
            <p>Charcoal Black + Liner: 47in × 38in (119.38cm × 96.52cm)</p>
            <p>Soft Gray no Liner: 43in × 34in (109.22cm × 86.36cm)</p>
            <p>Soft Gray + Liner: 47in × 38in (119.38cm × 96.52cm)</p>
            <p>Tobacco Leaf no Liner: 44in × 35in (111.76cm × 88.9cm)</p>
            <p>Tobacco Leaf + Liner: 48in × 39in (121.92cm × 99.06cm)</p>
            <p>Cigar Leaf no Liner: 44in × 35in (111.76cm × 88.9cm)</p>
            <p>Cigar Leaf + Liner: 48in × 39in (121.92cm × 99.06cm)</p>
            <p>Dark Ash no Liner: 44in × 35in (111.76cm × 88.9cm)</p>
            <p>Dark Ash + Liner: 48in × 39in (121.92cm × 99.06cm)</p>
        </section>


        <section class="dimension-group">
            <h2>Gallery</h2>

            <p>Float Mount: 24in × 18in (60.96cm × 45.72cm)</p>
            <p>Charcoal Black: 31in × 25in (78.74cm × 63.5cm)</p>
            <p>Charcoal Black + Liner: 35in × 29in (88.9cm × 73.66cm)</p>
            <p>Soft Gray no Liner: 31in × 25in (78.74cm × 63.5cm)</p>
            <p>Soft Gray + Liner: 35in × 29in (88.9cm × 73.66cm)</p>
            <p>Tobacco Leaf no Liner: 32in × 26in (81.28cm × 66.04cm)</p>
            <p>Tobacco Leaf + Liner: 36in × 30in (91.44cm × 76.2cm)</p>
            <p>Cigar Leaf no Liner: 32in × 26in (81.28cm × 66.04cm)</p>
            <p>Cigar Leaf + Liner: 36in × 30in (91.44cm × 76.2cm)</p>
            <p>Dark Ash no Liner: 32in × 26in (81.28cm × 66.04cm)</p>
            <p>Dark Ash + Liner: 36in × 30in (91.44cm × 76.2cm)</p>
        </section>


        <section class="dimension-group">
            <h2>Collector</h2>

            <p>Float Mount: 48in × 36in (121.92cm × 91.44cm)</p>
            <p>Charcoal Black no Liner: 55in × 43in (139.7cm × 109.22cm)</p>
            <p>Charcoal Black + Liner: 59in × 47in (149.86cm × 119.38cm)</p>
            <p>Soft Gray no Liner: 55in × 43in (139.7cm × 109.22cm)</p>
            <p>Soft Gray + Liner: 59in × 47in (149.86cm × 119.38cm)</p>
            <p>Tobacco Leaf no Liner: 56in × 44in (142.24cm × 111.76cm)</p>
            <p>Tobacco Leaf + Liner: 60in × 48in (152.4cm × 121.92cm)</p>
            <p>Cigar Leaf no Liner: 56in × 44in (142.24cm × 111.76cm)</p>
            <p>Cigar Leaf + Liner: 60in × 48in (152.4cm × 121.92cm)</p>
            <p>Dark Ash no Liner: 56in × 44in (142.24cm × 111.76cm)</p>
            <p>Dark Ash + Liner: 60in × 48in (152.4cm × 121.92cm)</p>
        </section>

    </div>
`,

  faqs: `
<div class="details-faq-layout">

    <!-- Left column -->
    <div class="details-faq-column">

        <section class="faq-group">
            <h2>Shipping</h2>

            <p>
                For orders within the continental United States, delivery
                typically takes 4–6 weeks from the time of purchase.
                Orders shipped outside the continental United States,
                including Hawaii and international destinations, may
                require at least 6–8 weeks for delivery. For more detailed
                shipping information, please visit the FAQ section.
            </p>
        </section>


        <section class="faq-group">
            <h2>Insurance</h2>

            <p>
                True North ensures full coverage for all shipments. We
                will replace or repair any damage that occurs during
                transit from our production facility to the destination
                address listed on your order.
            </p>

            <p>
                We cannot insure shipments once they have been transported
                from the original delivery destination.
            </p>
        </section>


        <section class="faq-group">
            <h2>Craftsmanship</h2>

            <h3>Where are your products produced?</h3>

            <p>
                Our candles and perfumes are manufactured by hand at our
                home office in Goodyear, Arizona with globally-sourced
                materials. The materials for our frames are hand-made from
                solid wood in Milan, Italy.
            </p>

            <p>
                Our prints and any custom pieces may come from a number of
                locations, including our production partners in Santa Ana,
                California; San Cruz, California; Toronto, Ontario;
                Edison, New Jersey; Atlanta, Georgia; or Irwindale,
                California.
            </p>

            <h3>Is the art signed?</h3>

            <p>
                Yes. Each Limited Edition artwork features a digitally
                embedded signature and edition number on the face of the
                artwork.
            </p>
        </section>

    </div>


    <!-- Right column -->
    <div class="details-faq-column">

        <section class="faq-group">
            <h2>Care &amp; Handling</h2>

            <h3>How do I care for the surface of my artwork?</h3>

            <p>
                Extreme caution should be used whenever it is necessary to
                clean the surface of your True North Fine Art photography.
                Dust the glaze with a soft, damp cloth or chamois. Apply
                only light pressure, rinse with clean water, and dry by
                blotting the cloth.
            </p>

            <p>
                We recommend using compressed or canned air to remove any
                surface dust that accumulates on the liner over time,
                making sure that no moisture is expelled from the can
                during the cleaning process.
            </p>

            <h3>How do I clean the frame?</h3>

            <p>
                Our wood frames have a protective wax finish that, when
                handled properly, should not require care other than
                periodic dusting. A soft, dry cloth may be used to remove
                spots or debris.
            </p>

            <p>
                Avoid the use of liquid and chemical cleaning products, as
                these may cause the protective finish to deteriorate over
                time.
            </p>

            <h3>What are the best ways to protect my artwork from damage?</h3>

            <p>
    To preserve your artwork's quality, avoid direct sunlight,
    use LED lighting with low heat and UV output, and always
    handle with clean hands or cotton gloves to prevent oils
    from transferring onto the surface.
</p>

<p>
    If your artwork requires professional cleaning or restoration,
    please contact a True North art specialist before attempting
    any repairs. Improper cleaning methods or harsh chemicals may
    permanently damage the print, glazing, frame, or protective
    finish.
</p>
        </section>

    </div>

</div>
`
};


/* ===========================
   DISPLAY SELECTED TAB FUNCTION
=========================== */

function displayTabContent(tabName, selectedTab) {
  detailsContent.innerHTML = tabContent[tabName];

  detailTabs.forEach(function (tab) {
    const isSelected = tab === selectedTab;

    tab.classList.toggle("active", isSelected);
    tab.setAttribute("aria-selected", isSelected);
  });

  detailsContent.setAttribute(
    "aria-labelledby",
    selectedTab.id
  );
}





/* Load Description when the page opens */

const defaultTab = document.querySelector("#description-tab");

displayTabContent("description", defaultTab);

//***************************************
//Event listeners
//***************************************

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});


//  TAB CLICK EVENTS
detailTabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    const selectedTabName = tab.dataset.tab;

    displayTabContent(selectedTabName, tab);
  });
});