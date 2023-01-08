from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import urllib.request
import os

driver = webdriver.Chrome('C:\chromedriver.exe')
driver.get("https://imginn.com/jjuho_book/")

last_height = driver.execute_script(
        "return document.body.scrollHeight")  #브라우져 높이를 확인 가능(자바스크립트)
print(last_height)

while True:
        # Scroll down to bottom
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);"
                              )  # 브라우져 끝까지 스크롤을 내리겠다.

        # Wait to load page
        time.sleep(1)  # 페이지 로딩 될 동안 웨잇

        # Calculate new scroll height and compare with last scroll height
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height == last_height:
            count=1
            picturNumber=1
            time.sleep(3)
            totalImgNumber = len(driver.find_elements(By.CLASS_NAME,"img"))
            print(totalImgNumber)
# 스크롤이 끝까지 내려가서 더이상 내릴 것이 없을 때
            while True:
                try:
                    if count>=totalImgNumber:
                        break
                    try:
                        print(count)
                        imgUrl=driver.find_element(By.XPATH,"/html/body/div[2]/div[5]/div["+str(picturNumber)+"]/div[1]/a/img").get_attribute("src")
                        opener = urllib.request.build_opener()
                        opener.addheaders = [('User-Agent', 'MyApp/1.0')]
                        urllib.request.install_opener(opener)
                        urllib.request.urlretrieve(
                             imgUrl,
                                    "C:\practicer\jjuhoInsta" + "\\" + "picture" + "." + str(count) + ".jpg")
                        count=count+1
                        picturNumber=picturNumber+1
                    except Exception as e:
                        picturNumber=picturNumber+1
                except:
                    print("error")
                    print(count)
                    break
            print("over")
            break

     
        last_height = new_height
