# **Beginner Networking Roadmap Using Your Mac mini**

### **Stage 1: Local Network Awareness (Week 1)**

**Goal**: Understand your local network and basic tools

#### **Tasks:**
- [ ] Install [**Homebrew**](https://brew.sh/) if you haven’t already
- [ ] Run basic commands to explore your network:
  - `ipconfig getifaddr en0` – find your Mac’s IP
  - `netstat -rn` – view routing table
  - `arp -a` – see local devices
  - `ping google.com`
  - `traceroute google.com`
- [ ] Use **`nmap`** to scan your network
  ```bash
  brew install nmap
  nmap -sn 192.168.1.0/24
  ```

**What you’ll learn**:
- IP addresses, ARP, ping, DNS, routing basics

---

### **Stage 2: Build a Local Web Server (Week 2)**

**Goal**: Learn about HTTP, web servers, and port forwarding

#### **Tasks:**
- [ ] Install a web server:
  ```bash
  brew install nginx
  sudo nginx
  ```
- [ ] Access it at `http://localhost` or from other devices via your Mac mini’s IP
- [ ] Customize `nginx.conf` to serve a simple HTML page
- [ ] Forward a custom port (e.g., `:8080`) and access it on LAN

**What you’ll learn**:
- HTTP basics, static hosting, port configuration, LAN access

---

### **Stage 3: File Server and Network Sharing (Week 3)**

**Goal**: Serve and access files over the network

#### **Tasks:**
- [ ] Go to **System Settings → General → Sharing**
- [ ] Enable **File Sharing**
- [ ] Share a folder and test access from:
  - Another Mac: Finder → Go → Connect to Server
  - Windows/Linux: SMB access (`\\macmini.local`)
- [ ] Try **SFTP** by enabling **Remote Login (SSH)**

**What you’ll learn**:
- SMB, SFTP, file permissions, user management

---

### **Stage 4: DNS and DHCP Basics with `dnsmasq` (Week 4)**

**Goal**: Simulate DNS and DHCP service

#### **Tasks:**
- [ ] Install dnsmasq:
  ```bash
  brew install dnsmasq
  ```
- [ ] Configure `/usr/local/etc/dnsmasq.conf` to:
  - Serve a static DNS mapping (e.g. `dev.local`)
  - Simulate DHCP server if desired
- [ ] Point other devices' DNS to your Mac mini

**What you’ll learn**:
- DNS resolution, DHCP leases, IP assignment

---

### **Stage 5: Network Monitoring with Wireshark (Week 5)**

**Goal**: Inspect real traffic and understand protocols

#### **Tasks:**
- [ ] Install [Wireshark](https://www.wireshark.org/)
- [ ] Run a capture session (you may need to install CLI tools)
- [ ] Filter for traffic like:
  - `http`
  - `dns`
  - `tcp.port == 80`

**What you’ll learn**:
- Protocol analysis, packet inspection, headers

---

### **Bonus Projects (Ongoing)**
- [ ] **Run Pi-hole** in Docker to block ads across your network
- [ ] **Run a VPN** server using WireGuard or OpenVPN in Docker
- [ ] **Use UTM or VirtualBox** to simulate networks with virtual machines (pfSense, Ubuntu server)
- [ ] **Create an SSH tunnel** to access your Mac mini from outside your network

---

## Tools Summary

| Tool        | Purpose                          |
|-------------|----------------------------------|
| `ping`, `traceroute`, `netstat`, `nmap` | Basic networking tools |
| `nginx`     | Web server                       |
| File Sharing / SFTP | Network file sharing     |
| `dnsmasq`   | DNS + DHCP                       |
| Wireshark   | Traffic analysis                 |
| Docker      | Run services easily              |
| UTM/VirtualBox | Virtual lab setup             |

---
