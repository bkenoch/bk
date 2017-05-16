# xlsx

# 要匯入前，檔案的準備
1. 將要匯入的檔案皆為excel檔案
2. 匯入時以console命令執行，副檔名要為.xlsx，一個檔案只有一個工作表。
3. 將檔案放置在xlsx-import-files資夾


# 檔案規格
帳務檔案，要匯入的欄位，如下：
| 項目 | 帳務日期 | 借方 | 金額 | 貸方 | 金額 | 備註 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 費用 | 1060101 | 工讀費 | 100 | 現金 | 100 | 工讀生費用 |


# 切換路徑
切換到xlsx路徑位置
```node

cd xlsx

```

# 匯入指令

```node

node xlsx.js 要匯入的檔案名稱.xlsx

```

# More Infos
[常用會計科目表] (http://web.cjcu.edu.tw/~vicky/acc/table1.pdf)


