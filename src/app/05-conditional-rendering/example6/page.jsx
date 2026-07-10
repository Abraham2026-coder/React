import "./styles.css";
/*
Expected Output:
<div class="container">

  <div class="card visitor">
    <h2>Alice</h2>
    <p class="plan">Visitor Plan</p>
    <p class="message">Upgrade to unlock features</p> <!-- Only shows for visitor plan -->
  </div>

  <div class="card pro">
    <h2>Bob</h2>
    <p class="plan">Pro Plan</p>
    <p class="credits">12 credits remaining</p>
    <button class="use-btn">Use Credit</button> <!-- Only shows when credits are greater than 0 -->
  </div>

  <div class="card pro">
    <h2>Diana</h2>
    <p class="plan">Pro Plan</p>
    <p class="credits warning">Low credits</p> <!-- Only shows when credits are below 4-->
    <button class="use-btn">Use Credit</button>
  </div>
</div>

Stretch Goal:
<div class="container">

  <div class="card visitor">
    <h2>Alice</h2>  --->repeating
    <p class="plan">Visitor Plan</p>
    <p class="message">Upgrade to unlock features</p>
  </div>

  <div class="card pro"> --->repeating
    <h2>Bob</h2>  --->repeating
    <p class="plan">Pro Plan</p>
    <p class="credits">12 credits remaining</p>
    <button class="use-btn">Use Credit</button>
  </div>

  <div class="card enterprise">
    <h2>Charlie</h2>
    <p class="plan">Enterprise Plan</p>
    <p class="credits">Unlimited Access</p>
    <button class="manage-btn">Manage Team</button>
  </div>

  <div class="card pro">
    <h2>Diana</h2>
    <p class="plan">Pro Plan</p>
    <p class="credits warning">Low credits</p>
    <button class="use-btn">Use Credit</button>
  </div>
</div>

*/
function CreditCardUsers({ name, plan, message, credit,btnLabel }) {
  return (
    <>
      <div className="card visitor">
        <h2>{name}</h2>
        <p className="plan">{plan}</p>
        {plan === "Visitor Plan" && <p className="message">{message}</p>}
      </div>

      <div className="card enterprise">
        <h2>{name}</h2>
        <p className="plan">{plan}</p>
        <p className="credits">{message}</p>
        <button className="manage-btn">{btnLabel}</button>
      </div>

      <div className="card pro">
        <h2>{name}</h2>
        <p className="plan">Pro Plan</p>
        <p className="credits">{credit} credits remaining</p>
        {credit > 0 && <button className="use-btn">{btnLabel}</button>}
        {credit < 4 && <><p className="credits warning">{message}</p> <button class="use-btn">{btnLabel}</button></>}
      </div>

    </>

  );


}

export default function () {
  return (
    <div class="container">
      <CreditCardUsers name="Alice" plan="Visitor Plan" message="Upgrade to unlock features" />
      <CreditCardUsers name="Bob" plan="Pro Plan" credit={12} />
      <CreditCardUsers name="Charlie" plan="Enterprise Plan" message="Unlimited Access" btnLabel="Manage Team" />
      <CreditCardUsers name="Diana" plan="Pro Plan" credit={3} btnLabel="Use Credit" message="Low credits" />
    </div>

  );

}