import cleanLinks
import sys
import os
directory = sys.argv[1]

for filename in os.listdir(directory):
    print(os.path.join(directory, filename))
    print(filename)