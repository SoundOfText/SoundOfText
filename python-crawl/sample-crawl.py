#alcllahn
#Allie Lahnala

from bs4 import BeautifulSoup
import sys
import urllib2
import requests
import time


# program takes two arguments
# 1st is file containing all the seed urls, this assignment will be one (http://www.eecs.umich.edu) myseedURLs.txt 2000
# 2nd is the max number of urls, for this assignment it will be 2000



seed_url = sys.argv[1]
max_urls = sys.argv[2]

f = open(seed_url, 'r')
url = f.readline()
r = requests.get(url)

soup = BeautifulSoup(r.text)

queue = [[url, url]]
dict_url = {}
output_len = 0
# t0 = time.clock()

while (len(queue) > 0):
	curr_url = queue[0][1]
	#print "curr_url" + " " + curr_url

	source_addition_pair = queue[0]
	queue.pop(0)
	# print "pop"

	try:
		curr_url[0]
	except:
		continue

	if "eecs.umich" not in curr_url and curr_url[0] != '/':
		continue
	if "TEMPLATE" in curr_url:
		continue
	if dict_url.has_key(curr_url):
		continue
	if curr_url[-1:] != '/' and curr_url[-4:] != "html":
		continue

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

# total_time = time.clock() - t0
# print "total time ", total_time

