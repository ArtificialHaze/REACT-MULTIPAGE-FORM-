import Billing from "./Billing";
import Optin from "./Optin";
import Shipping from "./Shipping";
import useFormContext from "./useFormContext";

const FormInputs = () => {
  const { page } = useFormContext();

  const display = {
    0: <Billing />,
    1: <Shipping />,
    2: <Optin />,
  };

  const content = <div className="form-inputs flex-col">{display[page]}</div>;

  return content;
};
export default FormInputs;
