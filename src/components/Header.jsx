const Header = ({steps}) => {
    return (
        <header className="flex shadow">
            <div>Logo</div>
            <div className="flex justify-between">
                <div disabled={!steps.step1}><div>💼</div><div>Account Application</div></div>
                 <div disabled={!steps.step2}><div>👤</div><div>Personal Information</div></div>
                 <div disabled={!steps.step3}><div>✍️</div><div>Sign & Agreement</div></div>
                 <div disabled={!steps.step4}><div>💳</div><div>Fund your account</div></div>
                 <div disabled={!steps.step5}><div>🔒</div><div>Enroll in online banking</div></div>
            </div>
            <ul className="flex justify-between">
                <li>📞</li>
                <li>💬</li>
                <li>🌍</li>
            </ul>
        </header>
    )
}

export default Header;