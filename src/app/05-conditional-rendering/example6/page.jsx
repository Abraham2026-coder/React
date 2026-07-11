import "./styles.css";
/*
Expected Output:
<div class="container">

  <div class="card visitor">
    <h2>Alice</h2> name
    <p class="plan">Visitor Plan</p> plan    message
    <p class="message">Upgrade to unlock features</p> <!-- Only shows for visitor plan -->
  </div>

  <div class="card pro">
    <h2>Bob</h2>
    <p class="plan">Pro Plan</p>
    <p class="credits">12 credits remaining</p> credit btnlabel
    <button class="use-btn">Use Credit</button> <!-- Only shows when credits are greater than 0 -->
  </div>

  <div class="card pro">
    <h2>Diana</h2>
    <p class="plan">Pro Plan</p> warning
    <p class="credits warning">Low credits</p> <!-- Only shows when credits are below 4-->
    <button class="use-btn">Use Credit</button>
  </div>
</div>
*/


/*
<div class="card visitor">
    <h2>Alice</h2> name
    <p class="plan">Visitor Plan</p> plan    message
    <p class="message">Upgrade to unlock features</p> <!-- Only shows for visitor plan -->
  </div>
*/
/*

 <div class="card visitor">
    <h2>Alice</h2> name
    <p class="plan">Visitor Plan</p> plan    message
  </div>

  <div class="card pro">
    <h2>Bob</h2>
    <p class="plan">Pro Plan</p>
  </div>
*/
function CreditCardUsers({ name, plan, credit }) {
  const planClassName = plan === "Visitor Plan" ? "visitor" : "pro";
  const showMessage = plan === "Visitor Plan";
  const showButton = credit > 0 &&  <button className="use-btn">Use Credit</button> ;
  const showWarning = credit < 4  && credit > 0 &&<button className="use-btn">Use Credit</button>;
  
  return (
    <div className={`card ${planClassName}`}>   
      <h2>{name}</h2>
      <p className="plan">{plan}</p>
      {showMessage && <p className="message">Upgrade to unlock features</p>}
      {showButton && <button className="use-btn">Use Credit</button>}
      {showWarning && <p className="credits warning">Low credits</p> }
      
    </div>
  );
}

export default function () {
  return (
    <div className="container">
      <CreditCardUsers name="Alice" plan="Visitor Plan" />
      <CreditCardUsers name="Bob" plan="Pro Plan" credit={12} />
      <CreditCardUsers name="Diana" plan="Pro Plan" credit={3} />
    </div>

  );

}