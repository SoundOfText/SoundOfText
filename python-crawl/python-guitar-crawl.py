from bs4 import BeautifulSoup
import sys
import urllib2
import requests
import time

url = "https://www.ultimate-guitar.com/bands/a.htm"
r  = requests.get(url)
soup = BeautifulSoup(r.text)

url_news = soup.find_all("a")
print(url_news)
queue = [[url, url]]
dict_url = {}
output_len = 0

while (True):
	curr_url = queue[0][1]
	print "curr_url" + " " + curr_url

	source_addition_pair = queue[0]
	queue.pop(0)
	# print "pop"

	# try:
	# 	curr_url[0]
	# except:
	# 	continue

	# if "eecs.umich" not in curr_url and curr_url[0] != '/':
	# 	continue
	# if "TEMPLATE" in curr_url:
	# 	continue
	# if dict_url.has_key(curr_url):
	# 	continue
	# if curr_url[-1:] != '/' and curr_url[-4:] != "html":
	# 	continue

	try:
		r = requests.get(curr_url)
		soup = BeautifulSoup(r.text)
	except:
		continue
	try:
		for link in soup.find_all('a'):
			the_link = link.get('href')

			# print "adding " + the_link + " to the queue"
			source_addition_list = [curr_url, link.get('href')]
			queue.append(source_addition_list)
	except:
		continue


	print source_addition_pair[0] + " " + source_addition_pair[1]

	dict_url[curr_url] = 1
	output_len = output_len + 1
	if output_len == 2000:
		break