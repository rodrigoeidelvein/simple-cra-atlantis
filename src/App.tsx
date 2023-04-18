import { Button } from "@jobber/components/Button";
import { Disclosure } from "@jobber/components/Disclosure";
import { Content } from "@jobber/components/Content";
import { Text } from "@jobber/components/Text";
import { useIsMounted } from "@jobber/hooks";
import "./App.css";

function App() {
  const isMounted = useIsMounted();
  console.log(isMounted);
  return (
    <>
      <Disclosure title="Advanced instructions">
        <Content>
          <Text>
            Here is some helpful information to level up your business:
          </Text>
          <Text>
            For every 2 team members you add, your profits will triple.
          </Text>
        </Content>
      </Disclosure>
      <Button label="DON'T PRESS" onClick={() => console.log("💥")} />
    </>
  );
}

export default App;
