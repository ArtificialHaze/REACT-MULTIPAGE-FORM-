import "./App.css";
import Form from "./Form";
import { FormProvider } from "./FormContext";

const App = () => {
  return (
    <>
      <FormProvider>
        <Form />
      </FormProvider>
    </>
  );
};

export default App;
