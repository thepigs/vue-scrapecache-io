cd ..\frontend
call npm run build
cd ..\backend
xcopy /q /s ..\frontend\dist public
az webapp up --sku F1 --name facescrape --os-type Linux


