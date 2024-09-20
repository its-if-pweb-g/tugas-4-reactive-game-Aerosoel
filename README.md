<<<<<<< HEAD
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/gzntKPL6)
# Tugas 4 Pemrograman Web Kelas G

`{{!! DILARANG DAN JANGAN PERNAH MEMODIFIKASI ATAUPUN MENGHAPUS FOLDER .github PADA REPOSITORY INI !!}}`

## Cara mengumpulkan tugas

`{{ !! Pastikan sudah ada git di perangkat yang anda gunakan !! }}`

Dari project yang telah anda buat menggunakan perintah dari npm, amda dapat mengumpulkan tugas dengan menggunakan step-by-step berikut:

1. Buka terminal dan arahkan ke folder tempat pengerjaan anda, pastikan sudah ada isinya
2. Masukkan perintah `git init`
3. Masukkan perintah `rm README.md` untuk menghapus readme yang digenerate oleh framework (jika tidak bisa delete secara manual saja)
4. Kemudian masukkan perintah `git add .`
5. Lakukan commit dengan perintah `git commit -m "{{ pesan commit anda }}"`
6. Kemudian ketikkan `git remote add origin {{ your github .git link }}`
7. Setelah itu, ketikkan `git branch -M main`
8. Ketikkan `git fetch` untuk mengambil data branch
9. Ketik perintah berikut `git branch --set-upstream-to=origin/main main`
10. Lakukan pulling dari repository dengan perintah `git pull origin main --rebase`
11. Setelah itu push repository dengan perintah `git push -u origin main`

## Deploying to Vercel

Untuk dapat mendeploy tugas yang telah anda buat, pada repo ini sudah ada `.github/workflows` yang akan otomatis mendeploy ketika anda melakukan commit ke github. Namun sebelum dapat melakukan deploy, ada beberapa hal yang harus dilakukan terlebih dahulu.

### Buat akun di Vercel dan Token

Buatlah akun di Vercel jika belum pernah punya, selanjutnya jika sudah buka akun vercel anda dan akses halaman `account settings` setelah itu klik pada bagian tokens. Buat sebuah token baru dan simpan value dari token tersebut.

### Konfigurasi Project anda ke Vercel

Sekarang buka project yang anda buat di terminal, lalu masukkan perintah berikut: `npm i -g vercel`. Kemudian setelah selesai ketikkan perintah berikut `vercel login` dan pilih cara login ke akun vercel anda. Jika sudah berhasil login, pastikan anda benar berada di direktori project yang anda buat dan ketikkan perintah `vercel link` yang akan membuat sebuah project vercel baru. Tekan enter saja untuk setiap pertanyaan yang ditanyakan.

### Menambahkan secret value ke GitHub

Setelah anda mendapatkan token dari Vercel, buka GitHub, lalu masuk ke halaman `settings` dari project anda. Lalu pada section `security` klik bagian `secrets and variables` dan pilih `actions` Lalu buat baru pada `New repository secret`. Anda perlu membuat 3 variabel secret, yaitu:

1. `VERCEL_TOKEN` yang berisi token yang telah dibuat dari vercel di section [Buat Token](#buat-akun-di-vercel-dan-token)
2. `VERCEL_ORG_ID` yang berisi variabel `orgId` yang dapat anda lihat di folder `./vercel` dan pada file `project.json` pada folder directory project anda.
3. `VERCEL_PROJECT_ID` yang berisi variabel `projectId` yang dapat anda lihat di folder `./vercel` dan pada file `project.json` pada folder directory project anda.

Jika anda sudah menyelesaikan tahap diatas, sekarang anda tinggal melakukan `push` repo anda dan script deployment akan langsung berjalan.
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 7de56a5 (Initialize project using Create React App)
