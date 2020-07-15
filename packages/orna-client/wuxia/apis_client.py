import requests
import brotli

loginJson = {
    "access_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZBOEYzNTkwRDU2MDAyRDAxRDgzQUMyOTJFQjkyN0FENTk2NzFFMDAiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJhbzgxa05WZ0F0QWRnNndwTHJrbnJWbG5IZ0EifQ.eyJuYmYiOjE1OTM5MzE1NzgsImV4cCI6MTU5NjUyMzU3OCwiaXNzIjoiaHR0cHM6Ly93d3cud3V4aWF3b3JsZC5jb20iLCJhdWQiOiJhcGkiLCJjbGllbnRfaWQiOiJleHRlcm5hbCIsInN1YiI6IjA5OTU2Mzc4LTEyMTYtNDc4Yy05NmUzLTM1MGUyYzkyNzNjZiIsImF1dGhfdGltZSI6MTU5MzkzMTU3OCwiaWRwIjoibG9jYWwiLCJuYW1lIjoiSGFrdW5hMTgxMSIsImVtYWlsIjoidG50dWFuMDcxMjQ5NEBnbWFpbC5jb20iLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwidmlwIiwiYXBpIiwib2ZmbGluZV9hY2Nlc3MiXSwiYW1yIjpbIkdvb2dsZSJdfQ.wGQJu9ysS-RwTarEHL7Qc1h40qc0IUFvZmLfu4Avc-xaeSvivkXo-ioEraE-t0dHEow7ZyAdX1mVmnXrUxZnVSyokoUnfL_rQlCHY-moWhZqV9psjybAl5UXOfkGKzw1bFkJaaa8p06_9NeV2zVSsicTaEn-hUtTvxRbrx7W5V27sDDOZbI5uovx7d-K53Xs0OkzkbypFU12jwhmj8tKceQXINMKcdOJ7qwCPZh4VZeGqUSo_2hQWYlnJnPuL4hqEpVTize0R3LZj-LQYOe3Sw89RwyAuebuEQVJa4rNtYMnPXsBHQ9i9xG4bsomUiaHPNi1wLdjFm-jKpECCb2-IeD64OydYmTDL2G6hkrwsChrEdjSDGjVqdxLg6yecUWikxNiVJJ4in3B0J3CuuQcLEKSwPISDL8ZfEprvvHiqzI_wGiBLsoS9_M8_40wy0C202NuRx2OkNps1MeLGSkylAOb0FITiwyrSH3_vs_mVNFQtjWteQu5x7tf0__3DN2PooS4lb_hUs4m5EPUdO97Ah3FOGmTFggn7_YcXRR6eyzA3Bx1ujjbTF-T0sVTEcNUC7AC4LJhaKiD3CDV_ytdXoj7Ianjuhfih0UGjVTDyQb7h8bxWqvjJsUExU9sl4s0n0eIt6jF5JFH5wxAnWoc0meoexQhJbYQga6ewpxXqEs",
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
        "https://www.wuxiaworld.com/api/novels/chapters/" + novelCodeName, headers=headers)

    if response.status_code == 200:
        jsonData = response.json()
        return jsonData

    return ""


def getChapterContent(novelCodeName, chapterCodeName):
    headers = authorizedHeaders
    response = requests.get(
        "https://www.wuxiaworld.com/api/novels/chapters/" + novelCodeName + "/" + chapterCodeName, headers=headers)

    if response.status_code == 200:
        jsonData = response.json()
        return jsonData

    return ""
