import "./styles.css";

/*
<div class="app"> 
  <h1>Two Column Layout</h1>
  // First TwoColumn start
  <div class="two-column">
    // First TwoColumn's children prop begins
    <div>
      <h2>Left</h2>
      <p>This is the left side content</p>
    </div>
    <div>
      <h2>Right</h2>
      <p>
        This is the right side content. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Totam natus numquam culpa, impedit temporibus nostrum
        aspernatur tempore eos sunt eius esse nam nisi. Inventore quisquam
        obcaecati ullam quos tempore possimus. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Totam voluptate quidem voluptates
        doloribus rerum doloremque quisquam! Quam qui repellat quod minus saepe.
        Quae quibusdam necessitatibus atque facere accusamus asperiores ducimus!
      </p>
    </div>
    // First TwoColumn's children prop ends
  </div>
  // First TwoColumn end
  // Second TwoColumn starts
  <div class="two-column">
  // Second TwoColumn's children prop starts
    <div>
      <h2>Left</h2>
      <p>This is the left side content</p>
    </div>
    <div>
      <h2>Right</h2>
      <p>This is the right side content</p>
      <img>
    </div>
    // Second TwoColumn's children prop ends
  </div>
  // Second TwoColumn ends
</div>
*/

// leftHeading, leftText, rightHeading, rightText
function TwoColumn({ children }) {
  return (
    <div class="two-column">
      {/* Whatever comes here keeps changing */}
      {children}
    </div>
  )
}

export default function ParentComponent() {
  return (
    <div class="app">
      <h1>Two Column Layout</h1>
      <TwoColumn>
        <div>
          <h2>Left</h2>
          <p>This is the left side content</p>
        </div>
        <div>
          <h2>Right</h2>
          <p>
            This is the right side content. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Totam natus numquam culpa, impedit temporibus nostrum
            aspernatur tempore eos sunt eius esse nam nisi. Inventore quisquam
            obcaecati ullam quos tempore possimus. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Totam voluptate quidem voluptates
            doloribus rerum doloremque quisquam! Quam qui repellat quod minus saepe.
            Quae quibusdam necessitatibus atque facere accusamus asperiores ducimus!
          </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ex inventore quia, dignissimos quos nostrum nam et laborum quidem doloremque quod delectus tempore fuga consectetur consequatur earum hic. Necessitatibus, nihil!</p>
        </div>
      </TwoColumn>
      <TwoColumn>
        <div>
          <h2>Left</h2>
          <p>This is the left side content</p>
        </div>
        <div>
          <h2>Right</h2>
          <p>This is the right side content</p>
        </div>
      </TwoColumn>

    </div>
  );
}