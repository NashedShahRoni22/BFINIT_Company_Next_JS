import calculator from "../assets/icons/calculator.png";
import chart from "../assets/icons/chart.png";
import clock from "../assets/icons/clock.png";
import employee from "../assets/icons/employee.png";
import invoice from "../assets/icons/invoice.png";
import ledger from "../assets/icons/ledger.png";
import update from "../assets/icons/update.png";

export const sassProducts = [
  {
    id: 1,
    title: "HR payroll software & Project Management",
    description:
      "Payroll software can integrate with other HR systems for seamless management",
    cta: "25000",
    features: [
      {
        title: "Automated Payroll Calculations",
        description:
          "Payroll software automates the calculation of employee paychecks, taking into account factors such as hours worked, pay rates, overtime, bonuses, and deductions.",
        icon: calculator,
      },
      {
        title: "Employee Information Management",
        description:
          "Payroll software can store employee information, such as contact details, tax forms, and benefit enrollment.",
        icon: employee,
      },
      {
        title: "Time and Attendance Tracking",
        description:
          "Many payroll software systems include time and attendance tracking features that allow employees to clock in and out, track their hours work.",
        icon: clock,
      },
      {
        title: "Tax Calculations and Filing",
        description:
          "Payroll software automatically calculates and withholds taxes, including federal and state income tax",
        icon: invoice,
      },
    ],
  },
  {
    id: 2,
    title: "Classic payroll software",
    description:
      "Payroll software can integrate with other HR systems for seamless management",
    cta: "15000",
    features: [
      {
        title: "Automated Payroll Calculations",
        description:
          "Payroll software automates the calculation of employee paychecks, taking into account factors such as hours worked, pay rates, overtime, bonuses, and deductions.",
        icon: calculator,
      },
      {
        title: "Employee Information Management",
        description:
          "Payroll software can store employee information, such as contact details, tax forms, and benefit enrollment.",
        icon: employee,
      },
      {
        title: "Time and Attendance Tracking",
        description:
          "Many payroll software systems include time and attendance tracking features that allow employees to clock in and out, track their hours work.",
        icon: clock,
      },
      {
        title: "Tax Calculations and Filing",
        description:
          "Payroll software automatically calculates and withholds taxes, including federal and state income tax",
        icon: invoice,
      },
    ],
  },
  {
    id: 4,
    title: "Mobile Invoicing App",
    description: "Invoicing Can Be Used For Client Management",
    cta: "7500",
    features: [
      {
        title: "Customizable Invoice Templates",
        description:
          "Invoicing software provides customizable invoice templates that businesses can use to create professional-looking invoices with their own branding and logo.",
        icon: invoice,
      },
      {
        title: "Automated Invoicing",
        description:
          "Invoicing software can automatically generate and send invoices to customers based on predetermined settings, such as recurring invoices or payment reminders.",
        icon: update,
      },
      {
        title: "Invoice Tracking",
        description:
          "Invoicing software allows businesses to track the status of invoices, such as when they are sent, viewed, and paid.",
        icon: clock,
      },
      {
        title: "Reporting and Analytics",
        description:
          "Invoicing software can generate reports and analytics on invoice-related data, such as invoice totals, outstanding invoices, and payment history.",
        icon: chart,
      },
    ],
  },
  {
    id: 3,
    title: "Accounting GAAP",
    description:
      "Accounting GAAP ensures financial records are consistent, relevant, comparable, and complete for seamless financial management",
    cta: "15000",
    features: [
      {
        title: "Consistency",
        description:
          "GAAP requires businesses to use consistent accounting methods and procedures from one period to the next. This ensures that financial statements are comparable over time and that investors and stakeholders can rely on the accuracy of the information presented.",
        icon: update,
      },
      {
        title: "Comparability",
        description:
          "GAAP requires businesses to present financial information in a manner that allows for comparisons with other businesses in the same industry or sector. This means that financial statements must use common accounting methods and procedures to allow for meaningful comparisons.",
        icon: chart,
      },
      {
        title: "Relevance",
        description:
          "GAAP requires businesses to report information that is relevant to the decision-making needs of investors, creditors, and other stakeholders. This means that financial statements must include information that is material to the financial health of the business.",
        icon: clock,
      },
      {
        title: "Full Disclosure",
        description:
          "GAAP requires businesses to provide full and complete disclosure of all relevant financial information in the footnotes to the financial statements. This ensures that investors and stakeholders have access to all relevant information needed to make informed decisions.",
        icon: ledger,
      },
    ],
  },
];
