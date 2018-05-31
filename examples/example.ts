/**
 * !mockRange {1-5}
 */
interface Person {
  /** !mockType {name.firstName} */
  firstName: string;

  /** !mockType {name.lastName} */
  lastName: string;

  employeeDetail: EmployeeDetail;
}

interface EmployeeDetail {
  /** !mockType {internet.email} */
  email: string;
}
