import HeroImage from "../../../assets/food/food4.jpeg";
export default function Login() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon"
      ></img>
      <div className="reserve-header-text">
        <h1>Login</h1>
      </div>
    </header>
  );
}
