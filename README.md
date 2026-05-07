# 🧑‍💻 Nguyen Khanh Duy — Personal Portfolio

> *"Code with passion, lead with purpose, learn with curiosity"*

---

## 📌 Giới thiệu dự án

Portfolio cá nhân của **Nguyễn Khánh Duy** — sinh viên Cao đẳng FPT Polytechnic, sinh năm 2003, đang tìm kiếm vị trí **Frontend Developer Intern**. Đây là nơi thể hiện kỹ năng, dự án và cá tính của bản thân thông qua một sản phẩm web được chăm chút từng chi tiết về UI/UX và animation.

---

## 🎯 Mục tiêu

- Gây ấn tượng với nhà tuyển dụng ngay từ giây đầu tiên qua Hero animation
- Trình bày thông tin rõ ràng, có tổ chức qua từng section
- Thể hiện năng lực FE thực chiến ngay trên chính portfolio
- Tạo trải nghiệm người dùng mượt mà, có chiều sâu

---

## 🖌️ Design Direction

### Aesthetic: **Dark Glass UI**
- **Background:** Nền tối (`#0a0a0f` / `#0d0d14`) — tạo chiều sâu và không gian
- **Glass Effect:** Chỉ dùng cho Card, Navbar, Modal — `backdrop-filter: blur` + border mờ
- **Accent:** Màu xanh cyan điện (`#00d4ff`) kết hợp tím nhạt (`#a78bfa`) — như ánh đèn neon trong đêm
- **Typography:** Display font cá tính + body font sạch, dễ đọc
- **Feeling:** Giống mở iPhone lúc nửa đêm — tối, mịn, sáng đúng chỗ

### UI Components có Glass effect:
- Navbar (sticky, blur khi scroll)
- Project Cards
- Skill Badges
- Contact Form
- CTA Section

---

## ✨ Tính năng chính

### 🎬 Hero Section
- **Nhân vật hoạt hình** chuyển động bằng CSS/SVG animation (hoặc Lottie JSON)
- Text typing effect với vai trò: "Frontend Developer", "Fullstack Learner", "Team Leader"
- Particle hoặc floating orbs background
- Scroll indicator dẫn xuống phần tiếp theo

### 📍 Sticky Navigation
- Navbar sticky với blur glass khi cuộn
- Active state tự động đổi khi scroll tới từng section
- Smooth scroll khi click menu

### 🎭 Scroll Animations (mỗi section khác nhau)
| Section | Animation Style |
|---|---|
| About | Fade in từ trái + text split reveal |
| Skills | Stagger appear từng badge |
| Projects | Card flip / slide in từ dưới |
| Experience | Timeline draw từ trên xuống |
| Contact | Zoom fade in |

### 🖱️ Custom Cursor
- Cursor tùy chỉnh (dot + ring) theo chuột
- Hover effect trên interactive elements

---

## 🛠️ Tech Stack

| Công nghệ | Mục đích |
|---|---|
| React 18 + Vite | Framework chính |
| TypeScript | Type safety |
| Tailwind CSS | Styling utility |
| Framer Motion | Animation library chính |
| GSAP (optional) | Complex timeline animation |
| React Intersection Observer | Scroll-triggered animation |
| Lottie React | Character animation |

---

## 📁 Cấu trúc dự án

```
src/
├── assets/              # Images, icons, videos, fonts, Lottie JSON
├── components/
│   ├── common/          # Button, Container, SectionTitle, MagneticButton
│   ├── layout/          # Header, Navbar, Footer, PageTransition
│   └── animation/       # Reveal, Parallax, CursorFollower, TextSplit
├── sections/            # Hero, About, Skills, Projects, Experience, Contact, CTA
├── hooks/               # useScroll, useMouse, useReveal
├── layouts/             # MainLayout.jsx
├── pages/               # Home.jsx
├── styles/              # globals.css, animations.css, tailwind.css
├── utils/               # constants.js, helpers.js
├── App.tsx
├── main.tsx
└── router.tsx
```

---

## 👤 Thông tin cá nhân

```json
{
  "name": "Nguyen Khanh Duy",
  "born": 2003,
  "location": "Cu Chi, Ho Chi Minh City, Vietnam",
  "school": "FPT Polytechnic College — Web Programming",
  "gpa": "3.79 / 4.0",
  "email": "nguyenkhanhduy23803@gmail.com",
  "phone": "+84 815 934 934",
  "github": "https://github.com/Nkduy23",
  "linkedin": "https://www.linkedin.com/in/khanh-duy-66390a3a1/",
  "target": "Frontend Developer Intern",
  "strengths": ["Frontend", "Backend cơ bản", "Team Leader", "System Architecture thinking"],
  "attitude": "Đang học tập & cải thiện — không ngại nhận task, thích làm full flow"
}
```

---

## 🚀 Projects nổi bật (từ GitHub)

| Project | Mô tả | Stack |
|---|---|---|
| **NhaMayMan-Hanh** | Hệ thống quản lý nhà máy (Frontend + Backend) | TypeScript |
| **ChoCongNghe** | Web marketplace công nghệ | TypeScript |
| **Barber-Queue** | App quản lý hàng chờ tiệm tóc | JavaScript |

---

## 📦 Cài đặt & chạy dự án

```bash
# Clone repo
git clone https://github.com/Nkduy23/portfolio.git
cd portfolio

# Cài dependencies
npm install

# Chạy dev server
npm run dev

# Build production
npm run build
```

---

## 🌐 Deploy

- **Platform:** Vercel (hiện có: `my-profile-taupe-five.vercel.app`)
- Auto-deploy từ nhánh `main`

---

## 📅 Roadmap

- [x] Thiết kế cấu trúc dự án
- [x] Viết README & SKILL planning
- [ ] Setup Vite + React + Tailwind
- [ ] Layout cơ bản + Routing
- [ ] Navbar sticky + active scroll
- [ ] Hero section + character animation
- [ ] About, Skills, Projects sections
- [ ] Experience, Contact, CTA sections
- [ ] Custom cursor + micro interactions
- [ ] Performance optimization
- [ ] Deploy lên Vercel

---

*Portfolio này được xây dựng với ❤️ bởi Nguyen Khanh Duy — 2025*
