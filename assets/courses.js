const courses = [
  {
    id: "0",
    title: "Phishing",
    cover: "https://picsum.photos/seed/Phishing/100",
    category: "Beginner",
    questions: [
      {
        text: "What is a common method used in social engineering attacks?",
        options: [
          "Phishing",
          "Encryption",
          "Firewall",
          "Intrusion Detection System"
        ],
        answer: 0
      }
    ]
  },
  {
    id: "1",
    title: "Passwords",
    cover: "https://picsum.photos/seed/Passwords/100",
    category: "Beginner",
    questions: [
      {
        text: "What is the recommended minimum length for a strong password?",
        options: [
          "4 characters",
          "8 characters",
          "12 characters",
          "16 characters"
        ],
        answer: 1
      },
      {
        text: "Which of the following is NOT a recommended practice for password security?",
        options: [
          "Using the same password for multiple accounts",
          "Using a combination of letters, numbers, and symbols",
          "Regularly changing passwords",
          "Avoiding common dictionary words"
        ],
        answer: 0
      }
    ]
  },
  {
    id: "2",
    title: "Antivirus",
    cover: "https://picsum.photos/seed/Antivirus/100",
    category: "Beginner",
    questions: [
      {
        text: "What is the main purpose of antivirus software?",
        options: [
          "Protecting against malware and viruses",
          "Preventing physical damage to the computer",
          "Ensuring network connectivity",
          "Enhancing computer performance"
        ],
        answer: 0
      },
      {
        text: "What is real-time scanning in antivirus software?",
        options: [
          "Scanning the computer only when requested by the user",
          "Scanning the computer at regular intervals",
          "Scanning files when they are accessed or modified",
          "Scanning the computer during startup"
        ],
        answer: 2
      }
    ]
  },
  {
    id: "3",
    title: "Firewalls",
    cover: "https://picsum.photos/seed/Firewalls/100",
    category: "Expert",
    questions: [
      {
        text: "What is the primary function of a firewall?",
        options: [
          "Preventing unauthorized access to a network",
          "Encrypting network traffic",
          "Detecting and removing malware",
          "Monitoring network performance"
        ],
        answer: 0
      },
      {
        text: "Which of the following types of firewall operates at the application layer of the OSI model?",
        options: [
          "Packet-filtering firewall",
          "Stateful inspection firewall",
          "Proxy firewall",
          "Network address translation (NAT) firewall"
        ],
        answer: 2
      }
    ]
  },
  {
    id: "4",
    title: "VPN",
    cover: "https://picsum.photos/seed/VPN/100",
    category: "Expert",
    questions: [
      {
        text: "What does VPN stand for?",
        options: [
          "Virtual Personal Network",
          "Virtual Private Network",
          "Verified Private Network",
          "Vulnerable Personal Network"
        ],
        answer: 1
      },
      {
        text: "Which of the following is NOT a benefit of using a VPN?",
        options: [
          "Enhanced security and privacy",
          "Anonymized online activities",
          "Faster internet connection speed",
          "Access to geo-restricted content"
        ],
        answer: 2
      }
    ]
  },
  {
    id: "5",
    title: "Social Engineering",
    cover: "https://picsum.photos/seed/Social Engineering/100",
    category: "Expert",
    questions: [
      {
        text: "What is pretexting in the context of social engineering?",
        options: [
          "Creating a false sense of urgency or importance to manipulate a target",
          "Impersonating a legitimate individual or entity to gain information",
          "Misleading individuals to reveal sensitive information willingly",
          "Exploiting trust or authority to deceive targets"
        ],
        answer: 1
      },
      {
        text: "Which of the following is an example of a social engineering attack?",
        options: [
          "Distributed Denial of Service (DDoS) attack",
          "Brute-force password cracking",
          "Phishing email impersonating a bank",
          "SQL injection"
        ],
        answer: 2
      }
    ]
  },
];


export default courses;