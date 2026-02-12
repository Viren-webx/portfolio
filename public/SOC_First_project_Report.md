# First Project of SOC by HAXCAMP





### 1\. Step to do parse logs



* event\_type (Successful SSH Login, Failed SSH Login, Multiple Failed Authentication Attempts, Connection Without Authentication)
* auth\_success (true/false/null)
* auth\_attempts
* id.orig\_h (source IP)
* id.resp\_h (destination host)



To view count of event\_type (which is higher event happened )



* stats count by event\_type



### 2\. Analysis Failed login attempt



* &nbsp;event\_type="Failed SSH Login" | stats count by id.orig\_h 



-This is create a table that give us View of which IP address do most failed attempt. this method identify who do higher password attempt 



### 3\. Detect Multiple Failed Authentication Attempt 



* event\_type="Multiple Failed Authentication Attempt" | stats count by id.orig\_h id.resp\_h



-To View ip address how many time try password attempt. if single ip address happened multiple failed then is sign of Brute\_force 



### 4\. Track Successful Logins



* &nbsp;event\_type="Successful SSH Login" | stats count by id.orig\_h, id.resp\_h





-This command show us which ip address as been Successful Log to machine



-Create a Dashboard to view direct view a result 



### 5.Spot Suspicious Connections Without Authentication



* index=ssh\_logs event\_type="Connection Without Authentication" | stats count by id.orig\_h



-The connection happened without authentication that mean attack bypassed the security firewall and enter in system





* event\_type="Connection Without Authentication" | timechart count by id.orig\_h



-To view a Time\_Chart of connection without authentication this show us that which Src ip address as make connection show us in time chat format 





### -Conclusion 



I Learn lot of thing by doing this project like



* Built dashboards to monitor SSH activity.



* Identified brute-force login attempts and suspicious access attempts.



* Configured Splunk alerts for high-risk behavior.





