import { useEffect } from "react";
import Activity from "../../components/activity";
import Employee from "../../components/employee";
import useActivity from "../../hooks/useActivity";
import useEmployee from "../../hooks/useEmployee"

const Home: React.FC = () => {
    const { employeeState, fetchEmployees } = useEmployee();
    const { activities, fetchActivities } = useActivity();

    useEffect(() => {
        fetchEmployees();
        fetchActivities();
    }, []);

    return <div>
        Home!
        {employeeState.map((employee, index) => <Employee {...employee} key={index} />)}
        <hr />
        {activities.map((activity, index) => <Activity {...activity} key={index} />)}
    </div>
}

export default Home;