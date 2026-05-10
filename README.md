# 🎓 Vocain — Electron 데스크탑 앱

영어 단어 학습 앱 Vocain의 Windows 설치파일 빌드 프로젝트입니다.

---

## 📁 프로젝트 구조

```
vocain-package/
├── main.js                    ← Electron 메인 프로세스
├── index.html                 ← Vocain 앱 (vocain_v2.html)
├── assets/
│   ├── icon.png               ← 앱 아이콘
│   └── icon.ico               ← Windows 아이콘
├── package.json               ← 빌드 설정
├── 빌드_실행.bat              ← Windows 1클릭 빌드
└── .github/workflows/build.yml ← GitHub Actions 자동 빌드
```

---

## 🚀 빌드 방법 (3가지 중 택 1)

---

### 방법 1️⃣ — Windows PC에서 직접 빌드 (가장 간단)

**Node.js 설치 필요** → [nodejs.org](https://nodejs.org) (LTS 버전)

1. 이 폴더를 Windows PC에 복사
2. `빌드_실행.bat` 더블클릭
3. 완료 후 `dist\Vocain Setup 1.0.0.exe` 생성됨 ✅

또는 CMD/PowerShell에서 직접:
```cmd
npm install
npm run build
```

---

### 방법 2️⃣ — GitHub Actions (PC 없이 클라우드 자동 빌드)

GitHub 무료 계정만 있으면 됩니다.

1. **GitHub에서 새 Repository 생성** (무료)
   - https://github.com/new

2. **이 폴더 내용을 전부 업로드**
   ```
   main.js, index.html, package.json, assets/, .github/
   ```
   드래그&드롭으로 업로드 가능

3. **Actions 탭 → "Build Vocain Windows Installer" → "Run workflow"** 클릭

4. **완료 후 Artifacts에서 `.exe` 다운로드**
   - Actions → 해당 실행 클릭 → `vocain-windows-installer` 다운로드

> 💡 코드를 push할 때마다 자동으로 빌드됩니다.

---

### 방법 3️⃣ — Docker (개발자용)

```bash
docker run --rm -it \
  -v $(pwd):/project \
  -w /project \
  node:20-windowsservercore \
  sh -c "npm install && npm run build"
```

---

## 💾 데이터 저장 위치

localStorage 데이터는 아래 경로에 영구 저장됩니다:
```
C:\Users\{사용자명}\AppData\Roaming\Vocain\
```
앱을 재설치해도 데이터가 유지됩니다.

---

## 📦 빌드 결과물

| 파일 | 설명 |
|------|------|
| `dist\Vocain Setup 1.0.0.exe` | Windows NSIS 설치파일 |
| `dist\win-unpacked\` | 설치 없이 바로 실행 가능한 폴더 |
