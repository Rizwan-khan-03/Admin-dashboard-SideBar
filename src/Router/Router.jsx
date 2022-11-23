import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { routepath } from "./RouteList";
import { CheckRouter } from "./CheckRouter";
import ProtectRoutes from './ProtectRoutes'

export default function Router() {
  return (
    <div>
      <Routes>
        {
          routepath?.map((i, index) => {
            if (!i.private) {
              return (
                <Route
                  key={index}
                  path={i.path}
                  element={<ProtectRoutes>{<i.Element />}</ProtectRoutes>}
                />
              );
            }
          })
        }
        <Route path="*" element={<CheckRouter />} />
      </Routes>
    </div>
  );
}
