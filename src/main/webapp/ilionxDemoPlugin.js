console.log("Getting inside the ilionxDemoPlugin Scope");


require([
    "dojo/_base/declare", 
    "dojo/_base/lang",
    "dojo/dom-style",
    "dojo/dom-class",
    "dojo/dom-construct",
    "dojo/query",
    "dojo/ready",
    "dojo/domReady!"
], function(declare, lang, domStyle, domClass, domConstruct, query, ready) {
    
    // Ilionx Home Pane Manager
    var IlionxHomePane = {
        
        init: function() {
            console.log("Initializing Ilionx Home Pane");
            this.updateHomePane();
        },
        
        updateHomePane: function() {
            // Wait for ECM home pane to be available
            var homePane = query(".ecmHomePane")[0] || query(".dijitContentPane")[0];
            if (homePane) {
                this.populateWithIlionxContent(homePane);
            } else {
                // Retry after a delay if home pane not found
                setTimeout(function() {
                    IlionxHomePane.updateHomePane();
                }, 1000);
            }
        },
        
        populateWithIlionxContent: function(homePane) {
            // Clear existing content
            homePane.innerHTML = "";
            
            // Add Ilionx-styled content
            domConstruct.place(this.createIlionxHomeContent(), homePane);
            domClass.add(homePane, "ilionx-home-pane");
            
            console.log("Ilionx home pane content updated");
        },
        
        createIlionxHomeContent: function() {
            var contentDiv = domConstruct.create("div", {
                className: "ilionx-home-content",
                innerHTML: this.getIlionxHomeHTML()
            });
            return contentDiv;
        },
        
        getIlionxHomeHTML: function() {
            return `
                <div class="ilionx-welcome-page">
                    <div class="ilionx-hero-section">
                        <div class="ilionx-logo-large">ilionx</div>
                        <h1>experts in eenvoud</h1>
                        <p class="ilionx-tagline">eenvoud brengen in een complexe wereld</p>
                    </div>
                    
                    <div class="ilionx-description">
                        <p>Welkom bij de Ilionx demo in IBM Content Navigator. Ontdek hoe wij organisaties helpen met toekomstbestendige IT-oplossingen.</p>
                    </div>
                    
                    <div class="ilionx-cta-section">
                        <button class="ilionx-visit-btn" onclick="window.open('https://www.ilionx.com/', '_blank')">
                            Bezoek ilionx.com
                        </button>
                        <p class="ilionx-cta-text">Klik hier om de officiële Ilionx website te openen</p>
                    </div>
                    
                    <div class="ilionx-features">
                        <div class="feature-grid">
                            <div class="feature-item">
                                <h3>Digitale Strategie</h3>
                                <p>Toekomstbestendige oplossingen</p>
                            </div>
                            <div class="feature-item">
                                <h3>Cloud Applicaties</h3>
                                <p>Schaalbare cloud-oplossingen</p>
                            </div>
                            <div class="feature-item">
                                <h3>Data & AI</h3>
                                <p>Inzicht uit uw data</p>
                            </div>
                            <div class="feature-item">
                                <h3>Hyperautomation</h3>
                                <p>Slimme procesoptimalisatie</p>
                            </div>
                            <div class="feature-item">
                                <h3>Managed Services</h3>
                                <p>Veilig IT-beheer</p>
                            </div>
                            <div class="feature-item">
                                <h3>Security</h3>
                                <p>Betrouwbare beveiliging</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="ilionx-contact-info">
                        <h2>Contact</h2>
                        <div class="contact-details">
                            <p><strong>Hoofdkantoor Utrecht</strong></p>
                            <p>Van Deventerlaan 12, 3528 AG Utrecht</p>
                            <p>T: (088) 05 90 500</p>
                            <p>E: info@ilionx.com</p>
                        </div>
                    </div>
                </div>
            `;
        }
    };
    
    // Ilionx Footer Manager
    var IlionxFooter = {
        
        init: function() {
            console.log("Initializing Ilionx Footer");
            this.createFooter();
            this.adjustDesktopLayout();
        },
        
        createFooter: function() {
            // Check if footer already exists
            if (query(".ilionx-footer").length > 0) {
                console.log("Ilionx footer already exists");
                return;
            }
            
            // Create the footer container
            var footer = domConstruct.create("div", {
                className: "ilionx-footer",
                innerHTML: this.getFooterHTML()
            });
            
            // Add footer to the bottom of the body
            domConstruct.place(footer, document.body, "last");
            
            console.log("Ilionx footer created successfully");
        },
        
        getFooterHTML: function() {
            return `
                <div class="ilionx-footer-brand">
                    <div class="ilionx-footer-logo">ilionx</div>
                    <div class="ilionx-footer-tagline">experts in eenvoud</div>
                </div>
                <div class="ilionx-footer-info">
                    <span>IBM Content Navigator Plugin</span>
                    <span class="ilionx-footer-version">v1.0</span>
                </div>
            `;
        },
        
        adjustDesktopLayout: function() {
            // Add class to body to adjust for fixed footer
            domClass.add(document.body, "ilionx-footer-themed");
            
            // Adjust any existing ICN elements
            var desktop = query(".ecmDesktop")[0];
            if (desktop) {
                domStyle.set(desktop, "paddingBottom", "50px");
            }
            
            console.log("Desktop layout adjusted for Ilionx footer");
        }
    };
    
    // Initialize when DOM is ready
    ready(function() {
        // Small delay to ensure ICN is loaded
        setTimeout(function() {
            IlionxHomePane.init();
            IlionxFooter.init();
        }, 1000);
    });
    
    console.log("ilionxDemoPlugin Scope - End");
});
