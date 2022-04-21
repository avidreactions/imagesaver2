import os
import shutil
import requests
from bs4 import *
from urllib.parse import urlparse
from os.path import splitext

def get_ext(url):
  parsed = urlparse(url)
  root, ext = splitext(parsed.path)
  return ext

def download_images(images, folder_path):
  count = 0
  image_list = []
  respObj = dict()
  print(f"total {len(images)} have been found!")

  if len(images) != 0:
    for i, image in enumerate(images):
      try:
        image_link = image["src"]
        ext = get_ext(image["src"])
        if len(ext) == 0:
          ext = ".jpg"

        request = requests.get(image_link).content
        with open(f"{folder_path}/images{i+1}{ext}", "wb+") as f:
            f.write(request)
        with open("downloaded.txt", "a") as w:
          w.write(image_link + "\n")
          w.write("\n");
        image_list.append(image_link)

        count += 1
      except requests.exceptions.RequestException as err:
        print("*****************************", err)


    if count == len(images):
      print("All images have been downloaded!")

    else:
      print(f"Total {count} images downloaded out of {len(images)}")
    return image_list

def grab_images(url):
  print(f"grabbing images from {url}")
  
  url_request = requests.get(url)

  soup = BeautifulSoup(url_request.text, "html.parser")

  images = soup.findAll('img')

  folder_path = '../downloads'
  
  if os.path.exists(folder_path):
    shutil.rmtree(folder_path)
  
  os.makedirs(folder_path)

  response = download_images(images, folder_path)

  return response
