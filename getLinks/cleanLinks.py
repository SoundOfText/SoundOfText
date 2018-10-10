import sys
filename = sys.argv[1]

#this is very simple. run python cleanlinks.py <file path to clean> > <new filename for clean links>
#example: python cleanLinks.py artistLinks/n-links.out > cleanLinks/n-links.out

f = open(filename, 'r')
for line in f:
    line = line.strip()
    if "http" not in line:
        continue
    else:
        if line.startswith('[ '):
            print line[2:]
            line = line[2:]
        if line.endswith(']'):
            line = line[:-1]
        if line.endswith(','):
            line = line[:-1]
    print line.strip()

