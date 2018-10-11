import sys
import argparse

#this is very simple. run python cleanlinks.py <file path to clean> > <new filename for clean links>
#example: python cleanLinks.py artistLinks/n-links.out > cleanLinks/n-links.out


def clean(in_file):
    url_dict = {}

    f = open(in_file, 'r')
    for line in f:
        line = line.strip()
        if "http" not in line:
            continue
        else:
            if line.startswith('[ '):
                line = line[2:]
            if line.endswith(']'):
                line = line[:-1]
            if line.endswith(','):
                line = line[:-1]
            if line.endswith("'"):
                line = line[:-1]
            if line.startswith("'"):
                line = line[1:]
        url_dict[line] = 1

    for url in url_dict.keys():
        print url


def main():
    filename = sys.argv[1]
    clean(in_file)

if __name__ =="__main__":
    main()   