import sys
import argparse

#this is very simple. run python cleanlinks.py <file path to clean> > <new filename for clean links>
#example: python cleanLinks.py artistLinks/n-links.out > cleanLinks/n-links.out


def clean(in_file, out_file):
    url_dict = {}

    f = open(in_file, 'r')
    o = open(out_file, 'w')
    for line in f:
        line = line.strip()
        if "http" not in line:
            continue
        else:
            if line.startswith('[ '):
                line = line[2:].strip()
            if line.endswith(']'):
                line = line[:-1].strip()
            if line.endswith(','):
                line = line[:-1].strip()
            if line.endswith("'"):
                line = line[:-1].strip()
            if line.startswith("'"):
                line = line[1:].strip()
        url_dict[line] = 1

    for url in sorted(url_dict.keys()):
        o.write(url+"\n")
    f.close()
    o.close()


def main():
    filename = sys.argv[1]
    clean(in_file)

if __name__ =="__main__":
    main()   