import { EmployeesListItem } from '../EmployeesListItem/EmployeesListItem';
import "./EmployeesList.css";

export const EmployeesList = ({
  data,
  onDelete,
  // onToggleProp,
  onToggleIncrease,
  onToggleRise,
}) => {
  return (
    <>
      <ul className="app-list list-group">
        {data &&
          data.map((item) => (
            <EmployeesListItem
              key={item.id}
              {...item}
              onDelete={() => onDelete(item.id)}
              onToggleIncrease={() => onToggleIncrease(item.id)}
              onToggleRise={() => onToggleRise(item.id)}
              // onToggleProp={(e) => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
            />
          ))}
      </ul>
    </>
  );
};
