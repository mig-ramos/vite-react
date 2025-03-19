import { Outlet, useParams, useSearchParams } from "react-router-dom";
import "./style.css";

export const Post = () => {
  const params = useParams();
  const { id } = params;
  const [qs] = useSearchParams();
  return (
    <div>
      <h1>
        Posts {`Param: ${id}`} {`QS: ${qs.get("segundo")}`}
      </h1>
      <Outlet />
    </div>
  );
};
