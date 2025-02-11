import "./Software.css";
import React from "react";
import iAccs from "../../assets/ais.png";
import Eservice from '../../assets/eservices.png';
import Hris from '../../assets/hris.png';
import Pos from '../../assets/pos.png';
import Que from '../../assets/que.png';
import Voting from '../../assets/voting.png';
import { RiCodepenFill } from "react-icons/ri";
import { PiMoneyBold } from "react-icons/pi";
import { easeInOut, motion } from 'framer-motion'

const Software: React.FC = () => {
    const Accounting: string[] = [
        'General Ledger', 
        'Subsidiary Ledger', 
        'Back Office Transaction', 
        'Front Office Transaction', 
        'Financial Statements', 
        'Fixed Asset Management', 
        'Overriding System', 
        'Aging of Receivables', 
        'Regulating agency reports (BIR, BSP, CDA, CISA)'

    ];
    const Saving : string[] = [
        'Savings, Share Capital, Time Deposit, Special Deposit', 
        'Interest/Witholding Tax on Deposits Processing', 
        'Accrual of Interest on Deposits Processing', 
        'Automatic Rollover of Time Deposits', 
        'Dormancy Management', 
        'Dividend and Patronage Refund Processing'

    ];
    const Loans : string[] = [
        'Analysis of Loans Receivable', 
        'Aging of Loans Receivable', 
        'Collection Efficiency', 
        'Loans Application/Processing Module', 
        'Collector/Account Office Management', 
        'Unearned Interest Amortization Processing', 
        'Holiday Management', 
        'Amortization Schedule Calculator', 
        'Interest Rebates System', 
        'Batch Printing/Email of Reminder/Demand Letters', 
        'Interest and Penalty Worksheet', 
        'Loans History', 
        'Client Credit Rating'
    ];

    // second section
    const boxVariant = {
        visible: { opacity: 1, scale: 2 },
        hidden: { opacity: 0, scale: 0 },
      }



        interface Second {
            pic: JSX.Element
            title: string
            icon: JSX.Element
            description: string
            feature: string[]
        }
        const second: Second[] = [
            { pic: <Hris/>,title: "Orange Pay Plus (HRIS)", icon: <RiCodepenFill />, description: 'Your all in one HR Solutions System is here! Go paperless with your HR files and expedite your payroll process. Subscribe to OrangePay+ (HRIS) now.', feature: [
                'Stand alone system', 
                'A complete paperless HR Management Solutions for SMBs and Enterprise Businesses.', 
                'Complete ease on managing employee info and payroll computation', 
                'Convenient employee access to their info and payslip', 
                'And many other very helpful features', 
            ] },
            {pic: <Eservice/>, title: "E-Services Portal", icon: <RiCodepenFill /> , description: 'Provide your members/clients the access to monitor their accounts and send loan applications online securely at their most convenient time and place. Use E-Services Portal now!', feature: [
                'Real time inquiry of Accounts (Loans and Deposits)', 
                'View and Print Statement of Accounts', 
                'Apply for a Loan Online', 
                'Integrated Portal with other E-Services', 
                'Mobile Responsive', 
            ] },
            {pic: <Voting/>, title: "Online Voting System", icon: <RiCodepenFill />, description: 'Fast and secured way to cast your votes and readily generate results within a few clicks.', feature: [
                'Stand alone system', 
                'Automated Voting System', 
                'Faster voting Experience', 
                'Able to vote anywhere and anytime', 
                'Flexible, Convenient and Secured.', 
            ]  },
            {pic: <Que/>, title: "Online Queuing System", icon: <RiCodepenFill />, description: 'We care for you! To avoid a large crowd, let your client queue anytime anywhere with our Online Queuing System.', feature: [
                'Stand alone system', 
                'Members can queue online anytime and anywhere', 
                'Can be connected to a Kiosk Terminal', 
                'Queuing Monitor with running text announcements and video', 
                'Has a dashboard for the Admin', 
                'Mobile responsive', 
            ]  },
            {pic: <Pos/>, title: "Point-of-Sale", icon: <RiCodepenFill />, description: 'Meet the most versatile BIR accredited Point-of-Sale System. Make fast and hassle-free store transactions and easily award your customer with its Reward feature.', feature: [
                'Item Maintenance',
                'Receiving/Return',
                'Point of Sale',
                'Inventory',
                'Stocks Warehousing/Transfer',
                'Purchase Order',
                'Supplier Maintenance',
                'Physical Inventory',
                'Ordering System'
            ]  },
        ]
        
    return(
        <div className="SoftwareContainer">
            <h2 style={{textAlign: 'center'}}>Software Products</h2>
            <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ type: "spring", stiffness: 200, damping: 10, delay: 1 * 0.2 }}
            className="SoftWrap">
                <div className="IacWrap">
                <motion.img whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                            transition={{duration: 0.3}}  className="iaccs" src={iAccs} alt="" width={74} height={74}/>
                <div>
                <h4>iAccs</h4>
                <p>
                The Most Trusted and Secured Integrated accounting and <br />banking system designed for bank and cooperative <br /> needs for more than 3 decades!
                </p>
                </div>
                </div>
            <div className="divWrap">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut", duration: 0.8, delay: 1 * 0.2 }}                
                className="Soft-item">
                <RiCodepenFill />
                    <h4>Core Accounting System</h4>
                    <ul>
                        {Accounting.map((item1, index) => <li  key={index} >{item1}</li>)}
                    </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut", duration: 0.8, delay: 2 * 0.2 }}
                
                className="Soft-item">
                <PiMoneyBold />
                <h4>Saving / Deposits System</h4>
                <ul>
                        {Saving.map((item2 , index) => <li  key={index}>{item2}</li>)}
                    </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut", duration: 0.8, delay: 3 * 0.2 }}
                
                className="Soft-item">
                    <PiMoneyBold />
                <h4>Loans System</h4>
                <ul>
                        {Loans.map((item3, index) => <li  key={index}>{item3}</li>)}
                    </ul>
                </motion.div>
                
            </div>
            </motion.div>

            <div className="pastProj">
                {second.map((secondItem, index) => (
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10, delay: index * 0.2 }}
                     className="projectDetail" key={index}>
                    <div className="projWrap">
                    <div className="IacWrap">
                        <motion.img
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                        className="iacc"
                        src={secondItem.pic.type}
                        alt={secondItem.title}
                        />
                    
                    <div>
                    <h4>{secondItem.title}</h4>
                    <p>{secondItem.description}</p>
                    </div>
                    </div>
                    <div className="featureWrap">
                            {secondItem.icon}
                            <h4>General Features</h4>
                            <ul>
                                {secondItem.feature.map((itemFeature) => <li>{itemFeature}</li>)}
                            </ul>
                    </div>
                    </div>
                    </motion.div>
                ))}
                </div>

        </div>
    )

}
export default Software;