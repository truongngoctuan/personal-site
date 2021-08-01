import requests
import brotli

loginJson = {
    "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZBOEYzNTkwRDU2MDAyRDAxRDgzQUMyOTJFQjkyN0FENTk2NzFFMDBSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImFvODFrTlZnQXRBZGc2d3BMcmtuclZsbkhnQSJ9.eyJuYmYiOjE2Mjc3MDczODQsImV4cCI6MTYzMDI5OTM4NCwiaXNzIjoiaHR0cHM6Ly93d3cud3V4aWF3b3JsZC5jb20iLCJhdWQiOiJhcGkiLCJjbGllbnRfaWQiOiJleHRlcm5hbCIsInN1YiI6IjA5OTU2Mzc4LTEyMTYtNDc4Yy05NmUzLTM1MGUyYzkyNzNjZiIsImF1dGhfdGltZSI6MTYyNzcwNzM4NCwiaWRwIjoibG9jYWwiLCJuYW1lIjoiSGFrdW5hMTgxMSIsImVtYWlsIjoidG50dWFuMDcxMjQ5NEBnbWFpbC5jb20iLCJqdGkiOiIyRDc5RDE5NjM1NzNCMkZENUM2RThGNEI1QjY5NkU1RCIsImlhdCI6MTYyNzcwNzM4NCwic2NvcGUiOlsiYXBpIiwib3BlbmlkIiwicHJvZmlsZSIsInZpcCIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJHb29nbGUiXX0.K_VfDYbgL1kVJ_VMZ1IN34veUTiNW5zl5S9cPVoiU--qyXkRCy2vCetoRqM56oqAZzOWBIGyatda1KuGRozyRfOOoKvnx5iyTFzpVkLMz0MCbfpsq5fwxdZc8vV01eIVhZLLPQzsUC8lEGWM2j66eR0Oh8brZzegmEfN7CAFQlklLxurBfwpeSmvqcXS7VTeA8FW9SO97MrqQd1kIt_oXPePjG7MmuPUMQWSmsyOf92e9uzm9AANLni4w5EGMOdOmr9KBmHw3D4hy2W7PY1DDjC1dGqHgYmLtCfQ4LoHH8DaW_OC0ngxMoao8pqAbN3E26UPu9YNEd3AbHQTPaNJ_RojgULAHCAgbZPJkqRdAXXqX1Y3ogaYkXkqgIZ2e9Jk3rwA_H66J84m3xQKWi4z1iIjmXnJqePpP-3Qw7L_2-E90RZn0sHXXH5m3vZ_9XPBjgWN2l73Y3uqacxJvF1TXP0lZgAElFYKq75S_3h7FK-8AX6m-g8PhwIfdk1pbZHDHpSdUEQL3Q5Bc3y8koQYltI_YbLiaR_jZXm-D4C0_KVefrtiJTnspTUJwHO0xKKP8DFtPFQA291FciT12yh_zCllO2PX7nAeV6TU5PY7_jhNpkXDGjQ0EPZizlBPat0U1fTQZT3UrpsPXbq5DoRvhq_Nbqx2J5gtefg-RD4pwU0",
    "expires_in": 2592000,
    "token_type": "Bearer",
    "refresh_token": "pQabTRRiq5WqR1s-hyT4khS-qEgFufNzrf4Vvq3QoTM",
    "scope": "api offline_access openid profile vip"
}

authorizedHeaders = {
    "Content-Type": "application/json",
    "User-Agent": "Wuxiaworld/8 CFNetwork/1126 Darwin/19.5.0",
    "Accept": "*/*",
    "Accept-Language": "en-us",
    "Authorization": "Bearer " + loginJson["access_token"],
    "Accept-Encoding": "gzip, deflate, br"
}

BASE_URL = "https://www.wuxiaworld.com/api/"


def login():
    body = {
        "grant_type": "external",
        "provider": "google",
        "external_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY1YjNmZWFhZDlkYjBmMzhiMWI0YWI5NDU1M2ZmMTdkZTRkZDRkNDkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI1NjY2MzI4OTAyODktanFkcGtsa2prbzM1cTY2Mm45ZGE4Z3VjOGhldmhmcHMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1NjY2MzI4OTAyODktZmxjNG5xbWpmYnB1dHYyYzN0dHJwZmlqYXE2ZWE2MWsuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTQ4NDA2MDkxNzk2MDY0OTM3OTAiLCJlbWFpbCI6InRudHVhbjA3MTI0OTRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ2ejNLOWFiZHZ1RUh3Q3pDZ25iaXVBIiwibm9uY2UiOiJTdWVhMkU1TkNNQ3Rta2FIWXlpejJRdzdraTFWSkdETDIwUTUxRmlJWUR3IiwibmFtZSI6IlR1YW4gVHJ1b25nIE5nb2MiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDYuZ29vZ2xldXNlcmNvbnRlbnQuY29tLy1kUWtqN0NHZlc1OC9BQUFBQUFBQUFBSS9BQUFBQUFBQUFBQS9BTVp1dWNuVVBWMlcyYTM1Vm91OXh5b2k5dXlEZ3dtajFBL3M5Ni1jL3Bob3RvLmpwZyIsImdpdmVuX25hbWUiOiJUdWFuIiwiZmFtaWx5X25hbWUiOiJUcnVvbmcgTmdvYyIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNTkzOTMxNTc4LCJleHAiOjE1OTM5MzUxNzh9.5Zf7rTmgh2cx7ciC3Ceaytwb5PapeVrj-WKNANahw6KytukGElw9U3rupSSTDUC98LKLJMkDBM2CEVHRVD5CB2pWQsArFbpqZ_OR9tzig_3_oVnPtInPeSPRiKakwPJsjeSKwM07Z6RS7w5FWmtHkj3B-n3iIxSiz4HY2H1QQR-4YSXq-0Wn6Tb7ciJblEXqOB5U1M_aFDkE8f4BcRd_uvc0saizQg8FhyVf6YtaXXPI050qo3llipdrIjCsFS0_myl9-QrhzGpqpMjX4oiIh3lPdNLKzKBkv5KhD45ErqotOW_GrkvtR-_2wT1a_ZJXN042BHF5a-rmX9HYgw5EDA",
        "audience": "https://www.wuxiaworld.com",
        "scope": "openid profile offline_access vip api",
        "client_id": "external",
        "client_secret": "b127c83d-db1b-4f52-a76d-420a934725f3"
    }

    response = requests.post(
        "https://www.wuxiaworld.com/connect/token", data=body)
    if response.status_code == 200:
        jsonData = response.json()
        return jsonData

    return ""


def getChapterList(novelCodeName):
    headers = authorizedHeaders
    response = requests.get(
        BASE_URL + "novels/chapters/" + novelCodeName, headers=headers)

    if response.status_code == 200:
        jsonData = response.json()
        return jsonData

    return ""


def getChapterContent(novelCodeName, chapterCodeName):
    headers = authorizedHeaders
    response = requests.get(
        BASE_URL + "novels/chapters/" + novelCodeName + "/" + chapterCodeName, headers=headers)

    if response.status_code == 200:
        jsonData = response.json()
        return jsonData

    return ""


def getChapterComment(novelCodeName, commentId):
    headers = authorizedHeaders
    params = {
        "page": 1
    }
    response = requests.get(
        BASE_URL + "comments/" + str(commentId) + "/top", headers=headers, params=params)

    if response.status_code == 200:
        jsonData = response.json()
        return jsonData

    return ""
