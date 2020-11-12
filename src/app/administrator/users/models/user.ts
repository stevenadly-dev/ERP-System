import { GroupDropDownDto } from 'src/app/shared/models/group-drop-down-dto';
import { PrintOutPartial } from 'src/app/shared/models/print-out-partial';
import { ReportPartial } from 'src/app/shared/models/report-partial';
import { RolePartial } from 'src/app/shared/models/role-partial';

export class User {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  jobType: string;
  userName: string;
  // admin: boolean;
  block: boolean;
  status: boolean;
  phoneNo: string;
  faxNum: string;
  mobile1: string;
  mobile2: string;
  ext: number;
  worNo: number;
  address: string;
  city: string;
  zipCode: string;
  country: string;
  departmentId: number;
  autoLicence: boolean;
  jobTitle: string;
  office: string;
  devisionId: number;
  password: string;
  changePassword: boolean;
  groupPartials: GroupDropDownDto[];
  rolePartials: RolePartial[];
  reportPartials: ReportPartial[];
  printOutPartials: PrintOutPartial[];
}
