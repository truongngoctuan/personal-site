docker build --tag tuantruongngoc/poc-crawler-currency:v1.0.0 .
docker push tuantruongngoc/poc-crawler-currency:v1.0.0

docker run -p 8080:80 -it tuantruongngoc/poc-crawler-currency:v1.0.0

# az account list-locations -o table
az group create --name poc-crawler-currency --location southeastasia
az storage account create --name poccrawlercurrency --location southeastasia --resource-group poc-crawler-currency --sku Standard_LRS
az functionapp plan create --resource-group poc-crawler-currency --name poccrawlercurrency --location southeastasia --number-of-workers 1 --sku EP1 --is-linux
az functionapp create --name poc-crawler-currency --storage-account  poccrawlercurrency  --resource-group poc-crawler-currency --plan poccrawlercurrency --deployment-container-image-name tuantruongngoc/poc-crawler-currency:v1.0.0 --functions-version 2
# az functionapp appsettings set

az functionapp cors show --resource-group poc-crawler-currency --name poc-crawler-currency
az functionapp cors add --allowed-iiiorigins http://localhost:8000 https://truongngoctuan.github.io --resource-group poc-crawler-currency --name poc-crawler-currency
