import PaymentTool from "../components/PaymentTool";
import rightpanelb from '../image/rightpanelb.png';
import SendFund from "../components/SendFund";
import { Link } from 'react-router-dom'
import bussiness from '../image/bussiness.png';

const Business = () => {
    return (
        <>
            <section className="text-center bg-blackB p-5">
                <div className="white-text-p mt-5">
                    <h2>Manage payroll, compliance</h2>
                    <h2>& HR in real time</h2>
                    <p className="mb-5">Make income tax remittances to the state internal revenue service for your employees.</p>
                    <Link className="white-text linkHref buttonArea" href="#">Create free account</Link>
                </div>
            </section>
            <section className="text-center imgBusinessSec">
                <img src={bussiness} className="imgBusiness" />
            </section>
            <section className="my-5 mx-5">
                <PaymentTool />
            </section>
            <section className="backCirclemdpage">
                <div className="mx-5 mt-5">
                    <div className="d-flex justify-content-between mt-5">
                        <div>
                            <div className="borderBar removeSpace">
                                <h2>Payment</h2>
                                <p>No more checks, no more envelopes and stamps, you can pay your employees anytime, anywhere</p>
                            </div>
                            <div className="borderBar removeSpace">
                                <h2>Payroll</h2>
                                <p>End-to-end automation of payroll management for organizations, complying with Nigerian tax law and tax optimizations for the user.</p>
                            </div>
                            <div className="borderBar removeSpace">
                                <h2>Payslip</h2>
                                <p>Generates automated TaxiTPaySlip email notifications for each employee/user.</p>
                            </div>
                            <div className="borderBar removeSpace activeBorder">
                                <h2>Reports</h2>
                                <p>Generates relevant reports, such as PAYE Returns for easy compliance with filing obligations.</p>
                            </div>
                        </div>
                        <div>
                            <img src={rightpanelb} className="leftpanelH" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <SendFund />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Business;