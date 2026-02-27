import './Page.css';

export function Blog() {
    return (
        <main className="page-content animate-fade-in">
            <h1 className="gradient-text page-title">Bonda Blog</h1>

            <div className="glass-panel page-card text-block">
                <h2>Welcome to Bonda</h2>
                <p>
                    Bonda is your ultimate student AI feedback tool. Whether you need a brutal roast to wake you up or instant motivation to keep you going, we've got you covered in both Malayalam and English.
                </p>

                <h2>Why Bonda?</h2>
                <p>
                    Student life is stressful. Sometimes you need a friend to tell you it's going to be okay. Other times, you need a reality check. Bonda uses advanced AI to analyze your marksheets and give you exactly what you need, with culturally authentic Malayalam language support that avoids robotic translations.
                </p>

                <h2>How to Use Bonda</h2>
                <ul>
                    <li><strong>Upload:</strong> Drop your PDF or image marksheet into the app.</li>
                    <li><strong>Select Tone:</strong> Choose between 'Motivation' or 'Troll'.</li>
                    <li><strong>Select Language:</strong> Choose Malayalam for a native touch, or English.</li>
                    <li><strong>Generate:</strong> Get instant, AI-powered feedback directly on your screen.</li>
                </ul>

                <h2>Built by Uthakkan</h2>
                <p>
                    Bonda is proudly built by Uthakkan. We focus on creating fast, uncompromising digital products that solve complex problems with elegant architecture.
                </p>

                <p className="mt-4 text-center" style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                    Stay tuned for more updates and student tips on our blog!
                </p>
            </div>
        </main>
    );
}
