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
    <p class="credits">
      12 credits remaining
    </p>
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
    <h2>Alice</h2>
    <p class="plan">Visitor Plan</p>
    <p class="message">Upgrade to unlock features</p>
  </div>
  <div class="card pro">
    <h2>Bob</h2>
    <p class="plan">Pro Plan</p>
    <p class="credits">
      12<!-- -->
      credits remaining
    </p>
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