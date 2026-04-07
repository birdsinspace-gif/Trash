export default function HomePage() {
  return (
    <main className="site">
      <header className="nav">
        <div className="container nav-inner">
          <a href="#" className="brand">
            <div className="brand-mark">IB</div>
            <div className="brand-copy">
              <span className="brand-name">Iron Bin Waste Co.</span>
              <span className="brand-tag">Residential and commercial collection</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="#pricing">Pricing</a>
            <a href="#reviews">Reviews</a>
          </nav>

          <a href="#quote" className="nav-cta">
            Get a Quote
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="kicker">Dependable. Clean. On schedule.</span>
            <h1>
              Waste collection
              <br />
              that actually
              <br />
              shows up.
            </h1>
            <p>
              Iron Bin Waste Co. keeps neighborhoods, construction sites, offices,
              and retail properties moving with reliable pickup, rugged equipment,
              and a team that does the dirty work right.
            </p>

            <div className="hero-actions">
              <a href="#quote" className="primary-btn">
                Start Service
              </a>
              <a href="#pricing" className="secondary-btn">
                View Pricing
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <strong>12,000+</strong>
                <span>Monthly pickups completed</span>
              </div>
              <div className="stat">
                <strong>99.2%</strong>
                <span>On-time route performance</span>
              </div>
              <div className="stat">
                <strong>24/7</strong>
                <span>Commercial support availability</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="route-card">
              <div className="route-top">
                <strong>Today’s Route Status</strong>
                <span className="route-chip">Live</span>
              </div>

              <div className="route-row">
                <span>North Fulton Residential</span>
                <span>On Time</span>
              </div>
              <div className="route-row">
                <span>Commercial Downtown Loop</span>
                <span>In Progress</span>
              </div>
              <div className="route-row">
                <span>Construction Roll-Off Swap</span>
                <span>Scheduled</span>
              </div>
            </div>

            <div className="quote-box" id="quote">
              <h3>Fast quote request</h3>
              <p>
                Need curbside pickup, dumpster rental, or recurring commercial
                collection? We can price it quickly.
              </p>
              <ul>
                <li>Residential trash and recycling</li>
                <li>Commercial front-load service</li>
                <li>Temporary dumpsters and roll-offs</li>
              </ul>
              <a href="mailto:hello@ironbinwaste.com" className="quote-button">
                hello@ironbinwaste.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="services">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Services</div>
            <h2>Everything from curbside pickup to heavy-duty site cleanup.</h2>
            <p>
              We built Iron Bin for customers who want one operator that can handle
              the basics, the ugly stuff, and the urgent jobs without excuses.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div className="card-icon">01</div>
              <h3>Residential Collection</h3>
              <p>
                Weekly curbside service with dependable pickup windows, recycling
                options, and bulk item add-ons for households that want zero hassle.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">02</div>
              <h3>Commercial Pickup</h3>
              <p>
                Consistent service for office parks, restaurants, retail, and mixed
                use properties with route planning that respects your operating hours.
              </p>
            </div>

            <div className="card">
              <div className="card-icon">03</div>
              <h3>Roll-Off Dumpsters</h3>
              <p>
                Jobsite and renovation support with flexible drop-off, swap-out, and
                final haul-away scheduling for contractors and property owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="why-us">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Why Iron Bin</div>
            <h2>Trash is messy. Your service experience should not be.</h2>
            <p>
              Most garbage websites look like they were built in 2009 and most waste
              companies communicate like they are doing you a favor. We decided to do
              the opposite.
            </p>
          </div>

          <div className="why-grid">
            <div className="feature-panel">
              <h3>Built for reliability first.</h3>
              <p>
                Customers care about one thing above almost everything else: did the
                truck show up when you said it would? That is why our whole model is
                built around route discipline, fast issue resolution, and clear service
                communication.
              </p>
            </div>

            <div className="feature-list">
              <div className="feature-item">
                Clear billing, no mystery charges, no weird contract language.
              </div>
              <div className="feature-item">
                Fast response when bins are missed, overloaded, or damaged.
              </div>
              <div className="feature-item">
                Cleaner branding and better customer communication than the usual local operator.
              </div>
              <div className="feature-item">
                Flexible plans for homes, businesses, contractors, and property managers.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="pricing">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Pricing</div>
            <h2>Simple plans, straightforward service.</h2>
            <p>
              Good pricing psychology here is simple: make the middle option the easy
              yes, keep the entry plan clean, and make the premium tier feel like peace
              of mind for customers who hate service friction.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="price-card">
              <span className="price-tag">Starter</span>
              <h3>Residential Basic</h3>
              <p className="price">
                $29 <small>/month</small>
              </p>
              <p className="price-desc">
                Ideal for standard household trash pickup with one weekly collection.
              </p>
              <ul className="price-list">
                <li>1 trash bin</li>
                <li>Weekly pickup</li>
                <li>Online billing</li>
                <li>Bulk item add-ons available</li>
              </ul>
              <a href="#quote" className="price-button">
                Get Started
              </a>
            </div>

            <div className="price-card featured">
              <span className="price-tag">Most Popular</span>
              <h3>Residential Plus</h3>
              <p className="price">
                $49 <small>/month</small>
              </p>
              <p className="price-desc">
                Best value for busy households that want trash, recycling, and less
                friction.
              </p>
              <ul className="price-list">
                <li>Trash plus recycling</li>
                <li>Priority missed-pickup support</li>
                <li>2 bulk pickups per year</li>
                <li>Preferred customer pricing</li>
              </ul>
              <a href="#quote" className="price-button">
                Choose Plus
              </a>
            </div>

            <div className="price-card">
              <span className="price-tag">Premium</span>
              <h3>Commercial Custom</h3>
              <p className="price">
                $149 <small>starting</small>
              </p>
              <p className="price-desc">
                Flexible commercial service for businesses that need predictable waste
                handling and responsive support.
              </p>
              <ul className="price-list">
                <li>Custom pickup frequency</li>
                <li>Dedicated account contact</li>
                <li>Bin sizing consultation</li>
                <li>After-hours support options</li>
              </ul>
              <a href="#quote" className="price-button">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="reviews">
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">Reviews</div>
            <h2>The kind of feedback garbage companies almost never earn.</h2>
            <p>
              A waste company is usually invisible until it messes something up. Our
              goal is to be remembered for reliability, not apologies.
            </p>
          </div>

          <div className="review-grid">
            <div className="review">
              <p>
                “I did not think I would ever describe a trash company as professional,
                but here we are. They communicate, they show up, and the billing is
                actually easy.”
              </p>
              <strong>Rachel M.</strong>
              <span>Homeowner</span>
            </div>

            <div className="review">
              <p>
                “We switched three retail properties over to Iron Bin and immediately
                had fewer complaints from tenants. That alone made it worth it.”
              </p>
              <strong>David S.</strong>
              <span>Property Manager</span>
            </div>

            <div className="review">
              <p>
                “Fast dumpster swaps, no drama, fair pricing. For jobsite cleanup,
                that is exactly what I need.”
              </p>
              <strong>Mark T.</strong>
              <span>General Contractor</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <h2>Need a trash company that acts like a real business?</h2>
            <p>
              Iron Bin Waste Co. handles residential routes, commercial collection,
              roll-off dumpsters, and site cleanup with better communication and harder
              edges than the usual local option.
            </p>
            <a href="mailto:hello@ironbinwaste.com" className="primary-btn">
              Contact Iron Bin
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-row">
          <div>© 2026 Iron Bin Waste Co. All rights reserved.</div>
          <div>Built tough. Picked up on time.</div>
        </div>
      </footer>
    </main>
  );
}
