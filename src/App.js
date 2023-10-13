import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <header className="App-header">
          <div className="startup">Startup 3</div>
          <div className="overview">
            Overview
            <span className="prices">Prices </span>
            <span className="blog">Blog </span>
            <span className="feedback">Feedback</span>
            <div className="purchase">Purchase</div>
          </div>
        </header>
        <div className="content">
          <div className="text-content">
            <span className="webpage"> Generate Awesome Web Pages </span>
            <span className="paragraph">
              The most important part of the Startup is the Samples. The Samples
              form a set of 25 usable pages you can use as is or you can add new
              blocks.
            </span>
            <div className="learnmore">Learn More</div>
          </div>
          <div className="signup-box">
            <span className="signup">
              <h3 className="h3">Sign Up Now</h3>
              <span className="inputs">
                <input
                  className="email"
                  type="text"
                  name="Your Email"
                  value="Your Email"
                />
                <input
                  className="password"
                  type="text"
                  name="Your Password"
                  value="Your Password"
                />
                <span className="checkbox">
                  <input
                    className="check"
                    type="checkbox"
                    id="vehicle1"
                    name="vehicle1"
                    value="Bike"
                  />
                  <label className="label" for="vehicle1">
                    I agree to the Terms of Service.
                  </label>
                </span>
                <input className="submit" type="submit" value="Sign In" />
                <div className="horizontalMain">
                  <div className="horizontal" />
                  <span className="or">or</span>
                  <div className="horizontal" />
                </div>

                <input
                  className="twitter"
                  type="submit"
                  value="Login via Twitter"
                />
              </span>
              <div className="account">
                <span className="doyou">Do you have an Account?</span>
                <span className="signin">Sign In</span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
