// This file holds all your quiz questions.
// You can edit the text or add new sections here without touching index.html.

var quizSections = [
    {
        title: "Section 1: Importance & Process of Accounting",
        summary: `
        Accounting involves <strong>Identifying</strong> business transactions, <strong>Recording</strong> them systematically,
        and <strong>Communicating</strong> the information through financial reports. These reports help users make
        informed business decisions.
        `,
        questions: [
            // Multiple Choice
            {
                question: "1. Which step in the accounting process involves preparing reports for users?",
                options: { a: "Identifying", b: "Recording", c: "Communicating" },
                correctAnswer: "c",
                explanation: "Communicating includes preparing and analyzing financial statements."
            },
            {
                question: "2. What is the first step in the accounting process?",
                options: { a: "Recording", b: "Communicating", c: "Identifying" },
                correctAnswer: "c",
                explanation: "We must first determine which events are financially relevant."
            },
            {
                question: "3. Which step involves classifying and summarizing information?",
                options: { a: "Recording", b: "Communicating", c: "Identifying" },
                correctAnswer: "a",
                explanation: "Recording includes classifying and summarizing in journals and ledgers."
            },
            {
                question: "4. Which of the following is part of the communicating step?",
                options: { a: "Prepare financial statements", b: "Select events to record", c: "Classify transactions" },
                correctAnswer: "a",
                explanation: "Communicating means reporting information for users."
            },

            // True or False
            {
                question: "5. True or False: Identifying transactions occurs after recording.",
                options: { a: "True", b: "False" },
                correctAnswer: "b",
                explanation: "Identifying must occur first in the accounting cycle."
            },
            {
                question: "6. True or False: Communicating helps users evaluate business performance.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "Reports communicate financial performance to users."
            },
            {
                question: "7. True or False: Every event that occurs in a business is recorded.",
                options: { a: "True", b: "False" },
                correctAnswer: "b",
                explanation: "Only financially relevant events are recorded."
            }
        ]
    },

    {
        title: "Section 2: Users & Job Opportunities",
        summary: `
        <strong>External Users</strong> (such as lenders, shareholders, government agencies, and customers) use financial accounting reports.
        <strong>Internal Users</strong> (such as managers and budget officers) use managerial accounting to make decisions.
        Accounting careers include auditing, taxation, financial advising, and consulting.
        `,
        questions: [
            // MCQ
            {
                question: "8. Which of the following is an internal user?",
                options: { a: "Shareholder", b: "Manager", c: "Lender" },
                correctAnswer: "b",
                explanation: "Managers work inside the company."
            },
            {
                question: "9. Which user is mainly interested in evaluating creditworthiness?",
                options: { a: "Lenders", b: "Customers", c: "Managers" },
                correctAnswer: "a",
                explanation: "Lenders must know if the business can repay debts."
            },
            {
                question: "10. Which accounting area is designed for internal use?",
                options: { a: "Managerial Accounting", b: "Financial Accounting", c: "Tax Accounting" },
                correctAnswer: "a",
                explanation: "Managerial accounting focuses on internal planning and control."
            },
            {
                question: "11. Which of the following is a career in accounting?",
                options: { a: "Auditing", b: "Medical Coding", c: "Architecture" },
                correctAnswer: "a",
                explanation: "Auditing is a primary field of accounting profession."
            },

            // True or False
            {
                question: "12. True or False: Shareholders are internal users of accounting information.",
                options: { a: "True", b: "False" },
                correctAnswer: "b",
                explanation: "Shareholders are external users."
            },
            {
                question: "13. True or False: Internal users need accounting information to plan and control operations.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "Managerial accounting helps with internal decisions."
            },
            {
                question: "14. True or False: Government agencies use accounting information to ensure business follows regulations.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "Governments review compliance with tax and legal standards."
            }
        ]
    },

    {
        title: "Section 3: Ethics & GAAP",
        summary: `
        Ethics ensures fairness and honesty in accounting.
        <strong>GAAP</strong> provides rules that make financial statements relevant, reliable, and comparable.
        <strong>SEC</strong> oversees public company reporting, <strong>FASB</strong> issues U.S. standards, <strong>IASB</strong> issues IFRS globally.
        `,
        questions: [
            // MCQ
            {
                question: "15. Which organization issues IFRS?",
                options: { a: "FASB", b: "SEC", c: "IASB" },
                correctAnswer: "c",
                explanation: "IASB issues the global accounting standards IFRS."
            },
            {
                question: "16. GAAP ensures that information is:",
                options: { a: "Random and inconsistent", b: "Relevant and reliable", c: "Secret and private" },
                correctAnswer: "b",
                explanation: "GAAP aims for relevance, reliability, and comparability."
            },
            {
                question: "17. The SEC primarily oversees:",
                options: { a: "Private companies", b: "Public companies", c: "Non-profit organizations" },
                correctAnswer: "b",
                explanation: "SEC regulates companies that sell stock publicly."
            },
            {
                question: "18. Which group sets accounting standards in the U.S.?",
                options: { a: "IASB", b: "FASB", c: "WHO" },
                correctAnswer: "b",
                explanation: "FASB issues U.S.–based accounting standards."
            },

            // True or False
            {
                question: "19. True or False: Ethics in accounting prevents fraud and financial abuse.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "Ethical practice protects financial integrity."
            },
            {
                question: "20. True or False: IFRS is mainly used in the United States.",
                options: { a: "True", b: "False" },
                correctAnswer: "b",
                explanation: "The U.S. uses GAAP instead of IFRS."
            },
            {
                question: "21. True or False: Financial information must be comparable across companies.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "Comparability is a core GAAP principle."
            }
        ]
    },

    {
        title: "Section 4: Principles & Assumptions",
        summary: `
        Key Principles:
        - Cost Principle: Record assets at actual cost.
        - Revenue Recognition: Record revenue when earned.
        - Matching Principle: Match expenses to revenue they generate.
        - Full Disclosure: Report necessary information.
        Assumptions include Business Entity, Monetary Unit, Time Period, and Going-Concern.
        `,
        questions: [
            // MCQ
            {
                question: "22. Which principle states that revenue is recorded when earned?",
                options: { a: "Revenue Recognition", b: "Matching", c: "Cost" },
                correctAnswer: "a",
                explanation: "Revenue is recognized when earning process is complete."
            },
            {
                question: "23. The Matching Principle requires:",
                options: { a: "Recording expenses when paid", b: "Recording expenses with related revenue", c: "Recording only revenue" },
                correctAnswer: "b",
                explanation: "Expenses must be recorded in same period as related revenue."
            },
            {
                question: "24. Under the Business Entity assumption:",
                options: { a: "Business and personal finances are combined", b: "Business is accounted separately", c: "Only cash is recorded" },
                correctAnswer: "b",
                explanation: "Businesses must be accounted separately from owners."
            },
            {
                question: "25. The Going-Concern assumption means:",
                options: { a: "Business will shut down soon", b: "Business will continue to operate", c: "Business records only cash transactions" },
                correctAnswer: "b",
                explanation: "Businesses are assumed to continue unless evidence suggests closure."
            },

            // True or False
            {
                question: "26. True or False: Assets should be recorded at current fair market value under GAAP.",
                options: { a: "True", b: "False" },
                correctAnswer: "b",
                explanation: "Cost Principle requires recording at historical cost."
            },
            {
                question: "27. True or False: Time Period Assumption allows reporting in months, quarters, or years.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "Financial performance is divided into reporting periods."
            },
            {
                question: "28. True or False: Full Disclosure means hiding details to simplify reports.",
                options: { a: "True", b: "False" },
                correctAnswer: "b",
                explanation: "Full Disclosure requires all relevant information be provided."
            }
        ]
    },

    {
        title: "Section 5: Business Forms & SOX",
        summary: `
        Forms of business include Sole Proprietorship, Partnership, and Corporation.
        Corporations provide limited liability and exist as separate legal entities.
        The Sarbanes-Oxley Act (SOX) requires strong internal controls to prevent fraud.
        `,
        questions: [
            // MCQ
            {
                question: "29. Which business form provides limited liability?",
                options: { a: "Sole Proprietorship", b: "Partnership", c: "Corporation" },
                correctAnswer: "c",
                explanation: "Corporations protect owners' personal assets."
            },
            {
                question: "30. Owners of corporations are called:",
                options: { a: "Employees", b: "Shareholders", c: "Directors" },
                correctAnswer: "b",
                explanation: "Shareholders own the corporation."
            },
            {
                question: "31. SOX was passed to:",
                options: { a: "Increase company profits", b: "Reduce fraud and improve controls", c: "Eliminate taxes" },
                correctAnswer: "b",
                explanation: "SOX enforces internal control practices."
            },
            {
                question: "32. Which form of business has unlimited life?",
                options: { a: "Sole Proprietorship", b: "Partnership", c: "Corporation" },
                correctAnswer: "c",
                explanation: "Corporations continue even if ownership changes."
            },

            // True or False
            {
                question: "33. True or False: Sole proprietorships have limited liability.",
                options: { a: "True", b: "False" },
                correctAnswer: "b",
                explanation: "Sole proprietors have unlimited personal liability."
            },
            {
                question: "34. True or False: SOX only applies to publicly traded companies.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "SOX regulates companies that issue stock to the public."
            },
            {
                question: "35. True or False: Corporations are separate legal entities from their owners.",
                options: { a: "True", b: "False" },
                correctAnswer: "a",
                explanation: "This legal separation gives corporations limited liability."
            }
        ]
    }
];
