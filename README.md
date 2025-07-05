Git commands:

### 🚀 **Steps to push your code to GitHub for the first time**

#### ✅ 1️⃣ Open your project folder in VS Code

Open a terminal in VS Code (``Ctrl + ` ``).

---

#### ✅ 2️⃣ Initialize git (if not done already)

```bash
git init
```

This makes your folder a Git repository.

---

#### ✅ 3️⃣ Add all files to staging

```bash
git add .
```

or to add specific files:

```bash
git add filename
```

---

#### ✅ 4️⃣ Commit the files

```bash
git commit -m "Initial commit"
```

---

#### ✅ 5️⃣ Link your local repo to GitHub

Copy your GitHub repo URL (HTTPS or SSH). Example (HTTPS):

```
https://github.com/yourusername/your-repo-name.git
```

Then in terminal:

```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
```

---

#### ✅ 6️⃣ Push your code

```bash
git branch -M main
git push -u origin main
```

👉 The `-u` flag sets upstream, so next time you can just do `git push`.

---

#### 🚩 First time on this machine? You may need to configure git:

```bash
git config --global user.name "Your Name"
git config --global user.email "youremail@example.com"
```
git push -u origin branch_1

- create-react-app netflix-gpt

- Set up Tailwind
https://v3.tailwindcss.com/docs/guides/create-react-app
