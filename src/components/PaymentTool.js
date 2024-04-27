import EMI from '../image/EMI.png';
import money from '../image/money.png';
import security from '../image/security.png';

const PaymentTool = () => {
    return (
        <>
            <div className="text-center">
                <h2 className="headingText">Payments tools designed for you</h2>
                <p className="subText">Explore payment features that provides you with every possible solution</p>
                </div>
                <div className="d-flex justify-content-between mt-4">
                <div className="card py-5 px-2">
                    <div className="card-body">
                        <img src={money} />
                        <h5 className="card-title mt-4">User Friendly</h5>
                        <p className="card-text">Highly responsive and easy to navigate</p>
                    </div>
                </div>
                <div className="card py-5 px-2">
                    <div className="card-body">
                        <img src={security} />
                        <h5 className="card-title mt-4">Secure</h5>
                        <p className="card-text">Your data is secure. It is continuously monitored, audited, and stored in an encrypted form.</p>
                    </div>
                </div>
                <div className="card py-5 px-2">
                    <div className="card-body">
                        <img src={EMI} />
                        <h5 className="card-title mt-4">Fast</h5>
                        <p className="card-text">Transacting takes only a few seconds - it's convenient and safe.</p>
                    </div>
                </div>
            </div>
        </>
        )
}

export default PaymentTool;