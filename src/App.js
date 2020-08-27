import React from "react";
import "./App.scss";
import img from "./img/logo.png";
import { Form } from "./component/Form";
import { StepMenu } from "./component/StepMenu";
import { ApplicationLayout, Stepper, Card, GridContainer } from "@adot/ui";
import { watchResize } from "react-behave";

function App() {
  const AppRef = React.useRef(null);
  const [screenSize, setScreenSize] = React.useState(null);
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  React.useEffect(() => {
    return watchResize(AppRef.current, ({ width }) => setScreenSize(width));
  }, []);

  React.useEffect(() => {
    if (screenSize < 1000) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, [screenSize]);

  console.log("isSmallScreen", isSmallScreen);

  return (
    <ApplicationLayout>
      <div className="App" ref={AppRef}>
        <header className="App-header">
          <img src={img} className="App-logo" alt="logo" />
          <p>Bienvenue sur le diagnostique de peau</p>
        </header>
        <div className="FormStepper">
          <Stepper className="FormStepper__Stepper" horizontal={true}>
            <Stepper.Step label="Step 1" status="done">
              Content here...
            </Stepper.Step>
            <Stepper.Step label="Step 2" status="active">
              Content here...
            </Stepper.Step>
            <Stepper.Step label="Step 3">Content here...</Stepper.Step>
          </Stepper>
        </div>
        <GridContainer>
          {!isSmallScreen && (
            <div className="col-2">
              <StepMenu />
            </div>
          )}

          <div className={"col-10"}>
            <Card elevation={2} className="StepContent__Card">
              <Form />
            </Card>
          </div>
        </GridContainer>
      </div>
    </ApplicationLayout>
  );
}

export default App;
