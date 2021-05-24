import Button from "./Button";
import Carousel from "./Carousel";
import buttons_1 from "../buttons-1";
import "../styles/styles.css";

function createButton(button) {
  return <Button button_text={button.button_text} class={button.class} />;
}

function Header() {
  return (
    <div className="Header">
      <div className="Header-top">
        <img src="https://www.drishtiias.com/frontend/img/logo-horizontal.png" alt="something" />
        <nav>
          <ul className="container">
            <li className="container-list">
              <a href="Home">Home</a>
            </li>
            <li className="container-list">
              <a href="About">About</a>
            </li>
            <li className="container-list">
              <a href="Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="Header-title">
        <h1>
          Think IAS Think <span>Drishti</span>
        </h1>
        <p>Think - Connect - Express</p>
      </div>
      <div className="Header-btn-section">
        <Button button_text="Online Courses (ENG)" class="btn" />
        <Button button_text="Dhristhi Learning App" class="btn-centre btn" />
        <Button button_text="Online Courses (HIN)" class="btn" />
      </div>
      <div className="ass">
        <div className="carousel-container">
          <div className="carousel carousel-1">
            <h3>English</h3>
            <Carousel key="2" input={buttons_1.map(createButton)} />
            <div className="carousel-bottom-btn">
              <Button
                button_text="Visit English Website"
                class="btn btn-carousel-bottom"
              />
            </div>
          </div>
          <div className="carousel carousel-2">
            <h3>Hindi</h3>
            <Carousel key="1" input={buttons_1.map(createButton)} />
            <div className="carousel-bottom-btn">
              <Button
                button_text="Visit Hindi Website"
                class="btn btn-carousel-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
