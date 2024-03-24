export interface IUser {
  id: string
  index: number
  guid: string
  fullName: string
  email: string
  profilePicture: string
  password: string
  address: string
  customers: IUserRecord[]
}

export interface IUserRecord {
  id: string
  PersonalInformation: {
    fullName: string
    phoneNumber: string
    emailAddress: string
    BVNNumber: number
    gender: 'male' | 'female'
    maritalStatus: string
    numberOfChildren: number
    typeOfResidence: string
  }
  EducationAndEmployment: {
    levelOfEducation: string
    employmentStatus: string
    sectorOfEmployment: string
    durationOfEmployment: string
    officeEmail: string
    monthlyIncome: number
    loanRepayment: number
  }
  Socials: {
    twitterHandle: string
    facebookName: string
    instagramHandle: string
  }
  Guarantors: IGuarantor[]
  Bank: {
    bankName: string
    accountNumber: number
    amount: string
  }
  UserRating: number
  Username: string
  OrganizationName: string
  DateJoined: string
  Status: 'Inactive' | 'Pending' | 'Active' | 'Blacklisted'
}

export interface IGuarantor {
  fullName: string
  phone: string
  email: string
  relationship: string
}
