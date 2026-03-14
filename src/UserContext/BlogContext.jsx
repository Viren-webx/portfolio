import React, { createContext, useContext, useState } from "react";

const BlogContext = createContext();
export const useBlog = () => useContext(BlogContext);

export function BlogProvider({ children }) {
  const [posts] = useState([
    {
      id: 1,
      section: "SSH Log Analysis",
      title: "Detecting SSH Brute-Force and Unauthorized Access: By using splunk",
      img: "/SOC_Failed_Login_Visualization .png",
      sections: [
        {
          heading: "Introduction",
          description: "Comprehensive guide to analyzing SSH logs for security threats",
          points: [
            "Learn SSH log parsing techniques",
            "Identify security threats",
            "Create security dashboards"
          ]
        },
        {
          heading: "Step 1: Parse Logs",
          description: "Define event types and extract key information from SSH logs",
          image: "/SOC_Parse_Logs.png",
          points: [
            "event_type: Successful SSH Login, Failed SSH Login, Multiple Failed Authentication Attempts, Connection Without Authentication",
            "auth_success: true/false/null",
            "auth_attempts: number of attempts",
            "id.orig_h: source IP",
            "id.resp_h: destination host",
            "To view count: stats count by event_type"
          ]
        },
        {
          heading: "Step 2: Analysis Failed Login Attempt",
          description: "Create a table to view which IP address made most failed attempts to identify password attempts",
          image: "/SOC_Failed_Login_attempt.png",
          points: [
            "Use: event_type='Failed SSH Login' | stats count by id.orig_h",
            "Shows which IP address attempted unauthorized access",
            "Identify who made higher password attempts",
            "Helps detect suspicious activity patterns"
          ]
        },
        {
          heading: "Step 3: Detect Multiple Failed Authentication Attempt",
          description: "Spot multiple failed authentication attempts from the same source - a sign of Brute-Force attack",
          image: "/SOC_Multiple_Failed_Authentication.png",
          points: [
            "Use: event_type='Multiple Failed Authentication Attempt' | stats count by id.orig_h id.resp_h",
            "View how many times a single IP tried password attempts",
            "Single IP with multiple failures = sign of Brute-force",
            "Track and block suspicious sources"
          ]
        },
        {
          heading: "Step 4: Track Successful Logins",
          description: "Monitor which IP addresses have successfully logged into the system",
          image: "/SOC_Sucessful_Log_attempt.png",
          points: [
            "Use: event_type='Successful SSH Login' | stats count by id.orig_h, id.resp_h",
            "See which IP addresses successfully accessed machines",
            "Create a Dashboard to view direct results",
            "Monitor authorized access patterns"
          ]
        },
        {
          heading: "Step 5: Spot Suspicious Connections Without Authentication",
          description: "Identify connections that bypassed security firewall without authentication",
          image: "/SOC_Connection_Without_Authentication.png",
          points: [
            "Use: index=ssh_logs event_type='Connection Without Authentication' | stats count by id.orig_h",
            "Connection without authentication = attack bypassed firewall",
            "Use: event_type='Connection Without Authentication' | timechart count by id.orig_h",
            "View Time-Chart showing which source IP made connections"
          ]
        },
        {
          heading: "Conclusion",
          description: "Key learnings from this SOC by HAXCAMP SSH Log Analysis project",
          image: "/SOC_Create_Dashboard .png",
          points: [
            "Built dashboards to monitor SSH activity",
            "Identified brute-force login attempts and suspicious access attempts",
            "Configured Splunk alerts for high-risk behavior",
            "Learned real-time threat detection techniques",
            "Practical experience with security monitoring tools"
          ]
        }
      ]
    },
    {
      id: 2,
      section: "Email Threat Analysis: Detecting Malicious Emails",
      title: "Analyzing Suspicious Emails: Headers, IPs, and Hidden Threats",
      img: "/Gemini_Generated_Image_qoqqr0qoqqr0qoqq.png",
      sections: [
        {
          heading: "Introduction",
          description: "Emails are one of the most common ways attackers try to trick us whether through phishing, spam, or malware. Learning how to analyze a suspicious email can help you detect threats before they reach your inbox. In this blog, I’ll walk you through my step-by-step process using a sample email file, along with tools like VirusTotal and MXToolBox, and even decoding hidden attachments.",         
          points: [
            
          ]
        },
        {
          heading: "Examining the Raw Email File",
          image: "/Raw_file.png",
          description: "The first step is to look at the raw email. Most email clients hide the underlying data, but the raw email shows everything—the headers, the body, and sometimes hidden attachments.",
          points: [
            "Headers: These lines at the top contain information about the sender, recipient, route, and security checks.",
            "Body: The main content of the email—text, images, links.",
            "Attachments or Encoded Content: Often encoded in Base64, these may contain malware."
          ]
        }
        ,
        {
          heading: "Checking the Sender IP on VirusTotal",
          image: "/Checking_Ip_VirusTotal.png",
          description: "Once we have the email headers, we can identify the sender’s IP address from the Received lines. This is crucial because spammers and attackers often use compromised servers.",
          points: [
            "Screenshot placeholder: checking ip virustotal",
            "I copied the sender IP and checked it on VirusTotal. The results tell you if:",
            "The IP is associated with spam or malware distribution",
            "Other users have flagged it as suspicious",
            "This step gives an initial sense of whether the email is safe or dangerous."
          ]
        },
        {
          heading: "Analyzing the Email Header with MXToolBox",
          image: "/Checking_Header_MxToolBox.png",
          description: "Headers contain a lot of useful information, but manually reading them can be confusing. That’s where MXToolBox comes in handy.",
          points: [
            "Screenshot placeholder: checking header MxtoolBox",
            "Trace the email’s route from sender to recipient",
            "Check SPF, DKIM, and DMARC records (these verify if the email is legitimately from the claimed domain)",
            "Spot signs of spoofing or forged emails",
            "For example, if the Return-Path domain doesn’t match the From domain, that’s a strong indicator of a phishing attempt."
          ]
        },
        {
          heading: "Decoding Base64 Attachments",
          image: "/Convert_Base64.png",
          description: "Many malicious emails hide their payload using Base64 encoding. This makes it harder for antivirus software to detect at first glance.",
          points: [
            "Screenshot placeholder: convert base64",
            "Base64 is just a way of encoding data. By decoding it, you can see the actual content.",
            "It could be a harmless image, a document, or a malicious file.",
            "Always scan the decoded file in VirusTotal or a sandbox environment before opening.",
            "This step often reveals the hidden threats that aren’t obvious in the email body."
          ]
        },
        {
          heading: "Key Takeaways",
          description: "Analyzing a suspicious email can be broken down into clear steps:",
          points: [
            "Identify headers vs body: Knowing the structure helps you spot red flags.",
            "Check sender IP: Use VirusTotal to see if the source is known for spam or malware.",
            "Inspect headers with MXToolBox: Verify SPF, DKIM, DMARC, and track the email route.",
            "Decode attachments or hidden content: Base64 often hides malicious payloads.",
            "With these steps, you can safely investigate suspicious emails without opening or executing anything dangerous."
          ]
        }
      ]
    },
   { // Last Update 8 march 2026
  id: 3,
  section: "Mini Firewall Simulator: Blocking Malicious IPs",
  title: "Simulating a Firewall in Python: IP Blocking and Alerts",
  img: "/Firewal_Rule_Using_python.png",
  sections: [
    {
      heading: "Introduction",
      description: "Firewalls are critical in protecting networks from unauthorized access. In this project, I built a Python program that simulates a firewall, checking incoming IP addresses against a predefined set of rules and generating alerts for blocked IPs. This demonstrates basic network security concepts and Python programming skills.",
      points: []
    },
    {
      heading: "Defining Firewall Rules",
      description: "The firewall rules are stored in a Python dictionary, mapping specific IP addresses to actions like 'block' or 'allow'. This allows the program to quickly determine whether an incoming IP should be blocked.",
      points: [
        "Used a Python dictionary to store IP addresses and actions.",
        "Blocked IPs include examples like 192.168.1.1, 192.168.1.5, and 192.168.1.10.",
        "Any IP not in the dictionary is automatically allowed."
      ]
    },
    {
      heading: "Generating Random IP Addresses",
      description: "Random IPs are generated to simulate incoming network traffic, helping test the firewall logic effectively.",
      points: [
        "Used Python's random module to simulate traffic.",
        "Generated IPs range from 192.168.1.1 to 192.168.1.255.",
        "Each IP is checked against the firewall rules to determine the action."
      ]
    },
    {
      heading: "Checking IPs Against the Firewall",
      description: "The program checks each IP against the firewall rules. Blocked IPs trigger an alert, while allowed IPs are printed normally.",
      points: [
        "Implemented a function that returns 'block' or 'allow'.",
        "Blocked IPs generate alerts to simulate security monitoring.",
        "Allowed IPs show normal network traffic."
      ]
    },
    {
      heading: "Simulation Loop",
      description: "A loop simulates multiple incoming IP addresses and applies firewall rules to each, showing how a firewall monitors traffic over time.",
      points: [
        "Looped 20 times to simulate multiple IP addresses.",
        "Alerts are printed for blocked IPs, while allowed IPs display normal access.",
        "Demonstrates practical usage of loops and conditional logic in Python."
      ]
    },
    {
      heading: "Key Takeaways",
      description: "This mini firewall project demonstrates the basics of network security and Python programming:",
      points: [
        "Using dictionaries for fast lookup of firewall rules.",
        "Generating and testing random network traffic.",
        "Implementing logic to block or allow IPs based on rules.",
        "Simulating alerts for blocked IPs to mimic real firewall monitoring."
      ]
    }
  ]
}
    
    
  ]);

  

  const getPost = (id) => posts.find(p => p.id === Number(id));

  return (
    <BlogContext.Provider value={{ posts, getPost }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
