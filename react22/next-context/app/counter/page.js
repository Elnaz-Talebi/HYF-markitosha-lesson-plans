import { CounterProvider } from "./CounterContext";
import Counter from "./Counter";

export default function CounterPage() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
