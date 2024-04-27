import React from "react";
import { Link } from 'react-router-dom'
import heroImage from '../image/heroImage.PNG';
import rightpanel from '../image/rightpanel.png';
import leftpanel from '../image/leftpanel.png';
import appstore from '../image/appstore.png';
import googleplay from '../image/googleplay.png';
import PaymentTool from "../components/PaymentTool";
import SendFund from "../components/SendFund";

const Individual = () => {
    return (
        <>
            <section className="d-flex justify-content-evenly bg-black p-5">
                <div className="white-text-p mt-5">
                    <h2>Secure & seamless</h2>
                    <h2>online transactions</h2>
                    <p className="mb-5">Providing you with the best online payment experience</p>
                    <Link className="white-text linkHref buttonArea" href="#">Create free account</Link>
                </div>
                <div>
                    <img src={heroImage} />
                </div>
            </section>
            <section className="my-5 mx-5">
                <PaymentTool />
            </section>
            <section className="backCirclemdpage">
                <div className="mx-5 mt-5">
                    <div className="d-flex justify-content-between mt-5">
                        <div>
                            <div className="borderBar removeSpace activeBorder">
                                <h2>Pay bills</h2>
                                <p>Paying your bills has never been so easy.</p>
                            </div>
                            <div className="borderBar removeSpace">
                                <h2>Buy Airtime & Data</h2>
                                <p>Never get caught with low airtime and data again!</p>
                            </div>
                            <div className="borderBar removeSpace">
                                <h2>Money Transfer</h2>
                                <p>Transferring money is now hassle-free.</p>
                            </div>
                            <div className="borderBar removeSpace">
                                <h2>Pay Toll Fee</h2>
                                <p>Never worry about getting a toll ticket again.</p>
                            </div>
                        </div>
                        <div>
                            <img src={rightpanel} className="leftpanelH" />
                        </div>
                    </div>
                    <div className="d-flex mt-5">
                        <div className="me-4">
                            <img src={leftpanel} className="leftpanelH" />
                        </div>
                        <div className="margBelow">
                            <h2>Transact on the go</h2>
                            <p>Stay on top of your business with our easy-to-use app</p>
                            <div className="d-flex">
                                <div className="me-4">
                                    <img src={appstore} />
                                </div>
                                <div>
                                    <img src={googleplay} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="m-5">
                <SendFund />
            </section>
        </>
    )
}

export default Individual;