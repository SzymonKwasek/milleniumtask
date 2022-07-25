import { useState, Fragment } from "react";
import "./Employees.scss";

interface IEmployee {
    Name: string;
    Surname: string;
}

const Employees = () => {
    const [Employees, setEmployees] = useState<IEmployee[]>([]);
    const [NewEmployeeName, setNewEmployeeName] = useState<string>('');
    const [NewEmployeeSurname, setNewEmployeeSurname] = useState<string>('');
    const [IsValidationVisible, setIsValidationVisible] = useState<boolean>(false);

    const AddEmployee = () => {
        if (NewEmployeeSurname.length === 0 || NewEmployeeName.length === 0) {
            setIsValidationVisible(true);
        } else {
            const newEmployee: IEmployee = {
                Name: NewEmployeeName,
                Surname: NewEmployeeSurname
            }
            setEmployees([...Employees, newEmployee]);
            setNewEmployeeName('');
            setNewEmployeeSurname('');
        }
    }

    const OnNewEmployeeNameChange = (e: any) => {
        setNewEmployeeName(e.target.value);
        setIsValidationVisible(false);
    }

    const OnNewEmployeeSurnameChange = (e: any) => {
        setNewEmployeeSurname(e.target.value);
        setIsValidationVisible(false);
    }

    const OnItemRemove = (id: number) => {
        const employeesCopy = [...Employees];
        employeesCopy.splice(id, 1);
        setEmployees(employeesCopy);
    }

    return (
        <div className="employees">
            <div className="employees__grid">
                <div className="employees__row employees__header">
                    Pracownicy
                </div>
                {Employees.length > 0 ?
                    Employees.map((el, id) => {
                        return (
                            <Fragment key={id}>
                                <div className="employees__row employees__name">
                                    {el.Name}
                                </div>
                                <div className="employees__row employees__surname">
                                    {el.Surname}
                                    <button className="employees__remove-button" onClick={OnItemRemove.bind(this, id)} >X</button>
                                </div>
                            </Fragment>
                        )
                    })
                    :
                    <div className="employees__row employees__no-data">
                        No data
                    </div>
                }
            </div>
            <div className="employees__input-wrapper">
                <input
                    placeholder="Name"
                    className="employees__input"
                    value={NewEmployeeName}
                    onChange={OnNewEmployeeNameChange} />
                <input
                    placeholder="Surname"
                    className="employees__input"
                    value={NewEmployeeSurname}
                    onChange={OnNewEmployeeSurnameChange} />
                <button
                    className="employees__button"
                    disabled={Employees.length === 5}
                    onClick={AddEmployee}>
                    Add employee
                </button>
            </div>
            {IsValidationVisible &&
                <p className="employees__validation">
                    Please provide name and surname
                </p>
            }
        </div>
    )
}

export default Employees;