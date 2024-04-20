import Tabs from "./tabs";
import './tabs.css';

function RandomContent() {
  return <h1>Some random content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomContent/>,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
