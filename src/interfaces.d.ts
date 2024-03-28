interface ILoginInfo {
  email: string;
  password: string;
}

interface IRoute {
  name: string;
  displayName: string;
  to?: string;
  groupName?: string;
  meta?: { icon: string };
  children?: IRoute[];
}

interface IToolTip {
  title: string;
  top: number;
  show: boolean;
  id?: string;
}

interface IFormWizard {
  stepUp():void; //To let the form wizard know that the current step is succesfully validated and can move forward. This will be marked as Green
  stepUpWithValidate():void;
  stepDown():void; //To direct the form wizard to go back //This will remove any existing state on the current step.
  skipStep():void; //To let the form wizard know that the current step has been skipped. // current step will be marked as red.
  addError(msg:string):void; //To add error message to be display by the form wizard.
  clearError():void; // to clear all pending error messages that are currently displayed by the form wizard
}

interface IWizardStepValidate{
  next(msg?:string):void;
  uniqueid:string;
  isLastStep:boolean;
  error(msg:string):void;
}

interface IFormWizardStep{
  stepid:number;
  uniqueid:string;
  order:number;
  orderid:number; //order in which they were added to the html element
  title:string;
  canSkip:boolean;
}

interface IUserInfo {
  id:number;
  first_name: string;
  last_name: string;
  name: string;
  email: string;
  status: string;
  mobile: string;
  last_login: Date;
  token: string;
  position: string;
  picture: string;
}

interface ICDEUserInfo {
  token:string;
  name?:string;
  email?:string;
  apiEntry?:string;
  userEntry?:string;
  created:string;
}

interface ICacheBase {
  key?:string;
  time_stamp: number;
  data: string;
}

interface IApiFetchStatus{
  is_loaded:boolean,
  is_sucess:boolean,
  error_msg?:string,
  loading_msg?:string
}

interface IApiResponse{
  result:string;
  description:string;
  object:any;
  rows_count:number;
  query:string;
}

interface IProjectInfo {
  id:number;
  post_date:Date;
  name:string;
  description:string;
  author_id:number;
}


interface IBusinessInfo {
  id:number;
  name:string;
}


interface ITypeInfo {
  id:number;
  post_date:Date;
  name:string;
  code:string;
  type:string;
  description:string;
  author_id:number;
  status:string;
  project_id:number;
  privacy_level:string;
  parent_id:number;
  object_id:number;
  object_type:string;
  code_2:string;
  color_code: string;
  group_name: string;
  project_name:string;
  parent_name:string;
}


interface IContractsInfo {
  id:number;
  post_date:Date;
  name:string;
  code:string;
  project_id:number;
  project_name:string;
  description:string;
  author_id:number;
  author_name:string;
  author_picture_url:string;
}

interface ILessonInfo {
  id:number;
  post_date:Date;
  title:string;
  description:string;
  project_id:string;
  project_name:string;
  contract_id:string;
  contract_code:string;
  contract_name:string;
  category_id:number;
  category_name:string;
  subcategory_id: number;
  subcategory_name:string;
  discipline_id:number;
  discipline_name:string;
  project_stage_id:number;
  project_stage_name:string;
  lesson_type_id:number;
  lesson_type_name:string;
  department_id:number;
  department_name:string;
  originator_id:number;
  originator_name:string;
  impact:string;
  author_id:number;
  author_name:string;
  author_picture_url:string;
  status:string;
  status_comment:string;
  recommendation_count:number;
  project_scope_id:number;
}

interface ILessonRecommendationInfo {
  id:number;
  post_date:Date;
  type:number;
  type_name:string;
  lesson_id:number;
  lesson_name:string;
  department_id:number;
  department_name:string;
  originator_id:number;
  originator_name:string;
  description:string;
  author_id:number;
  author_name:string;
  author_picture_url:string;
  automizable:string;
  automizable_status_value:string;
  implementation_status:string;
  implementation_status_value:string;
  implementation_status_comment:string;
  implementation_date:Date;
  status:string;
  status_comment:string;
}

