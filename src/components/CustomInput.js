import { Input } from "@chakra-ui/react";
export default function CustomInput({ defaultValue, value, ...props }) {
  const [initialValue, setInitialValue] = useState(defaultValue);
  return <Input defaultValue={initialValue} {...props} />;
}
