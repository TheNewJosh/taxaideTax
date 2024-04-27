import { Link } from 'react-router-dom'

const SendFund = () => {
    return (
        <div className="bgwithTab">
            <div className="mb-4 white-text-p">
                <h2>Send funds</h2>
                <h4>Remit taxes</h4>
                <h4>Buy utilities</h4>
            </div>
            <Link className="buttonAreaTab" href="#">Get Started</Link>
        </div>
    )
}

export default SendFund;