interface ISubmissionInfo {
  id:number;
  post_date:Date;
  title:string;
  description:string;
  project_id:string;
  project_name:string;
  contract_id:string;
  contract_code:string;
  contract_name:string;
  unique_code:string;
  letter_date:Date;
  letter_reference: string;
  received_date:Date;
  project_stage_id:number;
  project_stage_name:string;
  cde_reference:string;
  cde_url:string;
  pmweb_reference:string;
  pmweb_url:string;
  target_date:Date;
  reviewer_ids:string;
  author_id:number;
  author_name:string;
  author_picture_url:string;
  status:string;
  status_comment:string;
  initial_approver_ids:string;
  intermediate_approver_ids:string;
  final_approver_ids:string;
  originator_id:number;
  originator_name:string;
  reviewers: Array<IUserInfo>;
  initial_approvers: Array<IUserInfo>;
  intermediate_approvers: Array<IUserInfo>;
  final_approvers: Array<IUserInfo>;
  status_value: string;
}


interface IReviewInfo {
  id:number;
  post_date:Date;
  title:string;
  description:string;
  contract_name:string;
  unique_code:string;
  status:string;
  status_comment:string;
  project_id:string;
  project_name:string;
  contract_id:number;
  contract_code:string;
  submission_id: number;
  submission_title: string;
  project_stage_id:number;
  project_stage_name:string;
  discipline_id: number;
  discipline_name: string;
  issue_type_id: number;
  issue_type_name:string;
  sub_issue_type_id: number;
  sub_issue_type_name: string;
  facility_id: number;
  facility_name: string;
  zone_id: number;
  zone_name: string;
  department_id: number;
  department_name: string;
  trade_id: number;
  trade_name: string;
  repetition:string;
  magnitude: string;
  criticality: string;
  project_level_id: number;
  project_level_name: string;
  document_reference: string;
  resolution_status: string;
  resolution_status_comment: string;
  has_attachments: string;
  author_id:number;
  author_name:string;
  author_picture_url:string;
  status_value: string;
  resolution_status_value: string;
}

interface ITaskInfo {
  id:number;
  post_date:Date;
  title:string;
  description:string;
  status:string;
  start_date:Date;
  end_date:Date;
  actual_start_date:Date;
  actual_end_date:Date;
  group_id:number;
  group_name:string;
  subgroup_id:number;
  subgroup_name:string;
  bucket_id:number;
  bucket_name:string;
  category_id:number;
  category_name:string;
  project_id:number;
  project_name:string;
  contract_id:number;
  contract_name:string;
  contract_code:string;
  assigned_to:string;
  assigned_users:Array<IUserInfo>;
  author_id:number;
  author_name:string;
  author_picture_url:string;
  status_comment:string;
  time_consumed:string;
  project_stage_id:number;
  project_stage_name:string;
  ownership_id:number;
  milestone_id:number;
  milestone_name:string;
}


interface ITaskGroupInfo {
  id:number;
  post_date:Date;
  name:string;
  description:string;
  project_id:number;
  project_name:string;
  author_id:number;
  author_name:string;
  author_picture_url:string;
  group_admin_ids:string;
  parent_id:number;
  parent_name:string;
  admin_users:Array<IUserInfo>;
}

interface ITaskBucketInfo {
  id:number;
  post_date:Date;
  name:string;
  description:string;
  group_id:number;
  group_name:string;
  project_id:number;
  project_name:string;
  author_id:number;
  author_name:string;
  author_picture_url:string;
  color_code:string;
}


interface ITaskTimeInfo {
  id:number;
  post_date:Date;
  timesheet_id:number;
  task_id:number;
  project_id:number;
  consumed_time:number;
  timesheet_date:Date;
  comment:string;
  user_id:number;
  author_id:number;
  author_name:string;
  author_picture_url:string;
}
