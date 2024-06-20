import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserActionList } from "./userAction/UserActionList";
import { UserActionCreate } from "./userAction/UserActionCreate";
import { UserActionEdit } from "./userAction/UserActionEdit";
import { UserActionShow } from "./userAction/UserActionShow";
import { AnalyticsRecordList } from "./analyticsRecord/AnalyticsRecordList";
import { AnalyticsRecordCreate } from "./analyticsRecord/AnalyticsRecordCreate";
import { AnalyticsRecordEdit } from "./analyticsRecord/AnalyticsRecordEdit";
import { AnalyticsRecordShow } from "./analyticsRecord/AnalyticsRecordShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BlogAnalyticsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserAction"
          list={UserActionList}
          edit={UserActionEdit}
          create={UserActionCreate}
          show={UserActionShow}
        />
        <Resource
          name="AnalyticsRecord"
          list={AnalyticsRecordList}
          edit={AnalyticsRecordEdit}
          create={AnalyticsRecordCreate}
          show={AnalyticsRecordShow}
        />
      </Admin>
    </div>
  );
};

export default App;
