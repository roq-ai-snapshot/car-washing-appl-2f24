interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Manager', 'Employee', 'Accountant', 'Customer'],
  tenantName: 'Company',
  applicationName: 'car washing application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'View company information',
    'View car details',
    'View service details',
    'View appointment status',
  ],
  ownerAbilities: ['Manage company', 'Manage service', 'Manage employee', 'Manage appointment'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/a6b8b147-add1-460c-a961-025b8c2a73aa',
};
