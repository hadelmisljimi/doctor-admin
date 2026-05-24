export default getRole = () => localStorage.getItem("role");

export default isAdmin = () => getRole() === "ADMIN";
export default isDoctor = () => getRole() === "DOCTOR";
export default isPatient = () => getRole() === "PATIENT";