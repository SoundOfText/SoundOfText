import cleanLinks
import sys
import os
unclean_directory = sys.argv[1]
clean_directory = sys.argv[2]

for filename in os.listdir(unclean_directory):
    cleanLinks.clean(unclean_directory + filename, clean_directory+filename)