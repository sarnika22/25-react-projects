import { useContext } from "react";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tictactoe";
import RandomColor from "../random-color";
import Accordion from "../accordion";
import TreeView from "../tree-view";
import menus from "../tree-view/data";
import TabTest from "../custom-tabs/tab-test";
import { FeatureFlagContext } from "./context";

export default function FeatureFlag() {
  const { loading, enabledFlag } = useContext(FeatureFlagContext);
  const componentToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <TabTest />,
    }
  ];

  function checkEnabledFlag(getCurrentKey) {
    return enabledFlag[getCurrentKey];
  }

  if (loading) return <h1>Loaading! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flag</h1>
      {componentToRender.map((componentItem) =>
        checkEnabledFlag(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
