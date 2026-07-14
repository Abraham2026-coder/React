import "./styles.css";
/*
// Stretch goal from previous exercise
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

// Table-drive conditional logic
const planToCssClassMap = {
  "Visitor Plan": "visitor",
  "Pro Plan": "pro",
  "enterprise": "enterprise"
}
function CreditCardUsers({ name, plan, credit }) {

  let planClassName = planToCssClassMap[plan];
  // let planClassName = planToCssClassMap["Visitor Plan"];
  // let planClassName = "visitor";

  // if (plan === "Visitor Plan") {
  //   planClassName = "visitor";
  // } else if (plan === "Pro Plan") {
  //   planClassName = "pro";
  // } else if (plan === "enterprise") {
  //   planClassName = "enterprise";
  // }

  const showMessage = plan === "Visitor Plan";

  const showButton = credit > 0;
  //showButton = <button className="use-btn">Use Credit</button>; (this will still work because its truthy)
  // showButton = true
  const showWarning = credit < 4 && credit > 0;
  const showEnterprise = plan === "enterprise";

  return (
    <div className={`card ${planClassName}`}>
      <h2>{name}</h2>
      <p className="plan">{plan}</p>
      {showMessage && <p className="message">Upgrade to unlock features</p>}
      {showButton && <button className="use-btn">Use Credit</button>}
      {showWarning && <p className="credits warning">Low credits</p>}
      {showEnterprise && <p className="credits">Unlimited Access</p>}

    </div>
  );
}

export default function () {
  return (
    <div className="container">
      <CreditCardUsers name="Alice" plan="Visitor Plan" />
      <CreditCardUsers name="Bob" plan="Pro Plan" credit={12} />
      <CreditCardUsers name="Diana" plan="Pro Plan" credit={3} />
      <CreditCardUsers name="Charlie" plan="enterprise" />

    </div>

  );

}