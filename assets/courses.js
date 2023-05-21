const courses = [
  {
    id: "0",
    title: "Phishing",
    cover: require('./covers/phishing.png'),
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
      },
      {
        text: "Which of the following is an example of phishing?",
        options: [
          "Using strong passwords to protect your accounts",
          "Installing antivirus software on your computer",
          "An email claiming to be from a bank, asking for your login credentials",
          "Monitoring network traffic for suspicious activities"
        ],
        answer: 2
      },
      {
        text: "How can you identify a phishing email?",
        options: [
          "By checking the email sender's address and verifying it is legitimate",
          "By opening all attachments and links in the email to confirm their content",
          "By providing personal and financial information as requested",
          "By ignoring any warnings or suspicious signs in the email"
        ],
        answer: 0
      },
      {
        text: "What is the purpose of a phishing attack?",
        options: [
          "To test the security of a network",
          "To encrypt data during transmission",
          "To detect and remove malware from a computer",
          "To trick individuals into revealing sensitive information, such as passwords or credit card details"
        ],
        answer: 3
      },
      {
        text: "What is spear phishing?",
        options: [
          "A type of fishing activity done in rivers or lakes",
          "A targeted phishing attack that focuses on a specific individual or group",
          "A method of encrypting sensitive data for secure transmission",
          "A security mechanism that detects and prevents phishing attacks"
        ],
        answer: 1
      }
    ]
  },
  {
    id: "1",
    title: "Passwords",
    cover: require('./covers/passwords.jpg'),
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
      },
      {
        text: "What is a passphrase?",
        options: [
          "A long and complex password made up of random characters",
          "A combination of words or a sentence used as a password",
          "A secret code sent via SMS for authentication",
          "A backup method to recover forgotten passwords"
        ],
        answer: 1
      },
      {
        text: "Why is it important to avoid using common dictionary words in passwords?",
        options: [
          "Because they are easily guessable by attackers",
          "Because they are difficult to remember",
          "Because they are not supported by all password managers",
          "Because they can be compromised by encryption algorithms"
        ],
        answer: 0
      },
      {
        text: "What is multi-factor authentication (MFA)?",
        options: [
          "A security measure that requires multiple passwords for authentication",
          "A method of using different passwords for different accounts",
          "An approach that combines passwords with additional verification factors",
          "A technique to create strong passwords"
        ],
        answer: 2
      }
    ]
  },
  {
    id: "2",
    title: "Antivirus",
    cover: require('./covers/antivirus.jpg'),
    category: "Intermediate",
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
      },
      {
        text: "What is the purpose of quarantine in antivirus software?",
        options: [
          "To isolate and contain infected files to prevent them from causing harm",
          "To permanently delete all detected threats from the computer",
          "To monitor network traffic and identify potential threats",
          "To improve the performance and speed of the computer"
        ],
        answer: 0
      },
      {
        text: "What is heuristic analysis in antivirus software?",
        options: [
          "A method of identifying known malware signatures",
          "Scanning the computer for hidden files and folders",
          "Analyzing file behavior and characteristics to detect potential threats",
          "Monitoring network connections and traffic"
        ],
        answer: 2
      },
      {
        text: "What is the role of automatic updates in antivirus software?",
        options: [
          "To scan the computer for vulnerabilities and apply necessary patches",
          "To generate reports and logs of antivirus activities",
          "To schedule regular system scans and cleanups",
          "To keep the antivirus program and virus definitions up to date"
        ],
        answer: 3
      },
      {
        text: "What is the difference between antivirus software and anti-malware software?",
        options: [
          "There is no difference; they are two terms for the same thing",
          "Antivirus software only protects against viruses, while anti-malware software protects against a broader range of threats",
          "Antivirus software is for personal use, while anti-malware software is for business use",
          "Antivirus software is free, while anti-malware software requires a paid subscription"
        ],
        answer: 1
      },
      {
        text: "What is the purpose of a scheduled scan in antivirus software?",
        options: [
          "To scan the computer for threats at specific times and intervals",
          "To optimize the computer's performance by removing unnecessary files",
          "To monitor the computer's network connections and traffic",
          "To automatically update the antivirus program and virus definitions"
        ],
        answer: 0
      },
      {
        text: "What is the significance of a virus definition database in antivirus software?",
        options: [
          "It contains a list of all the viruses that the software can detect and remove",
          "It is a log of all the antivirus scans performed on the computer",
          "It provides real-time protection against emerging threats",
          "It encrypts sensitive files and folders on the computer"
        ],
        answer: 0
      },
      {
        text: "What is the purpose of a firewall in conjunction with antivirus software?",
        options: [
          "To prevent unauthorized access to the network and filter incoming/outgoing traffic",
          "To scan the computer for viruses and malware",
          "To encrypt sensitive data during transmission",
          "To monitor the computer's system resources and performance"
        ],
        answer: 0
      },
      {
        text: "What is the recommended practice when multiple antivirus software are installed on the same computer?",
        options: [
          "Keep all antivirus software active and running simultaneously for better protection",
          "Disable one antivirus software while using the other to avoid conflicts",
          "Uninstall all antivirus software and use a different security solution",
          "Use a virtual machine to run each antivirus software separately"
        ],
        answer: 1
      }
    ]
  },
  {
    id: "3",
    title: "Firewalls",
    cover: require('./covers/firewalls.jpg'),
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
      },
      {
        text: "What is the difference between a hardware firewall and a software firewall?",
        options: [
          "A hardware firewall is a physical device, while a software firewall is a program running on a computer",
          "A hardware firewall is more secure than a software firewall",
          "A software firewall offers more advanced features than a hardware firewall",
          "There is no significant difference; they both provide the same level of protection"
        ],
        answer: 0
      },
      {
        text: "What is the purpose of a packet-filtering firewall?",
        options: [
          "To examine individual packets of data and determine whether to allow or block them based on predefined rules",
          "To encrypt network traffic to protect it from eavesdropping",
          "To monitor and log network activities for analysis",
          "To prevent unauthorized access to specific applications or services"
        ],
        answer: 0
      },
      {
        text: "What is a DMZ (Demilitarized Zone) in the context of network firewalls?",
        options: [
          "A network segment that acts as a buffer zone between the internal network and the internet",
          "A method of encrypting network traffic to secure it from interception",
          "A protocol used for filtering and forwarding network packets",
          "A hardware device that inspects and filters network traffic"
        ],
        answer: 0
      },
      {
        text: "What is the purpose of an intrusion detection system (IDS) in conjunction with a firewall?",
        options: [
          "To detect and alert on suspicious or malicious activities on the network",
          "To block unauthorized access to the network",
          "To encrypt network traffic for secure communication",
          "To optimize network performance and bandwidth usage"
        ],
        answer: 0
      },
      {
        text: "What is the concept of stateful inspection in a firewall?",
        options: [
          "Tracking the state of network connections and allowing only legitimate traffic based on the established connections",
          "Encrypting network traffic using strong encryption algorithms",
          "Monitoring network performance and bandwidth usage",
          "Filtering network packets based on their source and destination IP addresses"
        ],
        answer: 0
      },
      {
        text: "What is the purpose of a proxy firewall?",
        options: [
          "Acting as an intermediary between internal and external networks to filter and forward network traffic",
          "Inspecting individual packets of data and determining whether to allow or block them",
          "Encrypting network traffic for secure communication",
          "Detecting and removing malware from network traffic"
        ],
        answer: 0
      },
      {
        text: "What is network address translation (NAT) in the context of firewalls?",
        options: [
          "A technique that maps internal private IP addresses to a public IP address to allow communication with the internet",
          "A protocol used to authenticate and authorize network connections",
          "A method of filtering network traffic based on port numbers",
          "A technology that encrypts network traffic for secure communication"
        ],
        answer: 0
      }
    ]
  },
  {
    id: "4",
    title: "VPN",
    cover: require('./covers/vpn.jpg'),
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
      },
      {
        text: "What is the purpose of a VPN?",
        options: [
          "To create a secure and private connection over a public network, such as the internet",
          "To block access to certain websites or online services",
          "To optimize internet speed and performance",
          "To monitor and log internet activities for analysis"
        ],
        answer: 0
      },
      {
        text: "How does a VPN provide enhanced security?",
        options: [
          "By encrypting the internet traffic between the user's device and the VPN server",
          "By blocking all incoming and outgoing network connections",
          "By scanning and removing malware from the user's device",
          "By isolating the user's device from other devices on the network"
        ],
        answer: 0
      },
      {
        text: "What is the difference between a remote-access VPN and a site-to-site VPN?",
        options: [
          "A remote-access VPN allows individual users to connect to a private network from a remote location, while a site-to-site VPN connects entire networks together",
          "A remote-access VPN is only used for personal purposes, while a site-to-site VPN is used by businesses",
          "A remote-access VPN provides stronger encryption than a site-to-site VPN",
          "A remote-access VPN requires dedicated hardware, while a site-to-site VPN is software-based"
        ],
        answer: 0
      },
      {
        text: "Which protocol is commonly used for establishing VPN connections?",
        options: [
          "OpenVPN",
          "SSH",
          "FTP",
          "SMTP"
        ],
        answer: 0
      },
      {
        text: "What is the purpose of VPN tunneling?",
        options: [
          "To encapsulate and encrypt the user's data within a secure tunnel for transmission over a public network",
          "To establish a direct physical connection between the user's device and the VPN server",
          "To compress the user's data to optimize bandwidth usage",
          "To scan the user's data for malware before transmission"
        ],
        answer: 0
      },
      {
        text: "Can a VPN hide the user's IP address?",
        options: [
          "Yes, a VPN masks the user's IP address and replaces it with the IP address of the VPN server",
          "No, a VPN does not affect the user's IP address",
          "A VPN can only hide the user's IP address if the user manually configures it to do so",
          "A VPN can hide the user's IP address only on certain websites or services"
        ],
        answer: 0
      }
    ]
  },
  {
    id: "5",
    title: "Social Engineering",
    cover: require('./covers/social_engineering.png'),
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
      },
      {
        text: "What is the term for a social engineering technique where the attacker sends a message from a trusted source to deceive the recipient?",
        options: [
          "Spoofing",
          "Tailgating",
          "Baiting",
          "Whaling"
        ],
        answer: 0
      },
      {
        text: "Which of the following is a psychological manipulation technique commonly used in social engineering?",
        options: [
          "Mirroring",
          "Port scanning",
          "Rooting",
          "Denial of Service (DoS)"
        ],
        answer: 0
      },
      {
        text: "What is the main goal of a social engineering attack?",
        options: [
          "To deceive and manipulate individuals to gain unauthorized access or information",
          "To disrupt computer networks and systems",
          "To steal physical assets",
          "To encrypt data for ransom"
        ],
        answer: 0
      },
      {
        text: "What is the purpose of pre-textual interviews in social engineering?",
        options: [
          "To gather information about a target's habits, interests, and preferences",
          "To establish rapport and gain the target's trust",
          "To identify vulnerabilities in the target's security measures",
          "To create a cover story for the social engineer's activities"
        ],
        answer: 1
      },
      {
        text: "Which social engineering technique involves manipulating individuals to perform certain actions without their knowledge?",
        options: [
          "Phishing",
          "Tailgating",
          "Impersonation",
          "Clickjacking"
        ],
        answer: 3
      },
      {
        text: "What is the primary defense against social engineering attacks?",
        options: [
          "Education and awareness",
          "Strong encryption algorithms",
          "Intrusion detection systems",
          "Physical access controls"
        ],
        answer: 0
      }
    ]
  },
  {
    id: "6",
    title: "Two-Factor Auth",
    cover: require('./covers/2fa.jpg'),
    category: "Intermediate",
    questions: [
      {
        text: "What is the purpose of two-factor authentication (2FA)?",
        options: [
          "To provide an additional layer of security beyond just a password",
          "To encrypt data during transmission",
          "To monitor network traffic",
          "To prevent physical damage to the computer"
        ],
        answer: 0
      },
      {
        text: "Which of the following is an example of a second factor in 2FA?",
        options: [
          "Security questions",
          "One-time password (OTP)",
          "Username",
          "Biometric fingerprint"
        ],
        answer: 1
      },
      {
        text: "What is the primary purpose of the second factor in 2FA?",
        options: [
          "To verify the user's identity",
          "To establish an encrypted connection",
          "To monitor network traffic",
          "To prevent physical damage to the computer"
        ],
        answer: 0
      },
      {
        text: "Which of the following is a common method used for delivering one-time passwords (OTPs) in 2FA?",
        options: [
          "Text message (SMS)",
          "Email",
          "Physical token",
          "All of the above"
        ],
        answer: 3
      },
      {
        text: "What is the benefit of using biometric authentication as a second factor in 2FA?",
        options: [
          "It provides a unique and personalized identifier for each user",
          "It is easy to remember and doesn't require additional devices",
          "It is resistant to phishing attacks",
          "It can be easily shared among multiple users"
        ],
        answer: 0
      },
      {
        text: "Which of the following is a potential drawback of using SMS-based 2FA?",
        options: [
          "Dependency on a stable cellular network",
          "Limited availability on certain devices",
          "Risk of interception or SIM swapping",
          "All of the above"
        ],
        answer: 3
      },
      {
        text: "What is the recommended best practice for setting up backup options for 2FA?",
        options: [
          "Using multiple backup options in case one fails",
          "Avoiding backup options to maintain security",
          "Sharing backup options with trusted individuals",
          "Using backup options only for emergency situations"
        ],
        answer: 0
      }
    ]
  },
  {
    id: "7",
    title: "Data Encryption",
    cover: require('./covers/encryption.jpg'),
    category: "Intermediate",
    questions: [
      {
        text: "What is data encryption?",
        options: [
          "The process of converting data into a secure code to prevent unauthorized access",
          "The process of backing up data to an external storage device",
          "The process of compressing data to save storage space",
          "The process of categorizing and organizing data"
        ],
        answer: 0
      },
      {
        text: "Which of the following is a commonly used encryption algorithm?",
        options: [
          "AES (Advanced Encryption Standard)",
          "HTTP (Hypertext Transfer Protocol)",
          "UDP (User Datagram Protocol)",
          "HTML (Hypertext Markup Language)"
        ],
        answer: 0
      },
      {
        text: "What is the key used in data encryption?",
        options: [
          "A secret code or password",
          "The name of the encrypted file",
          "The type of encryption algorithm",
          "The size of the encrypted data"
        ],
        answer: 0
      },
      {
        text: "What is the difference between symmetric and asymmetric encryption?",
        options: [
          "Symmetric encryption uses the same key for both encryption and decryption, while asymmetric encryption uses different keys",
          "Symmetric encryption is faster than asymmetric encryption",
          "Symmetric encryption is more secure than asymmetric encryption",
          "Symmetric encryption is used for data at rest, while asymmetric encryption is used for data in transit"
        ],
        answer: 0
      },
      {
        text: "What is the role of a cryptographic key management system?",
        options: [
          "To securely generate, store, and distribute encryption keys",
          "To analyze encrypted data for patterns and vulnerabilities",
          "To encrypt and decrypt data in real-time",
          "To compress and decompress encrypted data"
        ],
        answer: 0
      },
      {
        text: "What is the purpose of a digital signature in data encryption?",
        options: [
          "To verify the authenticity and integrity of the encrypted data",
          "To encrypt the data during transmission",
          "To securely store the encrypted data",
          "To compress the encrypted data"
        ],
        answer: 0
      },
      {
        text: "What is end-to-end encryption?",
        options: [
          "A method of encrypting data in such a way that it can only be decrypted by the intended recipient",
          "A method of encrypting data during transmission between two endpoints",
          "A method of encrypting data at rest on a storage device",
          "A method of encrypting data using multiple encryption algorithms"
        ],
        answer: 0
      }
    ]
  },
  {
    id: "8",
    title: "Network Security",
    cover: require('./covers/networks.jpg'),
    category: "Intermediate",
    questions: [
      {
        text: "What is a firewall?",
        options: [
          "A security device that monitors and filters network traffic",
          "A physical barrier that prevents unauthorized access to a network",
          "A software application used for encrypting data",
          "A tool used to detect and remove malware from a network"
        ],
        answer: 0
      },
      {
        text: "What is a DMZ (Demilitarized Zone) in network security?",
        options: [
          "A network segment that acts as a buffer between the internal network and the external network",
          "A secure tunnel used for remote access to a network",
          "A protocol used for secure file transfer",
          "A cryptographic key used for encrypting network traffic"
        ],
        answer: 0
      },
      {
        text: "What is the purpose of network segmentation?",
        options: [
          "To divide a network into smaller subnetworks to improve security and performance",
          "To connect two separate networks and establish secure communication",
          "To scan the network for vulnerabilities and potential threats",
          "To monitor network traffic and detect malicious activities"
        ],
        answer: 0
      },
      {
        text: "What is the difference between a vulnerability assessment and a penetration test?",
        options: [
          "A vulnerability assessment identifies weaknesses in a network, while a penetration test attempts to exploit those weaknesses",
          "A vulnerability assessment focuses on physical security, while a penetration test focuses on network security",
          "A vulnerability assessment is conducted internally, while a penetration test is conducted by external security experts",
          "A vulnerability assessment is a manual process, while a penetration test is an automated process"
        ],
        answer: 0
      },
      {
        text: "What is the purpose of an intrusion detection system (IDS)?",
        options: [
          "To monitor network traffic and detect unauthorized access or malicious activities",
          "To encrypt sensitive data during transmission",
          "To prevent denial-of-service (DoS) attacks",
          "To authenticate users and control access to a network"
        ],
        answer: 0
      },
      {
        text: "What is the concept of least privilege in network security?",
        options: [
          "Granting users the minimum level of access necessary to perform their job functions",
          "Using multiple layers of security controls to protect a network",
          "Regularly updating network security policies and procedures",
          "Implementing strong encryption algorithms for network communication"
        ],
        answer: 0
      },
      {
        text: "What is the purpose of network monitoring?",
        options: [
          "To track network performance, detect anomalies, and troubleshoot issues",
          "To physically secure network devices and infrastructure",
          "To encrypt network traffic for secure communication",
          "To authenticate users and control access to network resources"
        ],
        answer: 0
      }
    ]
  },
  {
    id: "9",
    title: "Basics",
    cover: require('./covers/basics.jpg'),
    category: "Beginner",
    questions: [
      {
        text: "What is IT security?",
        options: [
          "The practice of protecting computer systems and data from unauthorized access or damage",
          "The process of developing software applications",
          "The study of computer programming languages",
          "The management of computer networks and servers"
        ],
        answer: 0
      },
      {
        text: "What is a virus in the context of IT security?",
        options: [
          "A malicious software program that can replicate itself and infect other files or systems",
          "A type of hardware used for data storage",
          "A network device that connects computers together",
          "A technique used to encrypt sensitive data"
        ],
        answer: 0
      },
      {
        text: "What is a password?",
        options: [
          "A physical device used for user identification",
          "A type of encryption algorithm",
          "A software program for accessing the internet",
          "A secret combination of characters used to authenticate a user's identity"
        ],
        answer: 3
      },
      {
        text: "What is phishing?",
        options: [
          "A technique used to protect data from unauthorized access",
          "A method used by attackers to deceive individuals into revealing sensitive information",
          "A process of encrypting network traffic",
          "A type of computer virus"
        ],
        answer: 1
      },
      {
        text: "What is the purpose of regular software updates?",
        options: [
          "To encrypt data during transmission",
          "To patch security vulnerabilities and improve software performance",
          "To back up important files and folders",
          "To monitor network traffic for malicious activities"
        ],
        answer: 1
      },
      {
        text: "What is data backup?",
        options: [
          "The process of scanning files for malware",
          "The practice of securing physical access to computer systems",
          "The process of creating copies of important data to prevent data loss",
          "The process of encrypting data for secure transmission"
        ],
        answer: 2
      },
      {
        text: "What is a firewall?",
        options: [
          "A security device that monitors and filters network traffic",
          "A physical barrier that prevents unauthorized access to a network",
          "A software application used for encrypting data",
          "A tool used to detect and remove malware from a network"
        ],
        answer: 0
      },
      {
        text: "What is the purpose of antivirus software?",
        options: [
          "To optimize computer performance",
          "To prevent physical damage to the computer",
          "To enhance network connectivity",
          "To protect against malware and viruses",
        ],
        answer: 3
      },
      {
        text: "What is social engineering?",
        options: [
          "The manipulation of individuals to gain confidential information or perform certain actions",
          "The process of encrypting sensitive data",
          "The practice of securing wireless network connections",
          "The study of social interactions in online communities"
        ],
        answer: 0
      },
      {
        text: "What is two-factor authentication (2FA)?",
        options: [
          "A method of encrypting network traffic",
          "A process of scanning files for malware",
          "A security measure that requires two forms of verification to access an account",
          "A technique used to prevent physical damage to computer systems"
        ],
        answer: 2
      }
    ]
  },
];


export default courses;