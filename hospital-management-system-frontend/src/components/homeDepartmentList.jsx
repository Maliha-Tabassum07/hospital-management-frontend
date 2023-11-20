import useDepartmentHook from "../hooks/useDepartmentHook";
import { useNavigate } from "react-router-dom";

const homeDepartmentList = () => {
  const navigate = useNavigate();
  const { departments, handleSubmit, errors } = useDepartmentHook();

  return (
    <div className="">
      {departments &&
        departments.map((department) => {
          return (
            <div key={department.id} className="">
              <h4>{department.name}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default homeDepartmentList;
