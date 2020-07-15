import requests
import logging;
logging.debug("testing")

headers = {
    'user-agent': 'my-app/0.0.1'}
payload = {
    "x": 1593930764890,
}
body = {
    "username": "Hakuna1811",
    "password": "tuantuan",
    "remember": True,
    "d": "0.f9bx7fv1pd80.09epen47u60.o6s7lgu7zl",
    "lang": "en"
}

loginResponse = requests.post(
    "https://playorna.com/api/signin/?x=1593930764890", params=payload, data=body)

loginResponseJson = loginResponse.json()
