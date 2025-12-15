import { useState } from 'react';

const EnrolmentForm = () => {
    const [formData, setFormData] = useState({
        parentName: '',
        phone: '',
        email: '',
        campus: '',
        childName: '',
        childAge: '',
        comments: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true);
        }, 500);
    };

    if (submitted) {
        return (
            <div className="glass-card text-center" style={{ padding: '3rem', borderColor: 'var(--accent)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h2 style={{ color: 'var(--accent)', marginBottom: '1rem' }}>Application Received!</h2>
                <p style={{ color: 'var(--text-main)' }}>
                    Thank you, <strong>{formData.parentName}</strong>. We have received your enrolment request for {formData.childName}.
                    We will contact you shortly at {formData.email}.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-outline" style={{ marginTop: '2rem' }}>Submit Another</button>
            </div>
        );
    }

    const inputStyle = {
        width: '100%',
        padding: '0.8rem 1rem',
        borderRadius: 'var(--radius-md)',
        border: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(0,0,0,0.2)',
        color: 'white',
        outline: 'none',
        fontSize: '1rem',
        marginBottom: '1rem'
    };

    const labelStyle = {
        display: 'block',
        color: 'var(--text-muted)',
        marginBottom: '0.5rem',
        fontSize: '0.9rem',
        fontWeight: '600'
    };

    return (
        <div className="glass-card">
            <h2 style={{ marginBottom: '1.5rem', color: 'white', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>Student Enrolment Form</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={labelStyle}>Parent/Guardian Name</label>
                        <input required type="text" name="parentName" value={formData.parentName} onChange={handleChange} style={inputStyle} placeholder="John Doe" />
                    </div>
                    <div>
                        <label style={labelStyle}>Contact Number</label>
                        <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="+61 4..." />
                    </div>
                </div>

                <div>
                    <label style={labelStyle}>Email Address</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} placeholder="john@example.com" />
                </div>

                <div>
                    <label style={labelStyle}>Preferred Campus</label>
                    <select required name="campus" value={formData.campus} onChange={handleChange} style={{ ...inputStyle, appearance: 'none' }}>
                        <option value="" disabled>Select a location...</option>
                        <option value="Berwick">Berwick</option>
                        <option value="Clayton">Clayton</option>
                        <option value="Cranbourne">Cranbourne</option>
                        <option value="Dandenong">Dandenong</option>
                        <option value="East Burwood">East Burwood</option>
                        <option value="Pakenham">Pakenham</option>
                        <option value="South Morang">South Morang</option>
                        <option value="Online">Online</option>
                    </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1rem' }}>
                    <div>
                        <label style={labelStyle}>Child's Full Name</label>
                        <input required type="text" name="childName" value={formData.childName} onChange={handleChange} style={inputStyle} placeholder="Child's Name" />
                    </div>
                    <div>
                        <label style={labelStyle}>Child's Age</label>
                        <input required type="number" name="childAge" value={formData.childAge} onChange={handleChange} style={inputStyle} placeholder="Age" />
                    </div>
                </div>

                <div>
                    <label style={labelStyle}>Additional Comments / Questions</label>
                    <textarea name="comments" value={formData.comments} onChange={handleChange} style={{ ...inputStyle, height: '100px', resize: 'vertical' }} placeholder="Any specific requirements..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default EnrolmentForm;
