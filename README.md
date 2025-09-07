## Lệnh build code
```
npm run build
```

## Create repo github

## Đẩy code lên git
```git init
git remote add origin https://github.com/<username>/<tên-repo>.git
git add .
git commit -m "First commit"
git branch -M main
git push -u origin main
```

## Cài thư viên gh-pages để deploy
```
npm install gh-pages --save-dev
```

## Cấu hình: Mở file package.json, thêm
```
"homepage": "https://<username>.github.io/<tên-repo>",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

## Deploy GH-Pages
```
npm run deploy (xem cấu hình trong package.json)
```

## Truy cập website
```
https://<username>.github.io/<tên-repo>/
```