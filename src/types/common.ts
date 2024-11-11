/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { USER_ROLE } from "@/constant/role";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const TClass = ["Class 1", "Class 2", "Class 3"];
export const TSection = ["A", "B", "C"];
export const TShift = ["Morning", "Day", "Evening"];
export const TMonth = ["January", "February", "March"];
export const TSession = ["2018-2019", "2019-2020", "2020-2021"];
export const TSubject = ["Bangla", "English", "Math"];
export const TSemester = ["1st Semester", "2nd Semester", "3rd Semester"];
export const TClasses = ["6", "7", "8","9","10"];
export const TRoll = ["6", "7", "8","9","10"];
export const TGroup = ["Science", "Business Studies", "Humanities",];
export const TBranchs = ["A", "B", "C",];
export const TVersion = ["Bangla Version ", "English Version "];
export const TFee = ["Admission Fee","Tution Fee","Session charge ","Others"];
export const TStatus = ["Pending","completed","On Hold","Cancel"];
export const TLeaveStatus = ["Pending","Accepted","Cancel"];
export const TLeave = ["Casual Leave","Annual Leave"];
export const TApplication = ["Testimonial","Transfer Certificate ","Transcript", "Certificate", ''];
export const TEmployee = ["Testimonial",];

export type IMeta = {
    page: number;
    limit: number;
    total: number;
  };
  
  export type UserRole = keyof typeof USER_ROLE;
  
  export interface DrawerItem {
    title: string;
    path: string;
    parentPath?: string;
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
    child?: DrawerItem[];
  }
  
  export type ResponseSuccessType = {
    data: any;
    meta?: IMeta;
  };
  
  export type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessage[];
  };
  
  export type IGenericErrorMessage = {
    path: string | number;
    message: string;
  };