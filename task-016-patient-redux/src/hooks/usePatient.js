import { useDispatch, useSelector } from "react-redux";
import { addPatient as addPatientAction, deletePatient as deletePatientAction } from "../redux/patientSlice";

const usePatient = () => {
  const patients = useSelector((state) => state.patient.patients);
  const dispatch = useDispatch();

  const addPatient = (name) => {
    dispatch(addPatientAction(name));
  };

  const deletePatient = (index) => {
    dispatch(deletePatientAction(index));
  };

  return { patients, addPatient, deletePatient };
};

export default usePatient;